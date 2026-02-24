
# UserVerificationInfoReason


## Properties

Name | Type
------------ | -------------
`description` | [UserVerificationInfoReasonDescription](UserVerificationInfoReasonDescription.md)
`overrideVerifiedYear` | number
`verifiedSinceMsec` | string

## Example

```typescript
import type { UserVerificationInfoReason } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "overrideVerifiedYear": null,
  "verifiedSinceMsec": null,
} satisfies UserVerificationInfoReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserVerificationInfoReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


