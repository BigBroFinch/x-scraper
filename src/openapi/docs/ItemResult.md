
# ItemResult


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`result` | [TweetUnion](TweetUnion.md)

## Example

```typescript
import type { ItemResult } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "result": null,
} satisfies ItemResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


