
# ErrorResponse


## Properties

Name | Type
------------ | -------------
`code` | number
`extensions` | [ErrorExtensions](ErrorExtensions.md)
`kind` | string
`locations` | [Array&lt;Location&gt;](Location.md)
`message` | string
`name` | string
`path` | [Array&lt;ErrorResponsePathInner&gt;](ErrorResponsePathInner.md)
`retryAfter` | number
`source` | string
`tracing` | [Tracing](Tracing.md)

## Example

```typescript
import type { ErrorResponse } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "extensions": null,
  "kind": null,
  "locations": null,
  "message": null,
  "name": null,
  "path": null,
  "retryAfter": null,
  "source": null,
  "tracing": null,
} satisfies ErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


