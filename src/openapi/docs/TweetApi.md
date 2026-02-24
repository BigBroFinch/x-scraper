# TweetApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBookmarks**](TweetApi.md#getbookmarks) | **GET** /graphql/{pathQueryId}/Bookmarks |  |
| [**getCommunityAboutTimeline**](TweetApi.md#getcommunityabouttimeline) | **GET** /graphql/{pathQueryId}/CommunityAboutTimeline |  |
| [**getCommunityMediaTimeline**](TweetApi.md#getcommunitymediatimeline) | **GET** /graphql/{pathQueryId}/CommunityMediaTimeline |  |
| [**getCommunityTweetsTimeline**](TweetApi.md#getcommunitytweetstimeline) | **GET** /graphql/{pathQueryId}/CommunityTweetsTimeline |  |
| [**getHomeLatestTimeline**](TweetApi.md#gethomelatesttimeline) | **GET** /graphql/{pathQueryId}/HomeLatestTimeline |  |
| [**getHomeTimeline**](TweetApi.md#gethometimeline) | **GET** /graphql/{pathQueryId}/HomeTimeline |  |
| [**getLikes**](TweetApi.md#getlikes) | **GET** /graphql/{pathQueryId}/Likes |  |
| [**getListLatestTweetsTimeline**](TweetApi.md#getlistlatesttweetstimeline) | **GET** /graphql/{pathQueryId}/ListLatestTweetsTimeline |  |
| [**getNotificationsTimeline**](TweetApi.md#getnotificationstimeline) | **GET** /graphql/{pathQueryId}/NotificationsTimeline |  |
| [**getSearchTimeline**](TweetApi.md#getsearchtimeline) | **GET** /graphql/{pathQueryId}/SearchTimeline |  |
| [**getTweetDetail**](TweetApi.md#gettweetdetail) | **GET** /graphql/{pathQueryId}/TweetDetail |  |
| [**getUserHighlightsTweets**](TweetApi.md#getuserhighlightstweets) | **GET** /graphql/{pathQueryId}/UserHighlightsTweets |  |
| [**getUserMedia**](TweetApi.md#getusermedia) | **GET** /graphql/{pathQueryId}/UserMedia |  |
| [**getUserTweets**](TweetApi.md#getusertweets) | **GET** /graphql/{pathQueryId}/UserTweets |  |
| [**getUserTweetsAndReplies**](TweetApi.md#getusertweetsandreplies) | **GET** /graphql/{pathQueryId}/UserTweetsAndReplies |  |



## getBookmarks

> BookmarksResponse getBookmarks(pathQueryId, variables, features)



get bookmarks

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetBookmarksRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: 2neUNDqrrFzbLui8yallcQ,
    // string
    variables: {"count": 20, "includePromotedContent": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetBookmarksRequest;

  try {
    const data = await api.getBookmarks(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;2neUNDqrrFzbLui8yallcQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**BookmarksResponse**](BookmarksResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommunityAboutTimeline

> CommunityAboutTimelineResponse getCommunityAboutTimeline(pathQueryId, variables, features)



get about of community

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetCommunityAboutTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: hSZPW3bFfaXkhJRBnZpLMA,
    // string
    variables: {"communityId": "1489422448332197888", "withCommunity": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetCommunityAboutTimelineRequest;

  try {
    const data = await api.getCommunityAboutTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;hSZPW3bFfaXkhJRBnZpLMA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;communityId\&quot;: \&quot;1489422448332197888\&quot;, \&quot;withCommunity\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**CommunityAboutTimelineResponse**](CommunityAboutTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommunityMediaTimeline

> CommunityMediaTimelineResponse getCommunityMediaTimeline(pathQueryId, variables, features)



get media list of community

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetCommunityMediaTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: eJqXEMJZ0w89TEGgPwEatw,
    // string
    variables: {"communityId": "1489422448332197888", "count": 20, "withCommunity": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetCommunityMediaTimelineRequest;

  try {
    const data = await api.getCommunityMediaTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;eJqXEMJZ0w89TEGgPwEatw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;communityId\&quot;: \&quot;1489422448332197888\&quot;, \&quot;count\&quot;: 20, \&quot;withCommunity\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**CommunityMediaTimelineResponse**](CommunityMediaTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommunityTweetsTimeline

> CommunityTweetsTimelineResponse getCommunityTweetsTimeline(pathQueryId, variables, features)



get tweet list of community. rankingMode:[Recency, Relevance]

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetCommunityTweetsTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: rp4YNcEs-BXdkm1DA4PMhw,
    // string
    variables: {"communityId": "1489422448332197888", "count": 20, "displayLocation": "Community", "rankingMode": "Relevance", "withCommunity": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetCommunityTweetsTimelineRequest;

  try {
    const data = await api.getCommunityTweetsTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;rp4YNcEs-BXdkm1DA4PMhw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;communityId\&quot;: \&quot;1489422448332197888\&quot;, \&quot;count\&quot;: 20, \&quot;displayLocation\&quot;: \&quot;Community\&quot;, \&quot;rankingMode\&quot;: \&quot;Relevance\&quot;, \&quot;withCommunity\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**CommunityTweetsTimelineResponse**](CommunityTweetsTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHomeLatestTimeline

> TimelineResponse getHomeLatestTimeline(pathQueryId, variables, features)



get tweet list of timeline

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetHomeLatestTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: BKB7oi212Fi7kQtCBGE4zA,
    // string
    variables: {"count": 20, "includePromotedContent": true, "latestControlAvailable": true, "requestContext": "launch", "seenTweetIds": ["1349129669258448897"]},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetHomeLatestTimelineRequest;

  try {
    const data = await api.getHomeLatestTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;BKB7oi212Fi7kQtCBGE4zA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: true, \&quot;latestControlAvailable\&quot;: true, \&quot;requestContext\&quot;: \&quot;launch\&quot;, \&quot;seenTweetIds\&quot;: [\&quot;1349129669258448897\&quot;]}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**TimelineResponse**](TimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getHomeTimeline

> TimelineResponse getHomeTimeline(pathQueryId, variables, features)



get tweet list of timeline

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetHomeTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: c-CzHF1LboFilMpsx4ZCrQ,
    // string
    variables: {"count": 20, "includePromotedContent": true, "latestControlAvailable": true, "requestContext": "launch", "seenTweetIds": ["1349129669258448897"], "withCommunity": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetHomeTimelineRequest;

  try {
    const data = await api.getHomeTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;c-CzHF1LboFilMpsx4ZCrQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: true, \&quot;latestControlAvailable\&quot;: true, \&quot;requestContext\&quot;: \&quot;launch\&quot;, \&quot;seenTweetIds\&quot;: [\&quot;1349129669258448897\&quot;], \&quot;withCommunity\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**TimelineResponse**](TimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLikes

> UserTweetsResponse getLikes(pathQueryId, variables, features, fieldToggles)



get user likes tweets

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetLikesRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: lIDpu_NWL7_VhimGGt0o6A,
    // string
    variables: {"userId": "1787148517779406848", "count": 20, "includePromotedContent": false, "withClientEventToken": false, "withBirdwatchNotes": false, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticlePlainText": false},
  } satisfies GetLikesRequest;

  try {
    const data = await api.getLikes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;lIDpu_NWL7_VhimGGt0o6A&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;1787148517779406848\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: false, \&quot;withClientEventToken\&quot;: false, \&quot;withBirdwatchNotes\&quot;: false, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticlePlainText\&quot;: false}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getListLatestTweetsTimeline

> ListLatestTweetsTimelineResponse getListLatestTweetsTimeline(pathQueryId, variables, features)



get tweet list of timeline

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetListLatestTweetsTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: RlZzktZY_9wJynoepm8ZsA,
    // string
    variables: {"listId": "1539453138322673664", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListLatestTweetsTimelineRequest;

  try {
    const data = await api.getListLatestTweetsTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;RlZzktZY_9wJynoepm8ZsA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1539453138322673664\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**ListLatestTweetsTimelineResponse**](ListLatestTweetsTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNotificationsTimeline

> NotificationsTimelineResponse getNotificationsTimeline(pathQueryId, variables, features)



get notification list. timeline_type:[All, Verified, Mentions]

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetNotificationsTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: GquVPn-SKYxKLgLsRPpJ6g,
    // string
    variables: {"timeline_type": "All", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetNotificationsTimelineRequest;

  try {
    const data = await api.getNotificationsTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;GquVPn-SKYxKLgLsRPpJ6g&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;timeline_type\&quot;: \&quot;All\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**NotificationsTimelineResponse**](NotificationsTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSearchTimeline

> SearchTimelineResponse getSearchTimeline(pathQueryId, variables, features)



search tweet list. product:[Top, Latest, People, Photos, Videos]

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetSearchTimelineRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: VhUd6vHVmLBcw0uX-6jMLA,
    // string
    variables: {"rawQuery": "elonmusk", "count": 20, "querySource": "typed_query", "product": "Top"},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetSearchTimelineRequest;

  try {
    const data = await api.getSearchTimeline(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;VhUd6vHVmLBcw0uX-6jMLA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;rawQuery\&quot;: \&quot;elonmusk\&quot;, \&quot;count\&quot;: 20, \&quot;querySource\&quot;: \&quot;typed_query\&quot;, \&quot;product\&quot;: \&quot;Top\&quot;}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**SearchTimelineResponse**](SearchTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTweetDetail

> TweetDetailResponse getTweetDetail(pathQueryId, variables, features, fieldToggles)



get TweetDetail

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetTweetDetailRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: xd_EMdYvB9hfZsZ6Idri0w,
    // string
    variables: {"focalTweetId": "1349129669258448897", "referrer": "home", "with_rux_injections": false, "rankingMode": "Relevance", "includePromotedContent": true, "withCommunity": true, "withQuickPromoteEligibilityTweetFields": true, "withBirdwatchNotes": true, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticleRichContentState": true, "withArticlePlainText": false, "withGrokAnalyze": false, "withDisallowedReplyControls": false},
  } satisfies GetTweetDetailRequest;

  try {
    const data = await api.getTweetDetail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;xd_EMdYvB9hfZsZ6Idri0w&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;focalTweetId\&quot;: \&quot;1349129669258448897\&quot;, \&quot;referrer\&quot;: \&quot;home\&quot;, \&quot;with_rux_injections\&quot;: false, \&quot;rankingMode\&quot;: \&quot;Relevance\&quot;, \&quot;includePromotedContent\&quot;: true, \&quot;withCommunity\&quot;: true, \&quot;withQuickPromoteEligibilityTweetFields\&quot;: true, \&quot;withBirdwatchNotes\&quot;: true, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticleRichContentState\&quot;: true, \&quot;withArticlePlainText\&quot;: false, \&quot;withGrokAnalyze\&quot;: false, \&quot;withDisallowedReplyControls\&quot;: false}&#39;`] |

### Return type

[**TweetDetailResponse**](TweetDetailResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserHighlightsTweets

> UserHighlightsTweetsResponse getUserHighlightsTweets(pathQueryId, variables, features, fieldToggles)



get user highlights tweets

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetUserHighlightsTweetsRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: 70Yf8aSyhGOXaKRLJdVA2A,
    // string
    variables: {"userId": "44196397", "count": 40, "includePromotedContent": true, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticlePlainText": false},
  } satisfies GetUserHighlightsTweetsRequest;

  try {
    const data = await api.getUserHighlightsTweets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;70Yf8aSyhGOXaKRLJdVA2A&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 40, \&quot;includePromotedContent\&quot;: true, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticlePlainText\&quot;: false}&#39;`] |

### Return type

[**UserHighlightsTweetsResponse**](UserHighlightsTweetsResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserMedia

> UserTweetsResponse getUserMedia(pathQueryId, variables, features, fieldToggles)



get user media tweets

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetUserMediaRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: 1H9ibIdchWO0_vz3wJLDTA,
    // string
    variables: {"userId": "44196397", "count": 40, "includePromotedContent": false, "withClientEventToken": false, "withBirdwatchNotes": false, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticlePlainText": false},
  } satisfies GetUserMediaRequest;

  try {
    const data = await api.getUserMedia(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;1H9ibIdchWO0_vz3wJLDTA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 40, \&quot;includePromotedContent\&quot;: false, \&quot;withClientEventToken\&quot;: false, \&quot;withBirdwatchNotes\&quot;: false, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticlePlainText\&quot;: false}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTweets

> UserTweetsResponse getUserTweets(pathQueryId, variables, features, fieldToggles)



get user tweets

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetUserTweetsRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: q6xj5bs0hapm9309hexA_g,
    // string
    variables: {"userId": "44196397", "count": 40, "includePromotedContent": true, "withQuickPromoteEligibilityTweetFields": true, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticlePlainText": false},
  } satisfies GetUserTweetsRequest;

  try {
    const data = await api.getUserTweets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;q6xj5bs0hapm9309hexA_g&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 40, \&quot;includePromotedContent\&quot;: true, \&quot;withQuickPromoteEligibilityTweetFields\&quot;: true, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticlePlainText\&quot;: false}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTweetsAndReplies

> UserTweetsResponse getUserTweetsAndReplies(pathQueryId, variables, features, fieldToggles)



get user replies tweets

### Example

```ts
import {
  Configuration,
  TweetApi,
} from 'x-scraper';
import type { GetUserTweetsAndRepliesRequest } from 'x-scraper';

async function example() {
  console.log("🚀 Testing x-scraper SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new TweetApi(config);

  const body = {
    // string
    pathQueryId: 6hvhmQQ9zPIR8RZWHFAm4w,
    // string
    variables: {"userId": "44196397", "count": 40, "includePromotedContent": true, "withCommunity": true, "withVoice": true},
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "rweb_tipjar_consumption_enabled": true, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "responsive_web_jetfuel_frame": false, "responsive_web_grok_share_attachment_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "tweet_awards_web_tipping_enabled": false, "responsive_web_grok_show_grok_translated_post": false, "responsive_web_grok_analysis_button_from_backend": false, "creator_subscriptions_quote_tweet_preview_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    fieldToggles: {"withArticlePlainText": false},
  } satisfies GetUserTweetsAndRepliesRequest;

  try {
    const data = await api.getUserTweetsAndReplies(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;6hvhmQQ9zPIR8RZWHFAm4w&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 40, \&quot;includePromotedContent\&quot;: true, \&quot;withCommunity\&quot;: true, \&quot;withVoice\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: true, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_graphql_skip_user_profile_image_extensions_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: false, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;tweet_awards_web_tipping_enabled\&quot;: false, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: false, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: false, \&quot;creator_subscriptions_quote_tweet_preview_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticlePlainText\&quot;: false}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

