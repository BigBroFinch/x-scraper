import { CursorApiUtilsResponse, TweetApiUtilsData, UserApiUtilsData } from '@/models';
import * as i from '@/openapi';

type UnknownRecord = Record<string, unknown>;

type CompatibleModuleItem = i.ModuleItem | UnknownRecord;
type CompatibleTimelineTweet = i.TimelineTweet | UnknownRecord;
type CompatibleItemResult = i.ItemResult | UnknownRecord;
type CompatibleTweet = i.Tweet | UnknownRecord;
type CompatibleUserUnion = i.UserUnion | UnknownRecord;

type TimelineEntriesInput =
  | i.TimelineAddEntry[]
  | i.InstructionUnion[]
  | {
      instructions?: i.InstructionUnion[];
      entries?: i.TimelineAddEntry[];
      entry?: i.TimelineAddEntry;
    }
  | i.TimelineAddEntry
  | undefined
  | null;

const isRecord = (value: unknown): value is UnknownRecord => {
  return value != undefined && typeof value == 'object' && !Array.isArray(value);
};

const stringField = (value: unknown, key: string): string | undefined => {
  if (!isRecord(value)) return undefined;
  const field = value[key];
  return typeof field == 'string' ? field : undefined;
};

const recordField = (value: unknown, key: string): UnknownRecord | undefined => {
  if (!isRecord(value)) return undefined;
  const field = value[key];
  return isRecord(field) ? field : undefined;
};

const arrayField = <T = unknown>(value: unknown, key: string): T[] | undefined => {
  if (!isRecord(value)) return undefined;
  const field = value[key];
  return Array.isArray(field) ? (field as T[]) : undefined;
};

const field = <T = unknown>(value: unknown, key: string): T | undefined => {
  if (!isRecord(value)) return undefined;
  return value[key] as T | undefined;
};

const firstDefined = <T>(...values: Array<T | undefined>): T | undefined => {
  return values.find((value) => value != undefined);
};

const typeNameOf = (value: unknown): string | undefined => {
  return firstDefined(stringField(value, 'typename'), stringField(value, '__typename'));
};

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => {
    const instructionType = stringField(e, 'type');
    if (instructionType == i.InstructionType.TimelineAddEntries) {
      return arrayField<i.TimelineAddEntry>(e, 'entries') ?? [];
    } else if (instructionType == i.InstructionType.TimelineAddToModule) {
      return [];
    } else if (instructionType == i.InstructionType.TimelineReplaceEntry) {
      const entry = field<i.TimelineAddEntry>(e, 'entry');
      return entry == undefined ? [] : [entry];
    }
    return [];
  });
};

