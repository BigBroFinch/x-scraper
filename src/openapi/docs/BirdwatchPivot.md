
# BirdwatchPivot


## Properties

Name | Type
------------ | -------------
`callToAction` | [BirdwatchPivotCallToAction](BirdwatchPivotCallToAction.md)
`destinationUrl` | string
`footer` | [BirdwatchPivotFooter](BirdwatchPivotFooter.md)
`iconType` | string
`note` | [BirdwatchPivotNote](BirdwatchPivotNote.md)
`shorttitle` | string
`subtitle` | [BirdwatchPivotSubtitle](BirdwatchPivotSubtitle.md)
`title` | string
`titleDetail` | string
`visualStyle` | string

## Example

```typescript
import type { BirdwatchPivot } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "callToAction": null,
  "destinationUrl": null,
  "footer": null,
  "iconType": null,
  "note": null,
  "shorttitle": null,
  "subtitle": null,
  "title": null,
  "titleDetail": null,
  "visualStyle": null,
} satisfies BirdwatchPivot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BirdwatchPivot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


