
# UserVerificationInfo


## Properties

Name | Type
------------ | -------------
`isIdentityVerified` | boolean
`reason` | [UserVerificationInfoReason](UserVerificationInfoReason.md)

## Example

```typescript
import type { UserVerificationInfo } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "isIdentityVerified": null,
  "reason": null,
} satisfies UserVerificationInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserVerificationInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


