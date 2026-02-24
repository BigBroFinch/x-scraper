
# BroadcastGraphQL


## Properties

Name | Type
------------ | -------------
`availableForReplay` | boolean
`broadcastId` | string
`cameraRotation` | number
`chatOption` | number
`endTime` | number
`height` | number
`id` | string
`imageUrl` | string
`imageUrlMedium` | string
`imageUrlSmall` | string
`isHighLatency` | boolean
`mediaKey` | string
`periscopeUser` | [PeriscopeUser](PeriscopeUser.md)
`pingTime` | number
`preLiveSlateUrl` | string
`privateChat` | boolean
`scheduledStartTime` | number
`source` | string
`startTime` | number
`state` | string
`status` | string
`totalWatched` | number
`totalWatching` | number
`userResults` | [BroadcastGraphQLUserResults](BroadcastGraphQLUserResults.md)
`viewCountGraph` | Array&lt;number&gt;

## Example

```typescript
import type { BroadcastGraphQL } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "availableForReplay": null,
  "broadcastId": null,
  "cameraRotation": null,
  "chatOption": null,
  "endTime": null,
  "height": null,
  "id": null,
  "imageUrl": null,
  "imageUrlMedium": null,
  "imageUrlSmall": null,
  "isHighLatency": null,
  "mediaKey": null,
  "periscopeUser": null,
  "pingTime": null,
  "preLiveSlateUrl": null,
  "privateChat": null,
  "scheduledStartTime": null,
  "source": null,
  "startTime": null,
  "state": null,
  "status": null,
  "totalWatched": null,
  "totalWatching": null,
  "userResults": null,
  "viewCountGraph": null,
} satisfies BroadcastGraphQL

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BroadcastGraphQL
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


