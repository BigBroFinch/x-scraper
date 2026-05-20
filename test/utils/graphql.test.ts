import type { DefaultFlag } from '@/models';
import type * as i from '@/openapi';
import { executeGraphQLRequest, GraphQLOperationRegistry } from '@/utils';

const flag: DefaultFlag = {
  TestOperation: {
    '@method': 'GET',
    '@path': '/graphql/test/TestOperation',
    queryId: 'test-query-id',
    variables: { existing: true },
    features: { enabled: true },
    fieldToggles: { withArticle: false },
  },
};

describe('GraphQLOperationRegistry', () => {
  test('builds OpenAPI request parameters from an operation template', () => {
    const operations = new GraphQLOperationRegistry(flag, () => async ({ init }) => init);

    const params = operations.requestParameters('TestOperation', { userId: '123' });

    expect(params).toEqual({
      pathQueryId: 'test-query-id',
      variables: JSON.stringify({ existing: true, userId: '123' }),
      features: JSON.stringify({ enabled: true }),
      fieldToggles: JSON.stringify({ withArticle: false }),
    });
  });

  test('fails at the operation seam when the template is missing', () => {
    const operations = new GraphQLOperationRegistry(flag, () => async ({ init }) => init);

    expect(() => operations.template('MissingOperation')).toThrow('Missing GraphQL operation template: MissingOperation');
  });
});

describe('executeGraphQLRequest', () => {
  test('executes raw OpenAPI calls and wraps the SDK response envelope', async () => {
    const operations = new GraphQLOperationRegistry(flag, () => async ({ init }) => init);
    const raw = new Response('{}', {
      headers: {
        'x-rate-limit-limit': '100',
        'x-rate-limit-remaining': '42',
      },
    });
    const apiFn = jest.fn(async () => {
      return {
        raw,
        value: async () => ({ data: { ok: true } }),
      } as i.ApiResponse<{ data: { ok: boolean } }>;
    });

    const response = await executeGraphQLRequest<{ ok: boolean }, { data: { ok: boolean } }>({
      apiFn,
      operations,
      key: 'TestOperation',
      param: { userId: '123' },
      convertFn: (value) => value.data,
    });

    expect(apiFn).toHaveBeenCalledWith(
      expect.objectContaining({ pathQueryId: 'test-query-id' }),
      expect.any(Function),
    );
    expect(response.raw.response).toBe(raw);
    expect(response.header.rateLimitLimit).toBe(100);
    expect(response.header.rateLimitRemaining).toBe(42);
    expect(response.data).toEqual({ ok: true });
  });
});
