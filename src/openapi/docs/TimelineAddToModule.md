
# TimelineAddToModule


## Properties

Name | Type
------------ | -------------
`moduleEntryId` | string
`moduleItems` | [Array&lt;ModuleItem&gt;](ModuleItem.md)
`prepend` | boolean
`type` | [InstructionType](InstructionType.md)

## Example

```typescript
import type { TimelineAddToModule } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "moduleEntryId": null,
  "moduleItems": null,
  "prepend": null,
  "type": null,
} satisfies TimelineAddToModule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineAddToModule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


