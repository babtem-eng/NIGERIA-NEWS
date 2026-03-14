import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

export default function NewsCard({ article }) {
  const { id, title, link, pubDate, source, image, snippet } = article;
  
  // Format the date nicely to "2 hours ago" etc.
  let timeAgo = '';
  try {
    timeAgo = formatDistanceToNow(new Date(pubDate), { addSuffix: true });
  } catch (e) {
    timeAgo = pubDate || '';
  }

  // Premium fallback image related to news/abstract
  const fallbackImage = 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&q=80&w=800';
  const displayImage = image || fallbackImage;

  return (
    <Link href={`/article?id=${encodeURIComponent(id)}`} className="news-card">
      <div className="card-badge">{source}</div>
      <div className="news-card-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={displayImage} alt={title} className="news-card-image" loading="lazy" />
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-snippet">{snippet}</p>
        <div className="news-card-footer">
          <span className="news-card-date">{timeAgo}</span>
          <span className="news-card-readmore">
            Read Article
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
