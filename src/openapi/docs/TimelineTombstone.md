
# TimelineTombstone


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`itemType` | [ContentItemType](ContentItemType.md)
`tombstoneDisplayType` | string
`tombstoneInfo` | [TombstoneInfo](TombstoneInfo.md)

## Example

```typescript
import type { TimelineTombstone } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "itemType": null,
  "tombstoneDisplayType": null,
  "tombstoneInfo": null,
} satisfies TimelineTombstone

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTombstone
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


