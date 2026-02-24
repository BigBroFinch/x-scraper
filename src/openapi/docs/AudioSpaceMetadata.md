
# AudioSpaceMetadata


## Properties

Name | Type
------------ | -------------
`restId` | string
`state` | string
`title` | string
`mediaKey` | string
`contentType` | string
`createdAt` | number
`startedAt` | number
`endedAt` | string
`scheduledStart` | number
`updatedAt` | number
`disallowJoin` | boolean
`narrowCastSpaceType` | number
`isEmployeeOnly` | boolean
`isLocked` | boolean
`isMuted` | boolean
`isSpaceAvailableForReplay` | boolean
`isSpaceAvailableForClipping` | boolean
`conversationControls` | number
`maxAdminCapacity` | number
`maxGuestSessions` | number
`noIncognito` | boolean
`replayStartTime` | number
`totalReplayWatched` | number
`totalLiveListeners` | number
`replyCount` | number
`mentionedUsers` | [Array&lt;AudioSpaceMentionedUser&gt;](AudioSpaceMentionedUser.md)
`creatorResults` | [UserResults](UserResults.md)
`tweetResults` | [ItemResult](ItemResult.md)

## Example

```typescript
import type { AudioSpaceMetadata } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "restId": null,
  "state": null,
  "title": null,
  "mediaKey": null,
  "contentType": null,
  "createdAt": null,
  "startedAt": null,
  "endedAt": null,
  "scheduledStart": null,
  "updatedAt": null,
  "disallowJoin": null,
  "narrowCastSpaceType": null,
  "isEmployeeOnly": null,
  "isLocked": null,
  "isMuted": null,
  "isSpaceAvailableForReplay": null,
  "isSpaceAvailableForClipping": null,
  "conversationControls": null,
  "maxAdminCapacity": null,
  "maxGuestSessions": null,
  "noIncognito": null,
  "replayStartTime": null,
  "totalReplayWatched": null,
  "totalLiveListeners": null,
  "replyCount": null,
  "mentionedUsers": null,
  "creatorResults": null,
  "tweetResults": null,
} satisfies AudioSpaceMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


