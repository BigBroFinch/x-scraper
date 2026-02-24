
# UserTipJarSettings


## Properties

Name | Type
------------ | -------------
`bandcampHandle` | string
`bitcoinHandle` | string
`cashAppHandle` | string
`ethereumHandle` | string
`gofundmeHandle` | string
`isEnabled` | boolean
`patreonHandle` | string
`payPalHandle` | string
`venmoHandle` | string

## Example

```typescript
import type { UserTipJarSettings } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "bandcampHandle": null,
  "bitcoinHandle": null,
  "cashAppHandle": null,
  "ethereumHandle": null,
  "gofundmeHandle": null,
  "isEnabled": null,
  "patreonHandle": null,
  "payPalHandle": null,
  "venmoHandle": null,
} satisfies UserTipJarSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserTipJarSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


