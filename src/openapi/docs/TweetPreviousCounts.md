
# TweetPreviousCounts


## Properties

Name | Type
------------ | -------------
`bookmarkCount` | number
`favoriteCount` | number
`quoteCount` | number
`replyCount` | number
`retweetCount` | number

## Example

```typescript
import type { TweetPreviousCounts } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "bookmarkCount": null,
  "favoriteCount": null,
  "quoteCount": null,
  "replyCount": null,
  "retweetCount": null,
} satisfies TweetPreviousCounts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetPreviousCounts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