export const instructionConverter = (item: i.InstructionUnion[]): TweetApiUtilsData[] => {
  return item
    .flatMap((e) => {
      const instructionType = stringField(e, 'type');
      if (instructionType == i.InstructionType.TimelineAddEntries) {
        return tweetEntriesConverter(arrayField<i.TimelineAddEntry>(e, 'entries') ?? []);
      } else if (instructionType == i.InstructionType.TimelineAddToModule) {
        const item = arrayField<i.ModuleItem>(e, 'moduleItems') ?? [];
        return moduleConverter(item);
      } else if (instructionType == i.InstructionType.TimelineReplaceEntry) {
        const entry = field<i.TimelineAddEntry>(e, 'entry');
        return tweetEntriesConverter(entry == undefined ? [] : [entry]);
      }
      return [];
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .flat();
};

const isTimelineAddEntry = (value: unknown): value is i.TimelineAddEntry => {
  return isRecord(value) && isRecord(value.content) && typeof value.entryId == 'string';
};

const isInstructionLike = (value: unknown): value is i.InstructionUnion => {
  return isRecord(value) && typeof value.type == 'string';
};

const normalizeTimelineEntries = (value: TimelineEntriesInput): i.TimelineAddEntry[] => {
  if (value == undefined) return [];

  if (Array.isArray(value)) {
    if (value.length == 0) return [];
    if (value.every(isTimelineAddEntry)) {
      return value;
    }
    if (value.every(isInstructionLike)) {
      return instructionToEntry(value);
    }
    return [];
  }

  if (!isRecord(value)) return [];

  const instructions = arrayField<i.InstructionUnion>(value, 'instructions');
  if (instructions != undefined) {
    return instructionToEntry(instructions);
  }

  const entries = arrayField<i.TimelineAddEntry>(value, 'entries');
  if (entries != undefined) {
    return entries;
  }

  const entry = field<i.TimelineAddEntry>(value, 'entry');
  if (entry != undefined) {
    return [entry];
  }

  if (isTimelineAddEntry(value)) {
    return [value];
  }

  return [];
};

const entryContentType = (content: unknown): string | undefined => {
  return firstDefined(stringField(content, 'entryType'), typeNameOf(content));
};

const itemContentType = (content: unknown): string | undefined => {
  return firstDefined(stringField(content, 'itemType'), typeNameOf(content));
};

const timelineTweetFromEntryContent = (content: unknown): CompatibleTimelineTweet | undefined => {
  const itemContent = recordField(content, 'itemContent');
  if (itemContent == undefined) return undefined;
  return itemContentType(itemContent) == i.ContentItemType.TimelineTweet ? itemContent : undefined;
};

export const tweetEntriesConverter = (item: TimelineEntriesInput): TweetApiUtilsData[] => {
  return normalizeTimelineEntries(item)
    .map((e) => {
      const content = field<UnknownRecord>(e, 'content');
      if (entryContentType(content) == i.ContentEntryType.TimelineTimelineItem) {
        const timeline = timelineTweetFromEntryContent(content);
        if (timeline == undefined) return undefined;
        return [
          buildTweetApiUtils({
            result: getTimelineTweetResult(timeline),
            promotedMetadata: getTimelinePromotedMetadata(timeline),
          }),
        ];
      } else if (entryContentType(content) == i.ContentEntryType.TimelineTimelineModule) {
        const item = arrayField<i.ModuleItem>(content, 'items') ?? [];
        return moduleConverter(item);
      }
      return undefined;
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .map((e) => e.filter((e): e is NonNullable<typeof e> => e != undefined))
    .flat();
};

const timelineTweetFromModuleItem = (item: CompatibleModuleItem): CompatibleTimelineTweet | undefined => {
  const timelineItem = recordField(item, 'item');
  const itemContent = recordField(timelineItem, 'itemContent');
  if (itemContent == undefined) return undefined;
  return itemContentType(itemContent) == i.ContentItemType.TimelineTweet ? itemContent : undefined;
};

export const moduleConverter = (item: CompatibleModuleItem[] | undefined | null): TweetApiUtilsData[] => {
  const timelineList = (item ?? [])
    .map((e) => timelineTweetFromModuleItem(e))
    .filter((e): e is CompatibleTimelineTweet => e != undefined);
  if (timelineList.length == 0) return [];

  if (field(timelineList[0], 'tweetDisplayType') == i.TimelineTweetTweetDisplayTypeEnum.MediaGrid) {
    return timelineList
      .map((e) =>
        buildTweetApiUtils({
          result: getTimelineTweetResult(e),
          promotedMetadata: getTimelinePromotedMetadata(e),
        }),
      )
      .filter((e: TweetApiUtilsData | undefined): e is NonNullable<typeof e> => e != undefined);
  } else {
    const timeline = timelineList[0];
    return [
      buildTweetApiUtils({
        result: getTimelineTweetResult(timeline),
        promotedMetadata: getTimelinePromotedMetadata(timeline),
        reply: timelineList.slice(1),
      }),
    ].filter((e): e is NonNullable<typeof e> => e != undefined);
  }
};

type buildTweetApiUtilsArgs = {
  result: CompatibleItemResult | undefined;
  promotedMetadata?: unknown;
  reply?: CompatibleTimelineTweet[];
};

const getTimelineTweetResult = (timeline: CompatibleTimelineTweet): CompatibleItemResult | undefined => {
  return firstDefined(field<CompatibleItemResult>(timeline, 'tweetResults'), field<CompatibleItemResult>(timeline, 'tweet_results'));
};

const getTimelinePromotedMetadata = (timeline: CompatibleTimelineTweet): unknown => {
  return firstDefined(field(timeline, 'promotedMetadata'), field(timeline, 'promoted_metadata'));
};

const getTweetUserResult = (tweet: CompatibleTweet): CompatibleUserUnion | undefined => {
  const core = recordField(tweet, 'core');
  return firstDefined(
    field<CompatibleUserUnion>(recordField(core, 'userResults'), 'result'),
    field<CompatibleUserUnion>(recordField(core, 'user_results'), 'result'),
  );
};

const getQuotedStatusResult = (tweet: CompatibleTweet): CompatibleItemResult | undefined => {
  return firstDefined(field<CompatibleItemResult>(tweet, 'quotedStatusResult'), field<CompatibleItemResult>(tweet, 'quoted_status_result'));
};

const getRetweetedStatusResult = (tweet: CompatibleTweet): CompatibleItemResult | undefined => {
  const legacy = recordField(tweet, 'legacy');
  return firstDefined(
    field<CompatibleItemResult>(legacy, 'retweetedStatusResult'),
    field<CompatibleItemResult>(legacy, 'retweeted_status_result'),
  );
};

export const buildTweetApiUtils = (args: buildTweetApiUtilsArgs): TweetApiUtilsData | undefined => {
  if (args.result == undefined) return undefined;
  const tweet = tweetResultsConverter(args.result);
  if (tweet == undefined) return undefined;
  const result = getTweetUserResult(tweet);
  const user = result && userOrNullConverter(result);
  if (user == undefined) return undefined;
  const quoted = getQuotedStatusResult(tweet);
  const retweeted = getRetweetedStatusResult(tweet);

  const reply =
    args.reply
      ?.map((e) => buildTweetApiUtils({ result: getTimelineTweetResult(e), promotedMetadata: getTimelinePromotedMetadata(e) }))
      .filter((e): e is NonNullable<typeof e> => e != undefined) ?? [];

  return {
    raw: args.result,
    promotedMetadata: args.promotedMetadata as Record<string, unknown> | undefined,
    tweet: tweet,
    user: user,
    replies: reply,
    retweeted: retweeted == undefined ? undefined : buildTweetApiUtils({ result: retweeted }),
    quoted: quoted == undefined ? undefined : buildTweetApiUtils({ result: quoted }),
  };
};

export const tweetResultsConverter = (tweetResults: CompatibleItemResult | undefined): i.Tweet | undefined => {
  if (tweetResults == undefined) return undefined;
  const result = field<CompatibleTweet>(tweetResults, 'result');
  if (result == undefined) return undefined;
  switch (typeNameOf(result)) {
    case i.TypeName.Tweet:
      return result as i.Tweet;
    case i.TypeName.TweetWithVisibilityResults:
      return field<i.Tweet>(result, 'tweet');
    case i.TypeName.TweetTombstone:
      return undefined;
  }
};

export const userOrNullConverter = (userResults: CompatibleUserUnion): i.User | undefined => {
  let user: i.User | undefined;
  if (typeNameOf(userResults) == i.TypeName.User) {
    user = userResults as i.User;
  } else if (typeNameOf(userResults) == undefined) {
    user = userResults as i.User; // error fallback
  }

  if (user) {
    if (user.core && user.legacy) {
      if (!user.legacy.screenName && user.core.screenName) {
        user.legacy.screenName = user.core.screenName;
      }
      if (!user.legacy.name && user.core.name) {
        user.legacy.name = user.core.name;
      }
      if (!user.legacy.createdAt && user.core.createdAt) {
        user.legacy.createdAt = user.core.createdAt;
      }
    }
    return user;
  }
};

export const userEntriesConverter = (item: i.TimelineAddEntry[]): i.UserResults[] => {
  return item
    .map((e) => {
      const content = field<UnknownRecord>(e, 'content');
      if (entryContentType(content) == i.TypeName.TimelineTimelineItem) {
        const item = recordField(content, 'itemContent');
        if (itemContentType(item) == i.ContentItemType.TimelineUser) {
          return field<i.UserResults>(item, 'userResults');
        }
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined);
};

export const userResultConverter = (user: i.UserResults[]): UserApiUtilsData[] => {
  return user
    .map((e) => {
      const user = e.result && userOrNullConverter(e.result);
      if (user == undefined) return undefined;
      return { raw: e, user: user };
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined);
};

export const entriesCursor = (item: i.TimelineAddEntry[]): CursorApiUtilsResponse => {
  const cursorList = item
    .map((e) => {
      const content = field<UnknownRecord>(e, 'content');
      if (entryContentType(content) == i.ContentEntryType.TimelineTimelineCursor) {
        return content as unknown as i.TimelineTimelineCursor;
      } else if (entryContentType(content) == i.ContentEntryType.TimelineTimelineItem) {
        const item = recordField(content, 'itemContent');
        if (itemContentType(item) == i.ContentItemType.TimelineTimelineCursor) {
          return item as unknown as i.TimelineTimelineCursor;
        }
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined);
  return buildCursor(cursorList);
};

export const buildCursor = (cursorList: i.TimelineTimelineCursor[]): CursorApiUtilsResponse => {
  return {
    top: cursorList.find((e) => e.cursorType == i.CursorType.Top),
    bottom: cursorList.find((e) => e.cursorType == i.CursorType.Bottom),
  };
};
