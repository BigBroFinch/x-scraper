# V11PostApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postCreateFriendships**](V11PostApi.md#postcreatefriendships) | **POST** /1.1/friendships/create.json |  |
| [**postDestroyFriendships**](V11PostApi.md#postdestroyfriendships) | **POST** /1.1/friendships/destroy.json |  |



## postCreateFriendships

> postCreateFriendships(includeBlockedBy, includeBlocking, includeCanDm, includeCanMediaTag, includeExtHasNftAvatar, includeExtIsBlueVerified, includeExtProfileImageShape, includeExtVerifiedType, includeFollowedBy, includeMuteEdge, includeProfileInterstitialType, includeWantRetweets, skipStatus, userId)



post create friendships

### Example

```ts
import {
  Configuration,
  V11PostApi,
} from 'x-scraper';
import type { PostCreateFriendshipsRequest } from 'x-scraper';

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
  const api = new V11PostApi(config);

  const body = {
    // number
    includeBlockedBy: 56,
    // number
    includeBlocking: 56,
    // number
    includeCanDm: 56,
    // number
    includeCanMediaTag: 56,
    // number
    includeExtHasNftAvatar: 56,
    // number
    includeExtIsBlueVerified: 56,
    // number
    includeExtProfileImageShape: 56,
    // number
    includeExtVerifiedType: 56,
    // number
    includeFollowedBy: 56,
    // number
    includeMuteEdge: 56,
    // number
    includeProfileInterstitialType: 56,
    // number
    includeWantRetweets: 56,
    // number
    skipStatus: 56,
    // string
    userId: userId_example,
  } satisfies PostCreateFriendshipsRequest;

  try {
    const data = await api.postCreateFriendships(body);
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
| **includeBlockedBy** | `number` |  | [Defaults to `1`] |
| **includeBlocking** | `number` |  | [Defaults to `1`] |
| **includeCanDm** | `number` |  | [Defaults to `1`] |
| **includeCanMediaTag** | `number` |  | [Defaults to `1`] |
| **includeExtHasNftAvatar** | `number` |  | [Defaults to `1`] |
| **includeExtIsBlueVerified** | `number` |  | [Defaults to `1`] |
| **includeExtProfileImageShape** | `number` |  | [Defaults to `1`] |
| **includeExtVerifiedType** | `number` |  | [Defaults to `1`] |
| **includeFollowedBy** | `number` |  | [Defaults to `1`] |
| **includeMuteEdge** | `number` |  | [Defaults to `1`] |
| **includeProfileInterstitialType** | `number` |  | [Defaults to `1`] |
| **includeWantRetweets** | `number` |  | [Defaults to `1`] |
| **skipStatus** | `number` |  | [Defaults to `1`] |
| **userId** | `string` |  | [Defaults to `&#39;44196397&#39;`] |

### Return type

`void` (Empty response body)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postDestroyFriendships

> postDestroyFriendships(includeBlockedBy, includeBlocking, includeCanDm, includeCanMediaTag, includeExtHasNftAvatar, includeExtIsBlueVerified, includeExtProfileImageShape, includeExtVerifiedType, includeFollowedBy, includeMuteEdge, includeProfileInterstitialType, includeWantRetweets, skipStatus, userId)



post destroy friendships

### Example

```ts
import {
  Configuration,
  V11PostApi,
} from 'x-scraper';
import type { PostDestroyFriendshipsRequest } from 'x-scraper';

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
  const api = new V11PostApi(config);

  const body = {
    // number
    includeBlockedBy: 56,
    // number
    includeBlocking: 56,
    // number
    includeCanDm: 56,
    // number
    includeCanMediaTag: 56,
    // number
    includeExtHasNftAvatar: 56,
    // number
    includeExtIsBlueVerified: 56,
    // number
    includeExtProfileImageShape: 56,
    // number
    includeExtVerifiedType: 56,
    // number
    includeFollowedBy: 56,
    // number
    includeMuteEdge: 56,
    // number
    includeProfileInterstitialType: 56,
    // number
    includeWantRetweets: 56,
    // number
    skipStatus: 56,
    // string
    userId: userId_example,
  } satisfies PostDestroyFriendshipsRequest;

  try {
    const data = await api.postDestroyFriendships(body);
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
| **includeBlockedBy** | `number` |  | [Defaults to `1`] |
| **includeBlocking** | `number` |  | [Defaults to `1`] |
| **includeCanDm** | `number` |  | [Defaults to `1`] |
| **includeCanMediaTag** | `number` |  | [Defaults to `1`] |
| **includeExtHasNftAvatar** | `number` |  | [Defaults to `1`] |
| **includeExtIsBlueVerified** | `number` |  | [Defaults to `1`] |
| **includeExtProfileImageShape** | `number` |  | [Defaults to `1`] |
| **includeExtVerifiedType** | `number` |  | [Defaults to `1`] |
| **includeFollowedBy** | `number` |  | [Defaults to `1`] |
| **includeMuteEdge** | `number` |  | [Defaults to `1`] |
| **includeProfileInterstitialType** | `number` |  | [Defaults to `1`] |
| **includeWantRetweets** | `number` |  | [Defaults to `1`] |
| **skipStatus** | `number` |  | [Defaults to `1`] |
| **userId** | `string` |  | [Defaults to `&#39;44196397&#39;`] |

### Return type

`void` (Empty response body)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/x-www-form-urlencoded`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

