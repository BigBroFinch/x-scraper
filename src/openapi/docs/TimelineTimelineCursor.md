
# TimelineTimelineCursor


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`cursorType` | [CursorType](CursorType.md)
`displayTreatment` | [DisplayTreatment](DisplayTreatment.md)
`entryType` | [ContentEntryType](ContentEntryType.md)
`itemType` | [ContentEntryType](ContentEntryType.md)
`stopOnEmptyResponse` | boolean
`value` | string

## Example

```typescript
import type { TimelineTimelineCursor } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "cursorType": null,
  "displayTreatment": null,
  "entryType": null,
  "itemType": null,
  "stopOnEmptyResponse": null,
  "value": null,
} satisfies TimelineTimelineCursor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTimelineCursor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


