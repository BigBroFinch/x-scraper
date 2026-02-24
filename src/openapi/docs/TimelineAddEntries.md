
# TimelineAddEntries


## Properties

Name | Type
------------ | -------------
`entries` | [Array&lt;TimelineAddEntry&gt;](TimelineAddEntry.md)
`type` | [InstructionType](InstructionType.md)

## Example

```typescript
import type { TimelineAddEntries } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "entries": null,
  "type": null,
} satisfies TimelineAddEntries

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineAddEntries
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


