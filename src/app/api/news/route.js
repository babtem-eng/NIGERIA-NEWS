import Parser from 'rss-parser';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['content:encoded', 'contentEncoded'],
      ['description', 'description']
    ]
  }
});

const NEWSPAPER_FEEDS = [
  { name: 'Vanguard', url: 'https://www.vanguardngr.com/feed/' },
  { name: 'Punch', url: 'https://punchng.com/feed/' },
  { name: 'The Nation', url: 'https://thenationonlineng.net/feed/' },
  { name: 'Premium Times', url: 'https://www.premiumtimesng.com/feed' },
  { name: 'Daily Post', url: 'https://dailypost.ng/feed/' },
  { name: 'Channels TV', url: 'https://www.channelstv.com/feed/' },
  { name: 'PM News', url: 'https://pmnewsnigeria.com/feed/' },
  { name: 'Leadership News', url: 'https://leadership.ng/feed/' },
  { name: 'Independent NG', url: 'https://independent.ng/feed/' }
];

function extractImageAndSnippet(item) {
  let image = null;
  let snippet = '';

  // 1. Try enclosure (used by Punch and others)
  if (item.enclosure && item.enclosure.url) {
    image = item.enclosure.url;
  }

  // 2. Try media:content
  if (!image && item.mediaContent && item.mediaContent.$ && item.mediaContent.$.url) {
    image = item.mediaContent.$.url;
  }

  // 3. Parse HTML content to extract image and snippet
  const htmlContent = item.contentEncoded || item.description || item.content || '';
  if (htmlContent) {
    const $ = cheerio.load(htmlContent);
    
    // Extract image if not already found
    if (!image) {
      const imgTag = $('img').first();
      if (imgTag.length > 0) {
        image = imgTag.attr('src');
      }
    }

    // Extract text snippet
    // A minimum of 100 words is typically ~ 600-800 characters. 
    // We will extract up to 1000 characters to be safe.
    snippet = $.text().replace(/\s+/g, ' ').trim();
    if (snippet.length > 1000) {
      snippet = snippet.substring(0, 997) + '...';
    }
  }

  // Final fallback snippet if html parsing fails
  if (!snippet && item.contentSnippet) {
     snippet = item.contentSnippet.trim();
     if (snippet.length > 1000) {
       snippet = snippet.substring(0, 997) + '...';
     }
  }

  // Fallback placeholder pattern if no image found (UI will handle)
  return { image, snippet };
}

export async function GET() {
  try {
    const fetchPromises = NEWSPAPER_FEEDS.map(async (feed) => {
      try {
        const feedData = await parser.parseURL(feed.url);
        return feedData.items.map(item => {
          const { image, snippet } = extractImageAndSnippet(item);
          return {
            id: item.guid || item.link,
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            source: feed.name,
            image,
            snippet
          };
        });
      } catch (error) {
        console.error(`Error fetching ${feed.name}:`, error.message);
        return []; // Return empty array on failure so Promise.allSettled doesn't fail everything
      }
    });

    const results = await Promise.all(fetchPromises);
    
    // Flatten the array of arrays
    let allNews = results.flat();

    // Sort by publication date (most recent first)
    allNews.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // Limit to top 50 news items
    const topNews = allNews.slice(0, 50);

    return NextResponse.json({ success: true, count: topNews.length, data: topNews }, {
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch news' }, { status: 500 });
  }
}
