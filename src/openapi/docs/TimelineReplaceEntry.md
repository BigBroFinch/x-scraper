
# TimelineReplaceEntry


## Properties

Name | Type
------------ | -------------
`entry` | [TimelineAddEntry](TimelineAddEntry.md)
`entryIdToReplace` | string
`type` | [InstructionType](InstructionType.md)

## Example

```typescript
import type { TimelineReplaceEntry } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "entry": null,
  "entryIdToReplace": null,
  "type": null,
} satisfies TimelineReplaceEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineReplaceEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


