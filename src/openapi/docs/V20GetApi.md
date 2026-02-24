# V20GetApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSearchAdaptive**](V20GetApi.md#getsearchadaptive) | **GET** /2/search/adaptive.json |  |



## getSearchAdaptive

> getSearchAdaptive(includeProfileInterstitialType, includeBlocking, includeBlockedBy, includeFollowedBy, includeWantRetweets, includeMuteEdge, includeCanDm, includeCanMediaTag, includeExtHasNftAvatar, includeExtIsBlueVerified, includeExtVerifiedType, includeExtProfileImageShape, skipStatus, cardsPlatform, includeCards, includeExtAltText, includeExtLimitedActionResults, includeQuoteCount, includeReplyCount, tweetMode, includeExtViews, includeEntities, includeUserEntities, includeExtMediaColor, includeExtMediaAvailability, includeExtSensitiveMediaWarning, includeExtTrustedFriendsMetadata, sendErrorCodes, simpleQuotedTweet, q, querySource, count, requestContext, pc, spellingCorrections, includeExtEditControl, ext)



get search adaptive

### Example

```ts
import {
  Configuration,
  V20GetApi,
} from 'x-scraper';
import type { GetSearchAdaptiveRequest } from 'x-scraper';

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
  const api = new V20GetApi(config);

  const body = {
    // number
    includeProfileInterstitialType: 1,
    // number
    includeBlocking: 1,
    // number
    includeBlockedBy: 1,
    // number
    includeFollowedBy: 1,
    // number
    includeWantRetweets: 1,
    // number
    includeMuteEdge: 1,
    // number
    includeCanDm: 1,
    // number
    includeCanMediaTag: 1,
    // number
    includeExtHasNftAvatar: 1,
    // number
    includeExtIsBlueVerified: 1,
    // number
    includeExtVerifiedType: 1,
    // number
    includeExtProfileImageShape: 1,
    // number
    skipStatus: 1,
    // string
    cardsPlatform: Web-12,
    // number
    includeCards: 1,
    // boolean
    includeExtAltText: true,
    // boolean
    includeExtLimitedActionResults: false,
    // boolean
    includeQuoteCount: true,
    // number
    includeReplyCount: 1,
    // string
    tweetMode: extended,
    // boolean
    includeExtViews: true,
    // boolean
    includeEntities: true,
    // boolean
    includeUserEntities: true,
    // boolean
    includeExtMediaColor: true,
    // boolean
    includeExtMediaAvailability: true,
    // boolean
    includeExtSensitiveMediaWarning: true,
    // boolean
    includeExtTrustedFriendsMetadata: true,
    // boolean
    sendErrorCodes: true,
    // boolean
    simpleQuotedTweet: true,
    // string
    q: elon musk,
    // string
    querySource: trend_click,
    // number
    count: 20,
    // string
    requestContext: launch,
    // number
    pc: 1,
    // number
    spellingCorrections: 1,
    // boolean
    includeExtEditControl: true,
    // string
    ext: mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,birdwatchPivot,enrichments,superFollowMetadata,unmentionInfo,editControl,vibe,
  } satisfies GetSearchAdaptiveRequest;

  try {
    const data = await api.getSearchAdaptive(body);
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
| **includeProfileInterstitialType** | `number` |  | [Defaults to `1`] |
| **includeBlocking** | `number` |  | [Defaults to `1`] |
| **includeBlockedBy** | `number` |  | [Defaults to `1`] |
| **includeFollowedBy** | `number` |  | [Defaults to `1`] |
| **includeWantRetweets** | `number` |  | [Defaults to `1`] |
| **includeMuteEdge** | `number` |  | [Defaults to `1`] |
| **includeCanDm** | `number` |  | [Defaults to `1`] |
| **includeCanMediaTag** | `number` |  | [Defaults to `1`] |
| **includeExtHasNftAvatar** | `number` |  | [Defaults to `1`] |
| **includeExtIsBlueVerified** | `number` |  | [Defaults to `1`] |
| **includeExtVerifiedType** | `number` |  | [Defaults to `1`] |
| **includeExtProfileImageShape** | `number` |  | [Defaults to `1`] |
| **skipStatus** | `number` |  | [Defaults to `1`] |
| **cardsPlatform** | `string` |  | [Defaults to `&#39;Web-12&#39;`] |
| **includeCards** | `number` |  | [Defaults to `1`] |
| **includeExtAltText** | `boolean` |  | [Defaults to `true`] |
| **includeExtLimitedActionResults** | `boolean` |  | [Defaults to `false`] |
| **includeQuoteCount** | `boolean` |  | [Defaults to `true`] |
| **includeReplyCount** | `number` |  | [Defaults to `1`] |
| **tweetMode** | `string` |  | [Defaults to `&#39;extended&#39;`] |
| **includeExtViews** | `boolean` |  | [Defaults to `true`] |
| **includeEntities** | `boolean` |  | [Defaults to `true`] |
| **includeUserEntities** | `boolean` |  | [Defaults to `true`] |
| **includeExtMediaColor** | `boolean` |  | [Defaults to `true`] |
| **includeExtMediaAvailability** | `boolean` |  | [Defaults to `true`] |
| **includeExtSensitiveMediaWarning** | `boolean` |  | [Defaults to `true`] |
| **includeExtTrustedFriendsMetadata** | `boolean` |  | [Defaults to `true`] |
| **sendErrorCodes** | `boolean` |  | [Defaults to `true`] |
| **simpleQuotedTweet** | `boolean` |  | [Defaults to `true`] |
| **q** | `string` |  | [Defaults to `&#39;elon musk&#39;`] |
| **querySource** | `string` |  | [Defaults to `&#39;trend_click&#39;`] |
| **count** | `number` |  | [Defaults to `20`] |
| **requestContext** | `string` |  | [Defaults to `&#39;launch&#39;`] |
| **pc** | `number` |  | [Defaults to `1`] |
| **spellingCorrections** | `number` |  | [Defaults to `1`] |
| **includeExtEditControl** | `boolean` |  | [Defaults to `true`] |
| **ext** | `string` |  | [Defaults to `&#39;mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,birdwatchPivot,enrichments,superFollowMetadata,unmentionInfo,editControl,vibe&#39;`] |

### Return type

`void` (Empty response body)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

