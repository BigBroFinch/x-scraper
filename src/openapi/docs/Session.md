
# Session


## Properties

Name | Type
------------ | -------------
`ssoInitTokens` | object
`communitiesActions` | [CommunitiesActions](CommunitiesActions.md)
`country` | string
`guestId` | string
`hasCommunityMemberships` | boolean
`isActiveCreator` | boolean
`isRestrictedSession` | boolean
`isSuperFollowSubscriber` | boolean
`language` | string
`oneFactorLoginEligibility` | [OneFactorLoginEligibility](OneFactorLoginEligibility.md)
`superFollowersCount` | number
`superFollowsApplicationStatus` | string
`userFeatures` | [UserFeatures](UserFeatures.md)
`userId` | string

## Example

```typescript
import type { Session } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "ssoInitTokens": null,
  "communitiesActions": null,
  "country": null,
  "guestId": null,
  "hasCommunityMemberships": null,
  "isActiveCreator": null,
  "isRestrictedSession": null,
  "isSuperFollowSubscriber": null,
  "language": null,
  "oneFactorLoginEligibility": null,
  "superFollowersCount": null,
  "superFollowsApplicationStatus": null,
  "userFeatures": null,
  "userId": null,
} satisfies Session

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Session
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


