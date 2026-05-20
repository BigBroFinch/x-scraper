import { DefaultFlag, RequestParam, TwitterApiUtilsResponse, UserApiUtilsData } from '@/models';
import {
  errorCheck,
  executeGraphQLRequest,
  GraphQLOperationRegistry,
  InitOverridesType,
  userOrNullConverter,
} from '@/utils';
import * as i from '@/openapi';

type getUserByScreenNameParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

type getUserByRestIdParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData>;

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;
  operations: GraphQLOperationRegistry;

  constructor(api: i.UserApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
    this.operations = new GraphQLOperationRegistry(flag, initOverrides);
  }

  async request<T>(param: RequestParam<i.UserResults, T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    return executeGraphQLRequest({
      apiFn,
      operations: this.operations,
      key: param.key,
      param: param.param,
      convertFn: (value) => {
        const result = param.convertFn(value);
        const user = result.result && userOrNullConverter(result.result);
        return { raw: result, user: user };
      },
    });
  }

  async getUserByScreenName(param: getUserByScreenNameParam): Promise<ResponseType> {
    const args = { screen_name: param.screenName, ...param.extraParam };
    return this.request({
      key: 'UserByScreenName',
      apiFn: this.api.getUserByScreenNameRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors),
      param: args,
    });
  }

  async getUserByRestId(param: getUserByRestIdParam): Promise<ResponseType> {
    const args = { userId: param.userId, ...param.extraParam };
    return this.request({
      key: 'UserByRestId',
      apiFn: this.api.getUserByRestIdRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors),
      param: args,
    });
  }
}
