
# UserProfessional


## Properties

Name | Type
------------ | -------------
`category` | [Array&lt;UserProfessionalCategory&gt;](UserProfessionalCategory.md)
`professionalType` | string
`restId` | string

## Example

```typescript
import type { UserProfessional } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "professionalType": null,
  "restId": null,
} satisfies UserProfessional

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserProfessional
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


