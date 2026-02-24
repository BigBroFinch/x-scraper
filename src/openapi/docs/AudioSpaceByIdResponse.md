
# AudioSpaceByIdResponse


## Properties

Name | Type
------------ | -------------
`data` | [AudioSpaceData](AudioSpaceData.md)
`errors` | [Array&lt;ErrorResponse&gt;](ErrorResponse.md)

## Example

```typescript
import type { AudioSpaceByIdResponse } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "errors": null,
} satisfies AudioSpaceByIdResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceByIdResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


