
# UserUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`affiliatesHighlightedLabel` | { [key: string]: any; }
`avatar` | [UserAvatar](UserAvatar.md)
`businessAccount` | { [key: string]: any; }
`core` | [UserCore](UserCore.md)
`creatorSubscriptionsCount` | number
`dmPermissions` | [UserDmPermissions](UserDmPermissions.md)
`followRequestSent` | boolean
`hasGraduatedAccess` | boolean
`hasHiddenLikesOnProfile` | boolean
`hasHiddenSubscriptionsOnProfile` | boolean
`hasNftAvatar` | boolean
`highlightsInfo` | [UserHighlightsInfo](UserHighlightsInfo.md)
`id` | string
`isBlueVerified` | boolean
`isProfileTranslatable` | boolean
`legacy` | [UserLegacy](UserLegacy.md)
`legacyExtendedProfile` | [UserLegacyExtendedProfile](UserLegacyExtendedProfile.md)
`location` | [UserLocation](UserLocation.md)
`mediaPermissions` | [UserMediaPermissions](UserMediaPermissions.md)
`parodyCommentaryFanLabel` | string
`premiumGiftingEligible` | boolean
`privacy` | [UserPrivacy](UserPrivacy.md)
`professional` | [UserProfessional](UserProfessional.md)
`profileBio` | [UserProfileBio](UserProfileBio.md)
`profileDescriptionLanguage` | string
`profileImageShape` | string
`relationshipPerspectives` | [UserRelationshipPerspectives](UserRelationshipPerspectives.md)
`restId` | string
`superFollowEligible` | boolean
`superFollowedBy` | boolean
`superFollowing` | boolean
`tipjarSettings` | [UserTipJarSettings](UserTipJarSettings.md)
`userSeedTweetCount` | number
`verification` | [UserVerification](UserVerification.md)
`verificationInfo` | [UserVerificationInfo](UserVerificationInfo.md)
`message` | string
`reason` | string

## Example

```typescript
import type { UserUnion } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "affiliatesHighlightedLabel": null,
  "avatar": null,
  "businessAccount": null,
  "core": null,
  "creatorSubscriptionsCount": null,
  "dmPermissions": null,
  "followRequestSent": null,
  "hasGraduatedAccess": null,
  "hasHiddenLikesOnProfile": null,
  "hasHiddenSubscriptionsOnProfile": null,
  "hasNftAvatar": null,
  "highlightsInfo": null,
  "id": null,
  "isBlueVerified": null,
  "isProfileTranslatable": null,
  "legacy": null,
  "legacyExtendedProfile": null,
  "location": null,
  "mediaPermissions": null,
  "parodyCommentaryFanLabel": null,
  "premiumGiftingEligible": null,
  "privacy": null,
  "professional": null,
  "profileBio": null,
  "profileDescriptionLanguage": null,
  "profileImageShape": null,
  "relationshipPerspectives": null,
  "restId": null,
  "superFollowEligible": null,
  "superFollowedBy": null,
  "superFollowing": null,
  "tipjarSettings": null,
  "userSeedTweetCount": null,
  "verification": null,
  "verificationInfo": null,
  "message": null,
  "reason": null,
} satisfies UserUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


