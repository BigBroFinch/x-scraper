
# PostCreateTweetRequestVariablesReply


## Properties

Name | Type
------------ | -------------
`excludeReplyUserIds` | Array&lt;object&gt;
`inReplyToTweetId` | string

## Example

```typescript
import type { PostCreateTweetRequestVariablesReply } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "excludeReplyUserIds": null,
  "inReplyToTweetId": 1111111111111111111,
} satisfies PostCreateTweetRequestVariablesReply

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateTweetRequestVariablesReply
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


