import * as i from '@/openapi';
import { entriesCursor, tweetEntriesConverter } from '@/utils';

const userResult = {
  __typename: i.TypeName.User,
  legacy: {
    createdAt: 'Mon Jan 01 00:00:00 +0000 2024',
    name: 'Test User',
    screenName: 'testuser',
  },
  restId: 'user-1',
};

const tweetResult = {
  result: {
    __typename: i.TypeName.Tweet,
    core: {
      user_results: {
        result: userResult,
      },
    },
    legacy: {
      fullText: 'hello from latest-compatible fixture',
      retweeted_status_result: {
        result: {
          typename: i.TypeName.Tweet,
          core: {
            userResults: {
              result: userResult,
            },
          },
          legacy: {
            fullText: 'retweeted',
          },
        },
      },
    },
    quoted_status_result: {
      result: {
        typename: i.TypeName.Tweet,
        core: {
          userResults: {
            result: userResult,
          },
        },
        legacy: {
          fullText: 'quoted',
        },
      },
    },
  },
};

describe('timeline projection compatibility', () => {
  test('projects tweet entries with current and legacy field names', () => {
    const data = tweetEntriesConverter([
      {
        entryId: 'tweet-1',
        content: {
          __typename: i.TypeName.TimelineTimelineItem,
          itemContent: {
            itemType: i.ContentItemType.TimelineTweet,
            promoted_metadata: { advertiser: 'x' },
            tweet_results: tweetResult,
          },
        },
      },
    ] as unknown as i.TimelineAddEntry[]);

    expect(data).toHaveLength(1);
    expect(data[0].user.legacy.screenName).toBe('testuser');
    expect(data[0].tweet.legacy?.fullText).toBe('hello from latest-compatible fixture');
    expect(data[0].quoted?.tweet.legacy?.fullText).toBe('quoted');
    expect(data[0].retweeted?.tweet.legacy?.fullText).toBe('retweeted');
    expect(data[0].promotedMetadata).toEqual({ advertiser: 'x' });
  });

  test('extracts cursors from direct and nested timeline cursor shapes', () => {
    const cursor = entriesCursor([
      {
        entryId: 'cursor-bottom',
        content: {
          entryType: i.ContentEntryType.TimelineTimelineCursor,
          cursorType: i.CursorType.Bottom,
          value: 'bottom-cursor',
        },
      },
      {
        entryId: 'cursor-top',
        content: {
          __typename: i.TypeName.TimelineTimelineItem,
          itemContent: {
            itemType: i.ContentItemType.TimelineTimelineCursor,
            cursorType: i.CursorType.Top,
            value: 'top-cursor',
          },
        },
      },
    ] as unknown as i.TimelineAddEntry[]);

    expect(cursor.bottom?.value).toBe('bottom-cursor');
    expect(cursor.top?.value).toBe('top-cursor');
  });
});
