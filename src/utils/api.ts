import { ApiUtilsHeader, CursorApiUtilsResponse, TweetApiUtilsData, UserApiUtilsData } from '@/models';
import * as i from '@/openapi';

export type InitOverridesType = (flag: { [key: string]: any }) => i.InitOverrideFunction;

export const getKwargs = (flag: { [key: string]: any }, additional: { [key: string]: any }): any => {
  const kwargs: { [key: string]: any } = { pathQueryId: flag.queryId };
  if (flag.variables != undefined) {
    kwargs.variables = JSON.stringify({ ...flag.variables, ...additional });
  }
  if (flag.features != undefined) {
    kwargs.features = JSON.stringify(flag.features);
  }
  if (flag.fieldToggles != undefined) {
    kwargs.fieldToggles = JSON.stringify(flag.fieldToggles);
  }
  return kwargs;
};

export const errorCheck = <T>(data: T | undefined, error: i.ErrorResponse[] | undefined): T => {
  if (data == undefined) {
    throw Error(error?.map((e) => e.message).join(', ') ?? 'No data');
  }
  return data;
};

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => {
    if (e.type == i.InstructionType.TimelineAddEntries) {
      return (e as i.TimelineAddEntries).entries;
    } else if (e.type == i.InstructionType.TimelineAddToModule) {
      return [];
    } else if (e.type == i.InstructionType.TimelineReplaceEntry) {
      return [(e as i.TimelineReplaceEntry).entry];
    }
    return [];
  });
};

