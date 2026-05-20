import type { DefaultFlag, ApiFunction, TwitterApiUtilsResponse } from '@/models';
import type * as i from '@/openapi';
import { buildHeader, getKwargs, InitOverridesType } from './api';

export type GraphQLOperationTemplate = DefaultFlag[string];

export class GraphQLOperationRegistry {
  constructor(
    private readonly flag: DefaultFlag,
    private readonly initOverrides: InitOverridesType,
  ) {}

  template(key: string): GraphQLOperationTemplate {
    const template = this.flag[key];
    if (template == undefined) {
      throw Error(`Missing GraphQL operation template: ${key}`);
    }
    return template;
  }

  requestParameters(key: string, param: { [key: string]: any }): any {
    return getKwargs(this.template(key), param);
  }

  initOverride(key: string): i.InitOverrideFunction {
    return this.initOverrides(this.template(key));
  }
}

export const buildTwitterApiResponse = <T>(
  response: i.ApiResponse<unknown>,
  data: T,
): TwitterApiUtilsResponse<T> => {
  return {
    raw: { response: response.raw },
    header: buildHeader(response.raw.headers),
    data,
  };
};

export const executeGraphQLRequest = async <TData, TResponse>(args: {
  apiFn: ApiFunction<TResponse>;
  operations: GraphQLOperationRegistry;
  key: string;
  param: { [key: string]: any };
  convertFn: (value: TResponse) => TData;
}): Promise<TwitterApiUtilsResponse<TData>> => {
  const response = await args.apiFn(
    args.operations.requestParameters(args.key, args.param),
    args.operations.initOverride(args.key),
  );
  const value = await response.value();
  return buildTwitterApiResponse(response, args.convertFn(value));
};
