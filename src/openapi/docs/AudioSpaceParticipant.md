
# AudioSpaceParticipant


## Properties

Name | Type
------------ | -------------
`periscopeUserId` | string
`start` | number
`twitterScreenName` | string
`displayName` | string
`avatarUrl` | string
`isVerified` | boolean
`isMutedByAdmin` | boolean
`isMutedByGuest` | boolean
`userResults` | [UserResults](UserResults.md)

## Example

```typescript
import type { AudioSpaceParticipant } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "periscopeUserId": null,
  "start": null,
  "twitterScreenName": null,
  "displayName": null,
  "avatarUrl": null,
  "isVerified": null,
  "isMutedByAdmin": null,
  "isMutedByGuest": null,
  "userResults": null,
} satisfies AudioSpaceParticipant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceParticipant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


