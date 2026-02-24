import {
  DefaultApiUtils,
  InitialStateApiUtils,
  PostApiUtils,
  SpaceApiUtils,
  TweetApiUtils,
  UserApiUtils,
  UserListApiUtils,
  UsersApiUtils,
  V11GetApiUtils,
  V11PostApiUtils,
  V20GetApiUtils,
} from '@/apis';
import type { DefaultFlag } from '@/models';
import { InitOverridesType } from '@/utils';
import * as i from '@/openapi';

// Bypass TS import resolving issue under jest
import flagData from '../openapi/placeholder.json';

import { generateTransactionId } from 'x-client-transaction-id-generater';

export type XScraperCookieMap = { [key: string]: string };

export type XScraperBrowserCookie = {
  name: string;
  value: string;
  domain?: string;
};

export type XScraperCookiesInput = XScraperCookieMap | XScraperBrowserCookie[];

export class XScraper {
  static header = 'https://raw.githubusercontent.com/fa0311/latest-user-agent/refs/heads/main/header.json';
  static twitter = 'https://x.com/home';
  static bearer = 'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

  static fetchApi: i.FetchAPI = fetch.bind(globalThis);

  additionalBrowserHeaders: { [key: string]: string } = {};
  additionalApiHeaders: { [key: string]: string } = {};

  setAdditionalBrowserHeaders(headers: { [key: string]: string }): void {
    this.additionalBrowserHeaders = headers;
  }

  setAdditionalApiHeaders(headers: { [key: string]: string }): void {
    this.additionalApiHeaders = headers;
  }

  async getHeaders(): Promise<{
    api: { [key: string]: string };
    browser: { [key: string]: string };
  }> {
    const raw = await XScraper.fetchApi(XScraper.header, { method: 'GET' });
    const json = await raw.json();
    const ignore = ['host', 'connection'];

    const getHeader = (name: string): { [key: string]: string } => {
      return Object.entries(json[name]).reduce((a, [key, value]) => {
        if (ignore.includes(key)) return a;
        return { ...a, [key]: value };
      }, {});
    };

    return {
      api: {
        ...getHeader('chrome-fetch'),
        'accept-encoding': 'identity',
        pragma: 'no-cache',
        referer: XScraper.twitter,
        priority: 'u=1, i',
        'x-twitter-client-language': 'en',
        'x-twitter-active-user': 'yes',
        authorization: `Bearer ${XScraper.bearer}`,
        ...this.additionalApiHeaders,
      },
      browser: {
        ...getHeader('chrome'),
        ...this.additionalBrowserHeaders,
      },
    };
  }

  cookieNormalize(cookie: string[]): XScraperCookieMap {
    return cookie.reduce((a, b) => {
      const [key, value] = b.split('; ')[0].split('=');
      return { ...a, [key]: value };
    }, {});
  }

  cookieEncode(cookie: XScraperCookieMap): string {
    return Object.entries(cookie)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  }

  private normalizeCookiesInput(cookies: XScraperCookiesInput): XScraperCookieMap {
    if (!Array.isArray(cookies)) {
      return cookies;
    }

    const allowedDomains = new Set(['.x.com', 'x.com', '.twitter.com', 'twitter.com']);
    const normalized: XScraperCookieMap = {};

    for (const cookie of cookies) {
      if (!cookie || typeof cookie.name !== 'string' || typeof cookie.value !== 'string') {
        continue;
      }

      if (typeof cookie.domain === 'string' && !allowedDomains.has(cookie.domain.toLowerCase())) {
        continue;
      }

      normalized[cookie.name] = cookie.value;
    }

    return normalized;
  }

  setCookies(context: i.RequestContext, cookies: XScraperCookieMap): i.RequestContext {
    if (context.init.headers) {
      const headers = context.init.headers as i.HTTPHeaders;
      headers['cookie'] = this.cookieEncode(cookies);
    }
    return context;
  }

