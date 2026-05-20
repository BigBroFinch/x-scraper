import { EntitiesFromJSON, EntitiesToJSON, TimestampFromJSON, TimestampToJSON } from '@/openapi';

test('generated array fields tolerate non-array values', () => {
  const parsed = EntitiesFromJSON({
    hashtags: [],
    media: {},
    symbols: [],
    timestamps: 'unexpected',
    urls: {},
    user_mentions: [],
  });

  expect(parsed.media).toEqual([]);
  expect(parsed.timestamps).toEqual([]);
  expect(parsed.urls).toEqual([]);
});

test('generated primitive array fields tolerate non-array values', () => {
  const entities = EntitiesFromJSON({
    hashtags: {},
    symbols: 'unexpected',
    urls: [],
    user_mentions: null,
  });
  const timestamp = TimestampFromJSON({
    indices: {},
    seconds: 1,
    text: '1s',
  });

  expect(entities.hashtags).toEqual([]);
  expect(entities.symbols).toEqual([]);
  expect(entities.userMentions).toEqual([]);
  expect(timestamp.indices).toEqual([]);
});

test('generated optional array fields keep nullish values as undefined', () => {
  const parsed = EntitiesFromJSON({
    hashtags: [],
    media: null,
    symbols: [],
    timestamps: undefined,
    urls: null,
    user_mentions: [],
  });

  expect(parsed.media).toBeUndefined();
  expect(parsed.timestamps).toBeUndefined();
  expect(parsed.urls).toEqual([]);
});

test('generated array serialization tolerates non-array values', () => {
  const serialized = EntitiesToJSON({
    hashtags: [],
    media: {} as never,
    symbols: [],
    timestamps: 'unexpected' as never,
    urls: {} as never,
    userMentions: [],
  });

  expect(serialized.media).toEqual([]);
  expect(serialized.timestamps).toEqual([]);
  expect(serialized.urls).toEqual([]);
});

test('generated primitive array serialization tolerates non-array values', () => {
  const serializedEntities = EntitiesToJSON({
    hashtags: {} as never,
    symbols: 'unexpected' as never,
    urls: [],
    userMentions: null as never,
  });
  const serializedTimestamp = TimestampToJSON({
    indices: {} as never,
    seconds: 1,
    text: '1s',
  });

  expect(serializedEntities.hashtags).toEqual([]);
  expect(serializedEntities.symbols).toEqual([]);
  expect((serializedEntities as unknown as Record<string, unknown>).user_mentions).toEqual([]);
  expect(serializedTimestamp.indices).toEqual([]);
});
