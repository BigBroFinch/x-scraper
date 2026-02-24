
# PostCreateTweetRequestVariables


## Properties

Name | Type
------------ | -------------
`attachmentUrl` | string
`conversationControl` | [PostCreateTweetRequestVariablesConversationControl](PostCreateTweetRequestVariablesConversationControl.md)
`darkRequest` | boolean
`disallowedReplyOptions` | object
`media` | [PostCreateTweetRequestVariablesMedia](PostCreateTweetRequestVariablesMedia.md)
`reply` | [PostCreateTweetRequestVariablesReply](PostCreateTweetRequestVariablesReply.md)
`semanticAnnotationIds` | Array&lt;object&gt;
`tweetText` | string

## Example

```typescript
import type { PostCreateTweetRequestVariables } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "attachmentUrl": https://x.com/elonmusk/status/1349129669258448897,
  "conversationControl": null,
  "darkRequest": false,
  "disallowedReplyOptions": null,
  "media": null,
  "reply": null,
  "semanticAnnotationIds": null,
  "tweetText": test,
} satisfies PostCreateTweetRequestVariables

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateTweetRequestVariables
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


