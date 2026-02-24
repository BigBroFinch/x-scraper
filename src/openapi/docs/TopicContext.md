
# TopicContext


## Properties

Name | Type
------------ | -------------
`description` | string
`following` | boolean
`iconUrl` | string
`id` | string
`name` | string
`notInterested` | boolean
`topicId` | string

## Example

```typescript
import type { TopicContext } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "following": null,
  "iconUrl": null,
  "id": null,
  "name": null,
  "notInterested": null,
  "topicId": null,
} satisfies TopicContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TopicContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


