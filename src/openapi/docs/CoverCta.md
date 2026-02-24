
# CoverCta


## Properties

Name | Type
------------ | -------------
`text` | string
`buttonStyle` | string
`callbacks` | [Array&lt;Callback&gt;](Callback.md)
`clientEventInfo` | [CtaClientEventInfo](CtaClientEventInfo.md)
`ctaBehavior` | [TimelineCoverBehavior](TimelineCoverBehavior.md)

## Example

```typescript
import type { CoverCta } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "text": null,
  "buttonStyle": null,
  "callbacks": null,
  "clientEventInfo": null,
  "ctaBehavior": null,
} satisfies CoverCta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CoverCta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


