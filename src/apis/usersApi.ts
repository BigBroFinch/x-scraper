import { DefaultFlag, TwitterApiUtilsResponse, UserApiUtilsData } from '@/models';
import {
  errorCheck,
  executeGraphQLRequest,
  GraphQLOperationRegistry,
  InitOverridesType,
  userResultConverter,
} from '@/utils';
import * as i from '@/openapi';

type getUsersByRestIdsParam = { userIds: string[]; extraParam?: { [key: string]: any } };
type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData[]>;

export class UsersApiUtils {
  api: i.UsersApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;
  operations: GraphQLOperationRegistry;

  constructor(api: i.UsersApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
    this.operations = new GraphQLOperationRegistry(flag, initOverrides);
  }

  async getUsersByRestIds(param: getUsersByRestIdsParam): Promise<ResponseType> {
    const args = { userIds: param.userIds, ...param.extraParam };
    return executeGraphQLRequest<UserApiUtilsData[], i.UsersResponse>({
      apiFn: this.api.getUsersByRestIdsRaw.bind(this.api),
      operations: this.operations,
      key: 'UsersByRestIds',
      param: args,
      convertFn: (value) => userResultConverter(errorCheck(value.data.users, value.errors)),
    });
  }
}
