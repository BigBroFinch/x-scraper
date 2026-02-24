
# UserResultByScreenNameResult


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`id` | string
`legacy` | [UserResultByScreenNameLegacy](UserResultByScreenNameLegacy.md)
`profilemodules` | { [key: string]: any; }
`restId` | string

## Example

```typescript
import type { UserResultByScreenNameResult } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "id": null,
  "legacy": null,
  "profilemodules": null,
  "restId": null,
} satisfies UserResultByScreenNameResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserResultByScreenNameResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


