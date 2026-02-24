# x-scraper

[English](./README.md) | 简体中文

`x-scraper` 是一个面向 X/Twitter 内部 GraphQL 接口的 TypeScript SDK。  
重点是让常见场景开箱即用，同时保持类型清晰、便于扩展。

## 特性

- 自动 Guest Token 初始化（无需手动配置 token）
- 支持 Cookie 登录态客户端
- 面向常用场景提供开箱即用调用入口（用户、推文、互动等）

## 安装

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

## 简调用示例

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();
  const client = await scraper.getClientFromCookies({
    __cf_bm: '<__cf_bm>',
    __cuid: '<__cuid>',
    _ga: '<_ga>',
    _ga_BLY4P7T5KW: '<_ga_BLY4P7T5KW>',
    _twitter_sess: '<_twitter_sess>',
    auth_token: '<auth_token>',
    ct0: '<ct0>',
    guest_id: '<guest_id>',
    guest_id_ads: '<guest_id_ads>',
    guest_id_marketing: '<guest_id_marketing>',
    kdt: '<kdt>',
    lang: '<lang>',
    personalization_id: '<personalization_id>',
    twid: '<twid>',
  });

  const res = await client.getTweetDetail({
    focalTweetId: '2018440335140024383',
  });
}

main().catch(console.error);
```

<details open>
<summary><strong>返回结果示例（JSON）（仅作展示，请以实际返回结果为准）</strong></summary>

```json
{
  "raw": {
    "instruction": [
      { "type": "TimelineClearCache" },
      { "type": "TimelineAddEntries", "entries": [/* ... */] },
      { "type": "TimelineTerminateTimeline" }
    ]
  },
  "cursor": {
    "bottom": {
      "typename": "TimelineTimelineCursor",
      "cursorType": "Bottom",
      "entryType": "TimelineTimelineCursor",
      "value": "DAAKCgABHB6qs_W__pULAAIAAAGoRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUNVY0F2UXhkOXN4dEJ3Qzl4Y3gyNkJ0SEFNbGdrOFhvU3djQXZHZ0hCZWhBeHdDODE5MVd1SGRIQUwzU3c4Ym9UMGNBdlkrcGhyeDBCd0M4VXJZMXFFZEhBTTJhdnlhTVVBY0F2Z24zSnN3TUJ3Qys2aFJHbEdvSEFOYjhqZmFrVjRjQXZtYzBadkF3UndDOE96NDJsRmtIQUwvWUxVV3NkY2NBeEM2dFJ0d1N4d0MrdFY4R3BFYUhBTDdySXNhMGNzY0F2REthRmR3UHh3REEwNnAydEFxSEFOSDA4eWFZV3NjQXhFN3I5c1JTaHdEQVpFSkc4RXFIQUwwNXpmYTBZd2NBdmJ6SHBxeFJod0M5V1BmVzREWkhBTUJ6b3ZhRVl3Y0F2R3Z0TmN4MGh3QzgzM0Myb0V0SEFMOGNBYmJzUDRjQTdxQm1ScUEyQndDK0Y1SzI4QnJIQUx5OFl5YkVaQWNBdjY5THRyeGJSd0RCQ24wVzBGdUhBTDR6TGJiRVBvY0F2UFZqRnRCVWc9PQgAAwAAAAILAAQAAAAGQm90dG9tAAA"
    }
  },
  "data": [
    {
      "raw": { "typename": "Tweet", "restId": "2018440335140024383" },
      "tweet": {
        "id": "2018440335140024383",
        "text": "SpaceX has acquired xAI, forming one of the most ambitious...",
        "createdAt": "Mon Feb 02 21:44:11 +0000 2026",
        "favoriteCount": 44183,
        "retweetCount": 7746,
        "replyCount": 3354
      },
      "user": {
        "id": "34743251",
        "name": "SpaceX",
        "screenName": "SpaceX",
        "followersCount": 41074731
      }
    },
    {
      "raw": { /* ... */ },
      "tweet": { /* ... */ },
      "user": { /* ... */ }
    }
  ]
}
```

</details>

## 快速开始

### Guest 模式

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

### Cookie 模式

方式 A：浏览器导出的 Cookie 数组

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();

  const client = await scraper.getClientFromCookies([
    {
      domain: '.x.com',
      name: 'ct0',
      value: '<csrf_token>',
    },
    {
      domain: '.x.com',
      name: 'auth_token',
      value: '<auth_token>',
    },
    ...
  ]);

  const profile = await client.getUserByScreenName({ screenName: 'jack' });
  console.log(profile.raw.response.status);
}

main().catch(console.error);
```

方式 B：对象映射（`name -> value`）

