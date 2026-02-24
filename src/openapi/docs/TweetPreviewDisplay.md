
# TweetPreviewDisplay


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`cta` | [TweetPreviewDisplayCta](TweetPreviewDisplayCta.md)
`limitedActionResults` | [TweetLimitedActionResults](TweetLimitedActionResults.md)
`tweet` | [TweetPreviewDisplayTweet](TweetPreviewDisplayTweet.md)

## Example

```typescript
import type { TweetPreviewDisplay } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "cta": null,
  "limitedActionResults": null,
  "tweet": null,
} satisfies TweetPreviewDisplay

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetPreviewDisplay
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


