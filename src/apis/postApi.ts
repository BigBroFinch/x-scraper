import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildTwitterApiResponse, GraphQLOperationRegistry, InitOverridesType } from '@/utils';
import * as i from '@/openapi';

type PostCreateTweetParam = {
  tweetText: string;
  mediaIds?: string[];
  taggedUsers?: string[][];
  inReplyToTweetId?: string;
  attachmentUrl?: string;
  conversationControl?: 'Community' | 'Verified' | 'ByInvitation' | (string & {});
  extraParam?: { [key: string]: any };
};

type PostDeleteTweetParam = { tweetId: string; extraParam?: { [key: string]: any } };
type PostCreateRetweetParam = { tweetId: string; extraParam?: { [key: string]: any } };
type PostDeleteRetweetParam = { sourceTweetId: string; extraParam?: { [key: string]: any } };
type PostFavoriteTweetParam = { tweetId: string; extraParam?: { [key: string]: any } };
type PostUnfavoriteTweetParam = { tweetId: string; extraParam?: { [key: string]: any } };

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;
  operations: GraphQLOperationRegistry;

  constructor(api: i.PostApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
    this.operations = new GraphQLOperationRegistry(flag, initOverrides);
  }

  async postCreateTweet(param: PostCreateTweetParam): Promise<TwitterApiUtilsResponse<i.CreateTweetResponse>> {
    const args = { tweetText: param.tweetText, ...param.extraParam };
    const queryId = 'CreateTweet';
    const template = this.operations.template(queryId);
    const features = i.PostCreateTweetRequestFeaturesFromJSON(template['features']);
    const variables = i.PostCreateTweetRequestVariablesFromJSON(template['variables']);

    if (param.mediaIds) {
      variables.media.mediaEntities = param.mediaIds.map((mediaId, index) => ({
        mediaId,
        taggedUsers: param.taggedUsers?.[index] || [],
      }));
    }

    variables.attachmentUrl = param.attachmentUrl;
    if (param.conversationControl) {
      variables.conversationControl = { mode: param.conversationControl };
    }
    if (param.inReplyToTweetId) {
      variables.reply = { excludeReplyUserIds: [], inReplyToTweetId: param.inReplyToTweetId };
    }
    variables.disallowedReplyOptions = null as any;

    const response = await this.api.postCreateTweetRaw({
      pathQueryId: template['queryId'],
      postCreateTweetRequest: {
        queryId: template['queryId'],
        features,
        variables: { ...variables, ...args },
      },
    });
    return buildTwitterApiResponse(response, await response.value());
  }

  async postDeleteTweet(param: PostDeleteTweetParam): Promise<TwitterApiUtilsResponse<i.DeleteTweetResponse>> {
    const args = { tweetId: param.tweetId, ...param.extraParam };
    const queryId = 'DeleteTweet';
    const template = this.operations.template(queryId);
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(template['variables']);
    const response = await this.api.postDeleteTweetRaw({
      pathQueryId: template['queryId'],
      postDeleteTweetRequest: { queryId: template['queryId'], variables: { ...variables, ...args } },
    });
    return buildTwitterApiResponse(response, await response.value());
  }

  async postCreateRetweet(param: PostCreateRetweetParam): Promise<TwitterApiUtilsResponse<i.CreateRetweetResponse>> {
    const args = { tweetId: param.tweetId, ...param.extraParam };
    const queryId = 'CreateRetweet';
    const template = this.operations.template(queryId);
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(template['variables']);
    const response = await this.api.postCreateRetweetRaw({
      pathQueryId: template['queryId'],
      postCreateRetweetRequest: { queryId: template['queryId'], variables: { ...variables, ...args } },
    });
    return buildTwitterApiResponse(response, await response.value());
  }

  async postDeleteRetweet(param: PostDeleteRetweetParam): Promise<TwitterApiUtilsResponse<i.DeleteRetweetResponse>> {
    const args = { sourceTweetId: param.sourceTweetId, ...param.extraParam };
    const queryId = 'DeleteRetweet';
    const template = this.operations.template(queryId);
    const variables = i.PostDeleteRetweetRequestVariablesFromJSON(template['variables']);
    const response = await this.api.postDeleteRetweetRaw({
      pathQueryId: template['queryId'],
      postDeleteRetweetRequest: { queryId: template['queryId'], variables: { ...variables, ...args } },
    });
    return buildTwitterApiResponse(response, await response.value());
  }

  async postFavoriteTweet(param: PostFavoriteTweetParam): Promise<TwitterApiUtilsResponse<i.FavoriteTweetResponse>> {
    const args = { tweetId: param.tweetId, ...param.extraParam };
    const queryId = 'FavoriteTweet';
    const template = this.operations.template(queryId);
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(template['variables']);
    const response = await this.api.postFavoriteTweetRaw({
      pathQueryId: template['queryId'],
      postFavoriteTweetRequest: { queryId: template['queryId'], variables: { ...variables, ...args } },
    });
    return buildTwitterApiResponse(response, await response.value());
  }

  async postUnfavoriteTweet(
    param: PostUnfavoriteTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.UnfavoriteTweetResponse>> {
    const args = { tweetId: param.tweetId, ...param.extraParam };
    const queryId = 'UnfavoriteTweet';
    const template = this.operations.template(queryId);
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(template['variables']);
    const response = await this.api.postUnfavoriteTweetRaw({
      pathQueryId: template['queryId'],
      postUnfavoriteTweetRequest: { queryId: template['queryId'], variables: { ...variables, ...args } },
    });
    return buildTwitterApiResponse(response, await response.value());
  }
}
