import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, errorCheck, getKwargs, InitOverridesType, userResultConverter } from '@/utils';
import * as i from '@/openapi';

type getUsersByRestIdsParam = { userIds: string[]; extraParam?: { [key: string]: any } };
type ResponseType = TwitterApiUtilsResponse<import('@/models').UserApiUtilsData[]>;

export class UsersApiUtils {
  api: i.UsersApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.UsersApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async getUsersByRestIds(param: getUsersByRestIdsParam): Promise<ResponseType> {
    const args = { userIds: param.userIds, ...param.extraParam };
    const kwargs = getKwargs(this.flag['UsersByRestIds'], args);
    const response = await this.api.getUsersByRestIdsRaw(kwargs, this.initOverrides(this.flag['UsersByRestIds']));
    const result = errorCheck((await response.value()).data.users, (await response.value()).errors);
    const user = userResultConverter(result);
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: user,
    };
  }
}
