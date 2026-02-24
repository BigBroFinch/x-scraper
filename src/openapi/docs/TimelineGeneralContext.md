
# TimelineGeneralContext


## Properties

Name | Type
------------ | -------------
`contextImageUrls` | Array&lt;string&gt;
`contextType` | string
`landingUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)
`text` | string
`type` | [SocialContextUnionType](SocialContextUnionType.md)

## Example

```typescript
import type { TimelineGeneralContext } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "contextImageUrls": null,
  "contextType": null,
  "landingUrl": null,
  "text": null,
  "type": null,
} satisfies TimelineGeneralContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineGeneralContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


