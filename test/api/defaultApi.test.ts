import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getProfileSpotlightsQuery', async () => {
  logger.log('getProfileSpotlightsQuery');
  const client = await getClient();
  const response = await client.default.getProfileSpotlightsQuery({ screenName: 'elonmusk' });
  const legacy = response.data.result.legacy;
  logger.log(legacy.screenName ?? 'undefined');
  logger.log(`followedBy: ${legacy.followedBy} following: ${legacy.following}`);
  logger.log('┄'.repeat(50));
  expect(response.raw.response.ok).toBe(true);
});

test('getTweetResultByRestId', async () => {
  logger.log('getTweetResultByRestId');
  const client = await getClient();
  const response = await client.default.getTweetResultByRestId({ tweetId: '1349129669258448897' });
  printTweet(response.data!);
  expect(response.raw.response.ok).toBe(true);
});
