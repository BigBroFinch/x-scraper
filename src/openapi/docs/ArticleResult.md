
# ArticleResult


## Properties

Name | Type
------------ | -------------
`coverMedia` | [ArticleCoverMedia](ArticleCoverMedia.md)
`id` | string
`lifecycleState` | [ArticleLifecycleState](ArticleLifecycleState.md)
`metadata` | [ArticleMetadata](ArticleMetadata.md)
`previewText` | string
`restId` | string
`title` | string

## Example

```typescript
import type { ArticleResult } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "coverMedia": null,
  "id": null,
  "lifecycleState": null,
  "metadata": null,
  "previewText": null,
  "restId": null,
  "title": null,
} satisfies ArticleResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArticleResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


