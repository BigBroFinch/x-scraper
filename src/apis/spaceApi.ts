import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, errorCheck, getKwargs, InitOverridesType } from '@/utils';
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

  constructor(api: i.OtherApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
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
    const kwargs = getKwargs(this.flag['AudioSpaceById'], args);
    const response = await this.api.getAudioSpaceByIdRaw(kwargs, this.initOverrides(this.flag['AudioSpaceById']));
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async getBroadcastQuery(
    param: GetBroadcastQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.BroadcastQueryResponse>> {
    const args = {
      id: param.id,
      ...param.extraParam,
    };
    const kwargs = getKwargs(this.flag['BroadcastQuery'], args);
    const response = await this.api.getBroadcastQueryRaw(kwargs, this.initOverrides(this.flag['BroadcastQuery']));
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }
}
