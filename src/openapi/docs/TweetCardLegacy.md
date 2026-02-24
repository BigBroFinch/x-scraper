
# TweetCardLegacy


## Properties

Name | Type
------------ | -------------
`bindingValues` | [Array&lt;TweetCardLegacyBindingValue&gt;](TweetCardLegacyBindingValue.md)
`cardPlatform` | [TweetCardPlatformData](TweetCardPlatformData.md)
`name` | string
`url` | string
`userRefsResults` | [Array&lt;UserResults&gt;](UserResults.md)

## Example

```typescript
import type { TweetCardLegacy } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "bindingValues": null,
  "cardPlatform": null,
  "name": null,
  "url": null,
  "userRefsResults": null,
} satisfies TweetCardLegacy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetCardLegacy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


