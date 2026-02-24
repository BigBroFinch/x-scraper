import { getClient } from '@test/init';
import { DefaultApi } from '@/openapi';

test('test auth', async () => {
  const client = await getClient();
  const that = client.default;
  const fn = DefaultApi.prototype['request'].bind(that.api);

  DefaultApi.prototype['request'] = (...args: any[]) => {
    console.log('request', args);
    return (fn as any)(...args);
  };
  const response = await that.getProfileSpotlightsQuery({ screenName: 'elonmusk' });
  console.log(response);
});
