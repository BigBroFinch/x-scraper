
# ModuleEntry


## Properties

Name | Type
------------ | -------------
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`feedbackInfo` | [FeedbackInfo](FeedbackInfo.md)
`itemContent` | [ItemContentUnion](ItemContentUnion.md)

## Example

```typescript
import type { ModuleEntry } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "clientEventInfo": null,
  "feedbackInfo": null,
  "itemContent": null,
} satisfies ModuleEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModuleEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


