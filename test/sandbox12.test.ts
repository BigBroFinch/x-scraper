import { getClient, logger } from './init';

test('getFollowers raw parser check result keys', async () => {
  const client = await getClient();
  const response = await client.userList.getFollowers({ userId: '44196397' });
  const entriesData = response.data.raw.entry;
  
  for (const entry of entriesData) {
     if (entry.content.entryType === "TimelineTimelineItem" || entry.content.typename === "TimelineTimelineItem") {
        const itemContent = (entry.content as any).itemContent;
        if (itemContent.itemType === "TimelineUser") {
           console.log(JSON.stringify(itemContent, null, 2));
           break;
        }
     }
  }
});
