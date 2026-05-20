import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { executeGraphQLRequest, GraphQLOperationRegistry, InitOverridesType } from '@/utils';
import * as i from '@/openapi';

type GetAudioSpaceByIdParam = {
  id: string;
  isMetatagsQuery?: boolean;
  withReplays?: boolean;
  withListeners?: boolean;
  extraParam?: { [key: string]: any };
};

type GetBroadcastQueryParam = {
  id: string;
  extraParam?: { [key: string]: any };
};

export class SpaceApiUtils {
  api: i.OtherApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;
  operations: GraphQLOperationRegistry;

  constructor(api: i.OtherApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
    this.operations = new GraphQLOperationRegistry(flag, initOverrides);
  }

  async getAudioSpaceById(
    param: GetAudioSpaceByIdParam,
  ): Promise<TwitterApiUtilsResponse<i.AudioSpaceByIdResponse>> {
    const args = {
      id: param.id,
      ...(param.isMetatagsQuery !== undefined ? { isMetatagsQuery: param.isMetatagsQuery } : {}),
      ...(param.withReplays !== undefined ? { withReplays: param.withReplays } : {}),
      ...(param.withListeners !== undefined ? { withListeners: param.withListeners } : {}),
      ...param.extraParam,
    };
    return executeGraphQLRequest<i.AudioSpaceByIdResponse, i.AudioSpaceByIdResponse>({
      apiFn: this.api.getAudioSpaceByIdRaw.bind(this.api),
      operations: this.operations,
      key: 'AudioSpaceById',
      param: args,
      convertFn: (value) => value,
    });
  }

  async getBroadcastQuery(
    param: GetBroadcastQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.BroadcastQueryResponse>> {
    const args = {
      id: param.id,
      ...param.extraParam,
    };
    return executeGraphQLRequest<i.BroadcastQueryResponse, i.BroadcastQueryResponse>({
      apiFn: this.api.getBroadcastQueryRaw.bind(this.api),
      operations: this.operations,
      key: 'BroadcastQuery',
      param: args,
      convertFn: (value) => value,
    });
  }
}
