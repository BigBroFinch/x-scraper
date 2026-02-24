# x-scraper

English | [简体中文](./README.zh-CN.md)

`x-scraper` is a TypeScript SDK for X/Twitter internal GraphQL endpoints.
It focuses on practical, ready-to-run usage while keeping strong OpenAPI-generated types.

## Features

- Automatic guest token initialization
- Cookie-authenticated client support
- Practical high-level APIs for common user/tweet/interaction flows

## Installation

<details open>
<summary><strong>npm</strong></summary>

```bash
npm install @finch_ren/x-scraper
```

</details>

<details>
<summary><strong>pnpm</strong></summary>

```bash
pnpm add @finch_ren/x-scraper
```

</details>

<details>
<summary><strong>yarn</strong></summary>

```bash
yarn add @finch_ren/x-scraper
```

</details>

## Quick Start

### Guest mode

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();
  const client = await scraper.getGuestClient();

  const user = await client.getUserByScreenName({ screenName: 'elonmusk' });
  console.log(user.data?.user?.legacy?.screenName);

  const tweets = await client.getUserTweets({ userId: '44196397' });
  console.log(tweets.raw.response.status);
}

main().catch(console.error);
```

### Cookie mode

A) Browser-exported cookie array

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();

  const client = await scraper.getClientFromCookies([
    { domain: '.x.com', name: 'ct0', value: '<csrf_token>' },
    { domain: '.x.com', name: 'auth_token', value: '<auth_token>' },
  ]);

  const profile = await client.getUserByScreenName({ screenName: 'jack' });
  console.log(profile.raw.response.status);
}

main().catch(console.error);
```

B) Cookie map (`name -> value`)

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();

  const client = await scraper.getClientFromCookies({
    ct0: '<csrf_token>',
    auth_token: '<auth_token>',
  });

  const profile = await client.getUserByScreenName({ screenName: 'jack' });
  console.log(profile.raw.response.status);
}

main().catch(console.error);
```

## API Entry Styles

Most APIs support both styles:

- Flat shortcut: `client.getUserByScreenName(...)`
- Grouped API: `client.user.getUserByScreenName(...)`

```ts
const userA = await client.getUserByScreenName({ screenName: 'elonmusk' });
const userB = await client.user.getUserByScreenName({ screenName: 'elonmusk' });

const tweetsA = await client.getUserTweets({ userId: '44196397' });
const tweetsB = await client.tweet.getUserTweets({ userId: '44196397' });

await client.createTweet({ tweetText: 'hello' });
await client.post.postCreateTweet({ tweetText: 'hello' });
```

## Auth and Runtime Notes

### Cookie notes

- You can use the `Cookie-Editor` browser extension to export cookies as JSON and pass it to `getClientFromCookies([...])`
- Do not commit cookies to git
- Use local files or environment variables for secret injection

### Header/platform mismatch

If cookie origin and `sec-ch-ua-platform` mismatch, override header manually:

```ts
import { XScraper } from '@finch_ren/x-scraper';

const scraper = new XScraper();
scraper.setAdditionalApiHeaders({
  'sec-ch-ua-platform': '"Windows"',
});
```

### Risk notice

- This SDK depends on private endpoints that may change without notice
- Authenticated calls may trigger account risk controls
- Add retry + backoff in production

## Local Development

```bash
pnpm install
pnpm build
pnpm test
```

## Regenerate OpenAPI Code

```bash
pnpm generate
```

## `openapi/placeholder.json`

`openapi/placeholder.json` is a runtime GraphQL operation template registry.
It is used by the SDK to build request variables/features/fieldToggles and endpoint metadata.

Typical fields:

- `@path`: endpoint path (used in transaction id generation)
- `@method`: HTTP method (used in transaction id generation)
- `queryId`: GraphQL query id
- `variables`: default variable template
- `features` / `fieldToggles`: default toggles

Code linkage:

- `src/api.ts` loads it as `flagData`
- `src/utils/api.ts#getKwargs` builds request params from templates
- API groups (`client.tweet.*`, `client.user.*`, `client.space.*`) read templates via `this.flag[...]`

Notes:

- `client.space.getAudioSpaceById` and `client.space.getBroadcastQuery` depend on this file
- `client.getLiveVideoStreamStatus` (v1.1 endpoint) does not depend on this file

## Acknowledgements

Core source is based on:

- [fa0311/twitter-openapi-typescript](https://github.com/fa0311/twitter-openapi-typescript)

This project adds integration and higher-level SDK ergonomics on top of upstream,
including additional Space APIs:

- `getAudioSpaceById`
- `getLiveVideoStreamStatus`
- `getBroadcastQuery`
