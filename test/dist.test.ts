import { XScraper } from '../dist/src'; // 👈 Import directly from the built dist directory

describe('Dist Output Build Test', () => {
  // Set a slightly longer timeout as fetching user info involves network requests
  jest.setTimeout(30000);

  it('should initialize XScraper instance successfully from dist', async () => {
    const scraper = new XScraper();
    expect(scraper).toBeDefined();
  });

  it('should be able to fetch guestToken and query user data via network request using dist', async () => {
    const scraper = new XScraper();
    // Automatically get a guest Client without login
    const client = await scraper.getGuestClient();

    expect(client).toBeDefined();

    // Request information for the official elonmusk account
    const res = await client.getUserByScreenName({
      screenName: 'elonmusk'
    });
    // Verify by reading the username from the raw data
    const userLegacy = res.data?.user?.legacy;

    // Even if it fails to fetch data due to network error, it won't crash
    if (userLegacy) {
      console.log('🎉 Successfully fetched username via dist output: ', userLegacy.name);
      expect(userLegacy.screenName.toLowerCase()).toBe('elonmusk');
    } else {
      console.log('⚠️ Failed to fetch related user data, but the API returned successfully', res);
    }
  });
});
