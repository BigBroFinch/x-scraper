
# InstructionUnion


## Properties

Name | Type
------------ | -------------
`entries` | [Array&lt;TimelineAddEntry&gt;](TimelineAddEntry.md)
`type` | [InstructionType](InstructionType.md)
`moduleEntryId` | string
`moduleItems` | [Array&lt;ModuleItem&gt;](ModuleItem.md)
`prepend` | boolean
`entry` | [TimelineAddEntry](TimelineAddEntry.md)
`entryIdToReplace` | string
`alertType` | string
`colorConfig` | { [key: string]: any; }
`displayDurationMs` | number
`displayLocation` | string
`iconDisplayInfo` | { [key: string]: any; }
`richText` | [TimelineShowAlertRichText](TimelineShowAlertRichText.md)
`triggerDelayMs` | number
`usersResults` | [Array&lt;UserResults&gt;](UserResults.md)
`direction` | string
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`cover` | [TimelineHalfCover](TimelineHalfCover.md)
`sortIndex` | string

## Example

```typescript
import type { InstructionUnion } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "entries": null,
  "type": null,
  "moduleEntryId": null,
  "moduleItems": null,
  "prepend": null,
  "entry": null,
  "entryIdToReplace": null,
  "alertType": null,
  "colorConfig": null,
  "displayDurationMs": null,
  "displayLocation": null,
  "iconDisplayInfo": null,
  "richText": null,
  "triggerDelayMs": null,
  "usersResults": null,
  "direction": null,
  "clientEventInfo": null,
  "cover": null,
  "sortIndex": null,
} satisfies InstructionUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstructionUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


