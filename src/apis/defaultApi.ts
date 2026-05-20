import type { DefaultFlag, RequestParam, TweetApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import {
  buildTweetApiUtils,
  errorCheck,
  executeGraphQLRequest,
  GraphQLOperationRegistry,
  InitOverridesType,
} from '@/utils';
import type * as i from '@/openapi';

export type ProfileSpotlightsQueryParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

export type TweetResultByRestIdParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

export class DefaultApiUtils {
  api: i.DefaultApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;
  operations: GraphQLOperationRegistry;

  constructor(api: i.DefaultApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
    this.operations = new GraphQLOperationRegistry(flag, initOverrides);
  }

  async request<T1, T2>(param: RequestParam<T1, T2>): Promise<TwitterApiUtilsResponse<T1>> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    return executeGraphQLRequest({
      apiFn,
      operations: this.operations,
      key: param.key,
      param: param.param,
      convertFn: param.convertFn,
    });
  }

  async getProfileSpotlightsQuery(
    param: ProfileSpotlightsQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.UserResultByScreenName>> {
    const args = { screenName: param.screenName, ...param.extraParam };
    const response = await this.request({
      key: 'ProfileSpotlightsQuery',
      apiFn: this.api.getProfileSpotlightsQueryRaw,
      convertFn: (e) => errorCheck(e.data.userResultByScreenName, e.errors),
      param: args,
    });
    return response;
  }

  async getTweetResultByRestId(
    param: TweetResultByRestIdParam,
  ): Promise<TwitterApiUtilsResponse<TweetApiUtilsData | undefined>> {
    const args = { tweetId: param.tweetId, ...param.extraParam };
    const response = await this.request({
      key: 'TweetResultByRestId',
      apiFn: this.api.getTweetResultByRestIdRaw,
      convertFn: (e) => errorCheck(buildTweetApiUtils({ result: errorCheck(e.data.tweetResult, e.errors) }), e.errors),
      param: args,
    });
    return response;
  }
}
