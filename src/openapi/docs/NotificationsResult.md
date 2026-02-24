
# NotificationsResult


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`notificationTimeline` | [TimelineResult](TimelineResult.md)
`restId` | string

## Example

```typescript
import type { NotificationsResult } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "notificationTimeline": null,
  "restId": null,
} satisfies NotificationsResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationsResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


