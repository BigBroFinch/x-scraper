import { DefaultFlag } from '@/models';
import { InitOverridesType } from '@/utils';
import * as i from '@/openapi';

export class V20GetApiUtils {
  api: i.V20GetApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V20GetApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }
  // TODO: 添加 v2.0 GET API 方法
}