  async getGuestClient(): Promise<XScraperClient> {
    let cookies: XScraperCookieMap = {};

    const response = await XScraper.fetchApi(XScraper.twitter, {
      method: 'GET',
      redirect: 'manual',
      headers: { Cookie: this.cookieEncode(cookies), ...(await this.getHeaders()).browser },
    });

    if (response.headers.getSetCookie) {
      cookies = { ...cookies, ...this.cookieNormalize(response.headers.getSetCookie()) };
    } else {
      cookies = {
        ...cookies,
        ...this.cookieNormalize(response.headers.get('set-cookie')?.split(', ') || []),
      };
    }

    const html = await response.text();
    const re = /document.cookie="(.*?)";/g;
    const find = [...html.matchAll(re)].map((e) => e[1]);
    cookies = { ...cookies, ...this.cookieNormalize(find) };

    cookies = Object.entries(cookies)
      .filter(([key]) => key !== 'ct0')
      .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

    if (!cookies['gt']) {
      const activateHeaders = { ...(await this.getHeaders()).api, cookie: this.cookieEncode(cookies) };
      const { guest_token } = await XScraper.fetchApi('https://api.x.com/1.1/guest/activate.json', {
        method: 'POST',
        headers: activateHeaders,
      }).then((r: Response) => r.json());
      cookies['gt'] = guest_token;
    }

    return this.getClientFromCookies(cookies);
  }

  async getClientFromCookies(cookies: XScraperCookiesInput): Promise<XScraperClient> {
    const normalizedCookies = this.normalizeCookiesInput(cookies);
    const apiKey = (await this.getHeaders()).api;
    if (normalizedCookies['ct0']) {
      apiKey['x-twitter-auth-type'] = 'OAuth2Session';
      apiKey['x-csrf-token'] = normalizedCookies['ct0'];
    }
    if (normalizedCookies['gt']) {
      apiKey['x-guest-token'] = normalizedCookies['gt'];
    }

    const config: i.ConfigurationParameters = {
      fetchApi: XScraper.fetchApi,
      middleware: [{ pre: async (context) => this.setCookies(context, normalizedCookies) }],
      apiKey: (key) => apiKey[key.toLowerCase()],
      accessToken: XScraper.bearer,
    };

    return this.getClient(new i.Configuration(config));
  }

  async getClient(config: i.Configuration): Promise<XScraperClient> {
    const flag = flagData as DefaultFlag;

    const pairUrl =
      'https://raw.githubusercontent.com/fa0311/x-client-transaction-pair-dict/refs/heads/main/pair.json';
    const pair = await XScraper.fetchApi(pairUrl, { method: 'GET' }).then((res: Response) => res.json());

    const initOverrides: InitOverridesType = (flag) => {
      return async ({ init }) => {
        const randomPair = pair[Math.floor(Math.random() * pair.length)];
        const { animationKey, verification } = randomPair;
        const tid = await generateTransactionId(flag['@method'], flag['@path'], verification, animationKey);
        init.headers = { ...init.headers, 'x-client-transaction-id': tid };
        return init;
      };
    };

    return new XScraperClient(config, flag, initOverrides);
  }
}

export class XScraperClient {
  readonly tweet: TweetApiUtils;
  readonly user: UserApiUtils;
  readonly users: UsersApiUtils;
  readonly userList: UserListApiUtils;
  readonly post: PostApiUtils;
  readonly space: SpaceApiUtils;
  readonly v11Get: V11GetApiUtils;
  readonly v11Post: V11PostApiUtils;
  readonly v20Get: V20GetApiUtils;
  readonly default: DefaultApiUtils;
  readonly initialState: InitialStateApiUtils;

  constructor(
    readonly config: i.Configuration,
    readonly flag: DefaultFlag,
    readonly initOverrides: InitOverridesType,
  ) {
    this.tweet = new TweetApiUtils(new i.TweetApi(config), flag, initOverrides);
    this.user = new UserApiUtils(new i.UserApi(config), flag, initOverrides);
    this.users = new UsersApiUtils(new i.UsersApi(config), flag, initOverrides);
    this.userList = new UserListApiUtils(new i.UserListApi(config), flag, initOverrides);
    this.post = new PostApiUtils(new i.PostApi(config), flag, initOverrides);
    this.space = new SpaceApiUtils(new i.OtherApi(config), flag, initOverrides);
    this.v11Get = new V11GetApiUtils(new i.V11GetApi(config), flag, initOverrides);
    this.v11Post = new V11PostApiUtils(new i.V11PostApi(config), flag, initOverrides);
    this.v20Get = new V20GetApiUtils(new i.V20GetApi(config), flag, initOverrides);
    this.default = new DefaultApiUtils(new i.DefaultApi(config), flag, initOverrides);
    this.initialState = new InitialStateApiUtils();
  }

