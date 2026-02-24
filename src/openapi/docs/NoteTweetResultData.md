
# NoteTweetResultData


## Properties

Name | Type
------------ | -------------
`entitySet` | [Entities](Entities.md)
`id` | string
`media` | [NoteTweetResultMedia](NoteTweetResultMedia.md)
`richtext` | [NoteTweetResultRichText](NoteTweetResultRichText.md)
`text` | string

## Example

```typescript
import type { NoteTweetResultData } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "entitySet": null,
  "id": null,
  "media": null,
  "richtext": null,
  "text": null,
} satisfies NoteTweetResultData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NoteTweetResultData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


