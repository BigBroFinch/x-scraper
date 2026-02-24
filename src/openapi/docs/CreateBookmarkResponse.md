
# CreateBookmarkResponse


## Properties

Name | Type
------------ | -------------
`data` | [CreateBookmarkResponseData](CreateBookmarkResponseData.md)
`errors` | [Array&lt;ErrorResponse&gt;](ErrorResponse.md)

## Example

```typescript
import type { CreateBookmarkResponse } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "errors": null,
} satisfies CreateBookmarkResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBookmarkResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


