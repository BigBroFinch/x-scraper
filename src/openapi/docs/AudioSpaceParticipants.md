
# AudioSpaceParticipants


## Properties

Name | Type
------------ | -------------
`total` | number
`admins` | [Array&lt;AudioSpaceParticipant&gt;](AudioSpaceParticipant.md)
`speakers` | [Array&lt;AudioSpaceParticipant&gt;](AudioSpaceParticipant.md)
`listeners` | [Array&lt;AudioSpaceParticipant&gt;](AudioSpaceParticipant.md)

## Example

```typescript
import type { AudioSpaceParticipants } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "admins": null,
  "speakers": null,
  "listeners": null,
} satisfies AudioSpaceParticipants

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceParticipants
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


