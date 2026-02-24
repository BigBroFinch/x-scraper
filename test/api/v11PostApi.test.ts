import { getClient } from '@test/init';

test('postCreateFriendships', async () => {
  const client = await getClient();
  const response = await client.v11Post.postCreateFriendships({ userId: '44196397' });
  expect(response.raw.response.ok).toBe(true);
});

test('postDestroyFriendships', async () => {
  const client = await getClient();
  const response = await client.v11Post.postDestroyFriendships({ userId: '44196397' });
  expect(response.raw.response.ok).toBe(true);
});
