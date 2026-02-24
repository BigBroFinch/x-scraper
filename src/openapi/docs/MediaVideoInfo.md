
# MediaVideoInfo


## Properties

Name | Type
------------ | -------------
`aspectRatio` | Array&lt;number&gt;
`durationMillis` | number
`variants` | [Array&lt;MediaVideoInfoVariant&gt;](MediaVideoInfoVariant.md)

## Example

```typescript
import type { MediaVideoInfo } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "aspectRatio": null,
  "durationMillis": null,
  "variants": null,
} satisfies MediaVideoInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MediaVideoInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