```ts
import { XScraper } from '@finch_ren/x-scraper';

async function main() {
  const scraper = new XScraper();

  const client = await scraper.getClientFromCookies({
    __cf_bm: '<__cf_bm>',
    __cuid: '<__cuid>',
    _ga: '<_ga>',
    _ga_BLY4P7T5KW: '<_ga_BLY4P7T5KW>',
    _twitter_sess: '<_twitter_sess>',
    auth_token: '<auth_token>',
    ct0: '<ct0>',
    guest_id: '<guest_id>',
    guest_id_ads: '<guest_id_ads>',
    guest_id_marketing: '<guest_id_marketing>',
    kdt: '<kdt>',
    lang: '<lang>',
    personalization_id: '<personalization_id>',
    twid: '<twid>',
  });

  const profile = await client.getUserByScreenName({ screenName: 'jack' });
  console.log(profile.raw.response.status);
}

main().catch(console.error);
```

## 常用 API 入口

同一能力通常有两种调用方式：

- 顶层快捷方法：`client.getUserByScreenName(...)`
- 分组方法：`client.user.getUserByScreenName(...)`

### 两种写法对照（等价）

```ts
// User
const userA = await client.getUserByScreenName({ screenName: 'elonmusk' });
const userB = await client.user.getUserByScreenName({ screenName: 'elonmusk' });

// Tweet timeline
const tweetsA = await client.getUserTweets({ userId: '44196397' });
const tweetsB = await client.tweet.getUserTweets({ userId: '44196397' });

// Post actions
await client.createTweet({ tweetText: 'hello' });
await client.post.postCreateTweet({ tweetText: 'hello' });
```

### 顶层快捷方法（高频） 

- `client.getUserByScreenName(...)`
- `client.getUserTweets(...)`
- `client.getTweetDetail(...)`
- `client.createTweet(...)`
- `client.deleteTweet(...)`
- `client.likeTweet(...)`
- `client.unlikeTweet(...)`
- `client.retweet(...)`
....

### 分组 API（完整入口）

- `client.tweet`
- `client.user`
- `client.users`
- `client.userList`
- `client.post`
- `client.space`
- `client.v11Get`
- `client.v11Post`
- `client.v20Get`
- `client.default`
- `client.initialState`
....

## 认证与环境说明

### 1) 关于 Cookie

- 可使用浏览器插件 `Cookie-Editor` 导出 JSON 格式 Cookie，再传给 `getClientFromCookies([...])`。
- 不要把 Cookie 写入仓库，建议走本地文件或环境变量注入。

### 2) 平台 Header 一致性

某些账号 Cookie 与 `sec-ch-ua-platform` 不一致时可能失败，可手动覆盖：

```ts
import { XScraper } from '@finch_ren/x-scraper';

const scraper = new XScraper();
scraper.setAdditionalApiHeaders({
  'sec-ch-ua-platform': '"Windows"',
});
```

### 3) 风险与限制

- 该库依赖 X 私有接口，接口字段和行为可能随时变化。
- 登录态调用存在账号风控风险，请自行评估并使用低风险账号。
- 可能触发动态限流，建议在业务侧做重试与退避（backoff）。

## 本地开发

```bash
pnpm install
pnpm build
pnpm test
```

## 重新生成 OpenAPI 代码

```bash
pnpm generate
```

## openapi/placeholder.json 说明

`openapi/placeholder.json` 是运行时使用的 GraphQL 操作模板表，不是普通示例文件。  
SDK 会在请求时读取这里的配置来组装参数与请求上下文。

每个条目通常包含：

- `@path`：接口路径（用于 transaction id 生成等）
- `@method`：HTTP 方法（用于 transaction id 生成等）
- `queryId`：GraphQL queryId
- `variables`：默认变量模板（可被调用参数覆盖）
- `features` / `fieldToggles`：默认开关参数

代码关联关系：

- `src/api.ts` 会加载该文件作为 `flagData`
- `src/utils/api.ts#getKwargs` 会把 `variables/features/fieldToggles` 转成请求参数
- 各 API utils（如 `client.tweet.*`、`client.user.*`、`client.space.*`）通过 `this.flag[...]` 取对应模板

注意：

- `client.space.getAudioSpaceById` 与 `client.space.getBroadcastQuery` 依赖该文件条目
- `client.getLiveVideoStreamStatus`（v1.1 接口）不依赖 `placeholder.json`

## 鸣谢

本项目核心代码来源于：

- [fa0311/twitter-openapi-typescript](https://github.com/fa0311/twitter-openapi-typescript)

在上游基础上，本项目做了工程整合与二次封装，包括：

- 整合 `twitter-openapi` 相关生成内容到当前 SDK 结构
- 提供更直接的调用入口与项目化组织方式

另外补充了 Space 相关接口能力（`client.space`）：

- `getAudioSpaceById`
- `getLiveVideoStreamStatus`
- `getBroadcastQuery`
