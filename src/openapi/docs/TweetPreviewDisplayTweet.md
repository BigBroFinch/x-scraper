
# TweetPreviewDisplayTweet


## Properties

Name | Type
------------ | -------------
`bookmarkCount` | number
`core` | [UserResultCore](UserResultCore.md)
`createdAt` | string
`entities` | object
`favoriteCount` | number
`quoteCount` | number
`replyCount` | number
`restId` | string
`retweetCount` | number
`text` | string
`viewCount` | [TweetPreviewDisplayTweetViewCount](TweetPreviewDisplayTweetViewCount.md)

## Example

```typescript
import type { TweetPreviewDisplayTweet } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "bookmarkCount": null,
  "core": null,
  "createdAt": Sat Dec 31 23:59:59 +0000 2023,
  "entities": null,
  "favoriteCount": null,
  "quoteCount": null,
  "replyCount": null,
  "restId": null,
  "retweetCount": null,
  "text": null,
  "viewCount": null,
} satisfies TweetPreviewDisplayTweet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetPreviewDisplayTweet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


