import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, InitOverridesType } from '@/utils';
import * as i from '@/openapi';

export type GetLiveVideoStreamStatusParam = {
  mediaKey: string;
  client?: string;
  useSyndicationGuestId?: boolean;
  cookieSetHost?: string;
  extraParam?: { [key: string]: any };
};

export class V11GetApiUtils {
  api: i.V11GetApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V11GetApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async getLiveVideoStreamStatus(param: GetLiveVideoStreamStatusParam): Promise<TwitterApiUtilsResponse<i.LiveVideoStreamStatusResponse>> {
    const args = {
      mediaKey: param.mediaKey,
      client: param.client ?? 'web',
      useSyndicationGuestId: param.useSyndicationGuestId ?? false,
      cookieSetHost: param.cookieSetHost ?? 'x.com',
      ...param.extraParam,
    };
    const response = await this.api.getLiveVideoStreamStatusRaw(args);
    const data = await response.value();
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data,
    };
  }
}
