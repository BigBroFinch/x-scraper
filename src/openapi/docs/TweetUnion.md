
# TweetUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`article` | [Article](Article.md)
`authorCommunityRelationship` | [AuthorCommunityRelationship](AuthorCommunityRelationship.md)
`birdwatchPivot` | [BirdwatchPivot](BirdwatchPivot.md)
`card` | [TweetCard](TweetCard.md)
`communityRelationship` | [CommunityRelationship](CommunityRelationship.md)
`communityResults` | [Community](Community.md)
`core` | [UserResultCore](UserResultCore.md)
`editControl` | [TweetEditControl](TweetEditControl.md)
`editPrespective` | [TweetEditPrespective](TweetEditPrespective.md)
`grokAnalysisButton` | boolean
`grokAnalysisFollowups` | Array&lt;string&gt;
`grokShareAttachment` | [GrokShareAttachment](GrokShareAttachment.md)
`hasBirdwatchNotes` | boolean
`isTranslatable` | boolean
`legacy` | [TweetLegacy](TweetLegacy.md)
`noteTweet` | [NoteTweet](NoteTweet.md)
`previousCounts` | [TweetPreviousCounts](TweetPreviousCounts.md)
`quickPromoteEligibility` | object
`quotedRefResult` | [QuotedRefResult](QuotedRefResult.md)
`quotedStatusResult` | [ItemResult](ItemResult.md)
`restId` | string
`source` | string
`superFollowsReplyUserResult` | [SuperFollowsReplyUserResult](SuperFollowsReplyUserResult.md)
`trendResults` | [TrendResults](TrendResults.md)
`unifiedCard` | [UnifiedCard](UnifiedCard.md)
`unmentionData` | { [key: string]: any; }
`views` | [TweetView](TweetView.md)
`limitedActionResults` | { [key: string]: any; }
`mediaVisibilityResults` | [MediaVisibilityResults](MediaVisibilityResults.md)
`tweet` | [TweetPreviewDisplayTweet](TweetPreviewDisplayTweet.md)
`tweetInterstitial` | [TweetInterstitial](TweetInterstitial.md)
`reason` | string
`cta` | [TweetPreviewDisplayCta](TweetPreviewDisplayCta.md)
`limitedActionResults` | [TweetLimitedActionResults](TweetLimitedActionResults.md)

## Example

```typescript
import type { TweetUnion } from 'x-scraper'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "article": null,
  "authorCommunityRelationship": null,
  "birdwatchPivot": null,
  "card": null,
  "communityRelationship": null,
  "communityResults": null,
  "core": null,
  "editControl": null,
  "editPrespective": null,
  "grokAnalysisButton": null,
  "grokAnalysisFollowups": null,
  "grokShareAttachment": null,
  "hasBirdwatchNotes": null,
  "isTranslatable": null,
  "legacy": null,
  "noteTweet": null,
  "previousCounts": null,
  "quickPromoteEligibility": null,
  "quotedRefResult": null,
  "quotedStatusResult": null,
  "restId": null,
  "source": null,
  "superFollowsReplyUserResult": null,
  "trendResults": null,
  "unifiedCard": null,
  "unmentionData": null,
  "views": null,
  "limitedActionResults": null,
  "mediaVisibilityResults": null,
  "tweet": null,
  "tweetInterstitial": null,
  "reason": null,
  "cta": null,
  "limitedActionResults": null,
} satisfies TweetUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


