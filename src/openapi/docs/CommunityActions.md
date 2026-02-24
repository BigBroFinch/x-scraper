
# CommunityActions


## Properties

Name | Type
------------ | -------------
`deleteActionResult` | [CommunityDeleteActionResult](CommunityDeleteActionResult.md)
`joinActionResult` | [CommunityJoinActionResultUnion](CommunityJoinActionResultUnion.md)
`leaveActionResult` | [CommunityLeaveActionResult](CommunityLeaveActionResult.md)
`pinActionResult` | [CommunityPinActionResult](CommunityPinActionResult.md)
`unpinActionResult` | [CommunityUnpinActionResult](CommunityUnpinActionResult.md)

## Example

```typescript
import type { CommunityActions } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "deleteActionResult": null,
  "joinActionResult": null,
  "leaveActionResult": null,
  "pinActionResult": null,
  "unpinActionResult": null,
} satisfies CommunityActions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityActions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


