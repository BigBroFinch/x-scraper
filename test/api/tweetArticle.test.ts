import { getClient, logger } from '@test/init';

const ARTICLE_TWEET_ID = '2056962917308960945';
const ARTICLE_TITLE = '免费订阅ChatGPT Plus - GoPay方案｜手把手教程';

test('getTweetDetail article tweet', async () => {
  logger.log('getTweetDetail article tweet');
  const client = await getClient();
  const response = await client.tweet.getTweetDetail({ focalTweetId: ARTICLE_TWEET_ID });
  const exact = response.data.data.find((e) => e.tweet?.legacy?.idStr === ARTICLE_TWEET_ID || e.tweet?.restId === ARTICLE_TWEET_ID);

  expect(response.raw.response.ok).toBe(true);
  expect(exact?.tweet?.legacy?.fullText).toBe('https://t.co/8kjDuT8BBk');
  expect(exact?.tweet?.article?.articleResults?.result?.title).toBe(ARTICLE_TITLE);
  expect(exact?.tweet?.article?.articleResults?.result?.previewText).toContain('GoPay');
});