export const instructionConverter = (item: i.InstructionUnion[]): TweetApiUtilsData[] => {
  return item
    .flatMap((e) => {
      if (e.type == i.InstructionType.TimelineAddEntries) {
        return tweetEntriesConverter((e as i.TimelineAddEntries).entries);
      } else if (e.type == i.InstructionType.TimelineAddToModule) {
        const item = (e as i.TimelineAddToModule).moduleItems ?? [];
        return moduleConverter(item);
      } else if (e.type == i.InstructionType.TimelineReplaceEntry) {
        return tweetEntriesConverter([(e as i.TimelineReplaceEntry).entry]);
      }
      return [];
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .flat();
};

const isTimelineAddEntry = (value: any): value is i.TimelineAddEntry => {
  return value != undefined && typeof value == 'object' && 'content' in value && 'entryId' in value;
};

const isInstructionLike = (value: any): boolean => {
  return value != undefined && typeof value == 'object' && typeof value.type == 'string';
};

const normalizeTimelineEntries = (value: any): i.TimelineAddEntry[] => {
  if (value == undefined) return [];

  if (Array.isArray(value)) {
    if (value.length == 0) return [];
    if (value.every(isTimelineAddEntry)) {
      return value;
    }
    if (value.every(isInstructionLike)) {
      return instructionToEntry(value as i.InstructionUnion[]);
    }
    return [];
  }

  if (typeof value != 'object') return [];

  if (Array.isArray(value.instructions)) {
    return instructionToEntry(value.instructions as i.InstructionUnion[]);
  }

  if (Array.isArray(value.entries)) {
    return value.entries as i.TimelineAddEntry[];
  }

  if (value.entry != undefined) {
    return [value.entry as i.TimelineAddEntry];
  }

  if (isTimelineAddEntry(value)) {
    return [value];
  }

  return [];
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[] | any): TweetApiUtilsData[] => {
  return normalizeTimelineEntries(item)
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        const timeline = item.itemType == i.ContentItemType.TimelineTweet ? (item as i.TimelineTweet | any) : undefined;
        if (timeline == undefined) return undefined;
        return [
          buildTweetApiUtils({
            result: getTimelineTweetResult(timeline),
            promotedMetadata: getTimelinePromotedMetadata(timeline),
          }),
        ];
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
        const item = (e.content as i.TimelineTimelineModule).items ?? [];
        return moduleConverter(item);
      }
      return undefined;
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .map((e) => e.filter((e): e is NonNullable<typeof e> => e != undefined))
    .flat();
};

export const moduleConverter = (item: i.ModuleItem[] | any): TweetApiUtilsData[] => {
  const timelineList = (item ?? [])
    .filter((e: any) => e?.item?.itemContent?.itemType == i.ContentItemType.TimelineTweet)
    .map((e: any) => e.item.itemContent as i.TimelineTweet | any);
  if (timelineList.length == 0) return [];

  if (timelineList[0].tweetDisplayType == i.TimelineTweetTweetDisplayTypeEnum.MediaGrid) {
    return timelineList
      .map((e: i.TimelineTweet | any) =>
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
  result: i.ItemResult | any;
  promotedMetadata?: any;
  reply?: Array<i.TimelineTweet | any>;
};

const getTimelineTweetResult = (timeline: i.TimelineTweet | any): i.ItemResult | any => {
  return timeline?.tweetResults ?? timeline?.tweet_results;
};

const getTimelinePromotedMetadata = (timeline: i.TimelineTweet | any): any => {
  return timeline?.promotedMetadata ?? timeline?.promoted_metadata;
};

const getTweetUserResult = (tweet: i.Tweet | any): i.UserUnion | any => {
  return tweet?.core?.userResults?.result ?? tweet?.core?.user_results?.result;
};

const getQuotedStatusResult = (tweet: i.Tweet | any): i.ItemResult | any => {
  return tweet?.quotedStatusResult ?? tweet?.quoted_status_result;
};

const getRetweetedStatusResult = (tweet: i.Tweet | any): i.ItemResult | any => {
  return tweet?.legacy?.retweetedStatusResult ?? tweet?.legacy?.retweeted_status_result;
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
    promotedMetadata: args.promotedMetadata,
    tweet: tweet,
    user: user,
    replies: reply,
    retweeted: retweeted == undefined ? undefined : buildTweetApiUtils({ result: retweeted }),
    quoted: quoted == undefined ? undefined : buildTweetApiUtils({ result: quoted }),
  };
};

export const tweetResultsConverter = (tweetResults: i.ItemResult | any): i.Tweet | undefined => {
  if (tweetResults == undefined) return undefined;
  if (tweetResults.result == undefined) return undefined;
  switch (tweetResults.result.typename) {
    case i.TypeName.Tweet:
      return tweetResults.result as i.Tweet;
    case i.TypeName.TweetWithVisibilityResults:
      return (tweetResults.result as i.TweetWithVisibilityResults).tweet;
    case i.TypeName.TweetTombstone:
      return undefined;
  }
};

export const userOrNullConverter = (userResults: i.UserUnion): i.User | undefined => {
  let user: i.User | undefined;
  if (userResults.typename == i.TypeName.User) {
    user = userResults as i.User;
  } else if (userResults.typename == undefined) {
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
      if (e.content.typename == i.TypeName.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        if (item.itemType == i.ContentItemType.TimelineUser) {
          return (item as i.TimelineUser).userResults;
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
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineCursor) {
        return e.content as i.TimelineTimelineCursor;
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = e.content as i.TimelineTimelineItem;
        if (item.itemContent.itemType == i.ContentItemType.TimelineTimelineCursor) {
          return item.itemContent as i.TimelineTimelineCursor;
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

export const buildHeader = (headers: Headers): ApiUtilsHeader => {
  return {
    raw: headers,
    connectionHash: headers.get('x-connection-hash')!,
    contentTypeOptions: headers.get('x-content-type-options')!,
    frameOptions: headers.get('x-frame-options')!,
    rateLimitLimit: Number(headers.get('x-rate-limit-limit') ?? 0),
    rateLimitRemaining: Number(headers.get('x-rate-limit-remaining') ?? 0),
    rateLimitReset: Number(headers.get('x-rate-limit-reset') ?? 0),
    responseTime: Number(headers.get('x-response-time')),
    tfePreserveBody: headers.get('x-tfe-preserve-body') == 'true',
    transactionId: headers.get('x-transaction-id')!,
    twitterResponseTags: headers.get('x-twitter-response-tags')!,
    xssProtection: Number(headers.get('x-xss-protection')),
  };
};