  // ─── 高频快捷方法（直接挂在 client 顶层） ──────────────────────────────────

  // User
  getUserByScreenName = (...args: Parameters<UserApiUtils['getUserByScreenName']>) =>
    this.user.getUserByScreenName(...args);

  getUserByRestId = (...args: Parameters<UserApiUtils['getUserByRestId']>) =>
    this.user.getUserByRestId(...args);

  getUsersByRestIds = (...args: Parameters<UsersApiUtils['getUsersByRestIds']>) =>
    this.users.getUsersByRestIds(...args);

  // Tweet
  getTweetDetail = (...args: Parameters<TweetApiUtils['getTweetDetail']>) =>
    this.tweet.getTweetDetail(...args);

  getTweetByRestId = (...args: Parameters<DefaultApiUtils['getTweetResultByRestId']>) =>
    this.default.getTweetResultByRestId(...args);

  getUserTweets = (...args: Parameters<TweetApiUtils['getUserTweets']>) =>
    this.tweet.getUserTweets(...args);

  getUserMedia = (...args: Parameters<TweetApiUtils['getUserMedia']>) =>
    this.tweet.getUserMedia(...args);

  getLikes = (...args: Parameters<TweetApiUtils['getLikes']>) =>
    this.tweet.getLikes(...args);

  getBookmarks = (...args: Parameters<TweetApiUtils['getBookmarks']>) =>
    this.tweet.getBookmarks(...args);

  getHomeTimeline = (...args: Parameters<TweetApiUtils['getHomeTimeline']>) =>
    this.tweet.getHomeTimeline(...args);

  getHomeLatestTimeline = (...args: Parameters<TweetApiUtils['getHomeLatestTimeline']>) =>
    this.tweet.getHomeLatestTimeline(...args);

  searchTimeline = (...args: Parameters<TweetApiUtils['getSearchTimeline']>) =>
    this.tweet.getSearchTimeline(...args);

  // Social graph
  getFollowers = (...args: Parameters<UserListApiUtils['getFollowers']>) =>
    this.userList.getFollowers(...args);

  getBlueVerifiedFollowers = (...args: Parameters<UserListApiUtils['getBlueVerifiedFollowers']>) =>
    this.userList.getBlueVerifiedFollowers(...args);

  getFollowing = (...args: Parameters<UserListApiUtils['getFollowing']>) =>
    this.userList.getFollowing(...args);

  getFavoriters = (...args: Parameters<UserListApiUtils['getFavoriters']>) =>
    this.userList.getFavoriters(...args);

  getRetweeters = (...args: Parameters<UserListApiUtils['getRetweeters']>) =>
    this.userList.getRetweeters(...args);

  // Actions
  createTweet = (...args: Parameters<PostApiUtils['postCreateTweet']>) =>
    this.post.postCreateTweet(...args);

  deleteTweet = (...args: Parameters<PostApiUtils['postDeleteTweet']>) =>
    this.post.postDeleteTweet(...args);

  likeTweet = (...args: Parameters<PostApiUtils['postFavoriteTweet']>) =>
    this.post.postFavoriteTweet(...args);

  unlikeTweet = (...args: Parameters<PostApiUtils['postUnfavoriteTweet']>) =>
    this.post.postUnfavoriteTweet(...args);

  retweet = (...args: Parameters<PostApiUtils['postCreateRetweet']>) =>
    this.post.postCreateRetweet(...args);

  deleteRetweet = (...args: Parameters<PostApiUtils['postDeleteRetweet']>) =>
    this.post.postDeleteRetweet(...args);

  follow = (...args: Parameters<V11PostApiUtils['postCreateFriendships']>) =>
    this.v11Post.postCreateFriendships(...args);

  unfollow = (...args: Parameters<V11PostApiUtils['postDestroyFriendships']>) =>
    this.v11Post.postDestroyFriendships(...args);

  // Space
  getAudioSpaceById = (...args: Parameters<SpaceApiUtils['getAudioSpaceById']>) =>
    this.space.getAudioSpaceById(...args);

  getBroadcastQuery = (...args: Parameters<SpaceApiUtils['getBroadcastQuery']>) =>
    this.space.getBroadcastQuery(...args);

  getLiveVideoStreamStatus = (...args: Parameters<V11GetApiUtils['getLiveVideoStreamStatus']>) =>
    this.v11Get.getLiveVideoStreamStatus(...args);
}
