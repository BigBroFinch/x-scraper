import { getClient } from './init';

async function main() {
  const client = await getClient();
  const response = await client.userList.getBlueVerifiedFollowers({ userId: '44196397' });
  console.log(JSON.stringify(response.data.raw, null, 2));
}

main().catch(console.error);
