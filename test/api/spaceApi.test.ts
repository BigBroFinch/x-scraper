import { getGuestClient, logger } from '@test/init';

describe('SpaceApi', () => {
  it('getAudioSpaceById', async () => {
    logger.log('getAudioSpaceById');
    const client = await getGuestClient();
    // Assuming 1kJzDMMvMVqKv is a known valid Space ID
    const response = await client.getAudioSpaceById({ id: '1kJzDMMvMVqKv' });

    expect(response.raw.response.ok).toBe(true);
    expect(response.data.data.audioSpace.metadata.restId).toBeDefined();
    expect(response.data.data.audioSpace.metadata.state).toBeDefined();

    logger.log(`Space Title: ${response.data.data.audioSpace.metadata.title}`);
  });

  it('getLiveVideoStreamStatus', async () => {
    logger.log('getLiveVideoStreamStatus');
    const client = await getGuestClient();

    // Call getAudioSpaceById first to get a valid media Key
    const spaceRes = await client.getAudioSpaceById({ id: '1kJzDMMvMVqKv' });
    const mediaKey = spaceRes.data.data.audioSpace.metadata.mediaKey;

    if (mediaKey) {
      const response = await client.getLiveVideoStreamStatus({ mediaKey });
      expect(response.raw.response.ok).toBe(true);
      expect(response.data.source.noRedirectPlaybackUrl).toBeDefined();
      expect(response.data.sessionId).toBeDefined();

      logger.log(`Stream HLS URL: ${response.data.source.noRedirectPlaybackUrl}`);
    } else {
      logger.log('Skip stream test because space does not have media_key');
    }
  });

  it('getBroadcastQuery and stream status', async () => {
    logger.log('getBroadcastQuery and stream status');
    const client = await getGuestClient();
    const broadcastId = '1mrGmBjyEZgJy';

    const response = await client.getBroadcastQuery({ id: broadcastId });
    expect(response.raw.response.ok).toBe(true);

    const broadcastObj = response.data.data?.broadcast ?? response.data.data?.broadcastResults?.result;
    logger.log(`Broadcast State: ${broadcastObj?.state}`);
    const mediaKey = broadcastObj?.mediaKey;

    if (mediaKey) {
      logger.log(`Extracted Media Key: ${mediaKey}`);
      const streamRes = await client.getLiveVideoStreamStatus({ mediaKey });
      expect(streamRes.raw.response.ok).toBe(true);
      expect(streamRes.data.source.noRedirectPlaybackUrl).toBeDefined();

      logger.log(`Broadcast HLS URL: ${streamRes.data.source.noRedirectPlaybackUrl}`);
    } else {
      logger.log('Skip stream test because broadcast does not have media_key');
    }
  });
});
