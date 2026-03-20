import Link from 'next/link';

export default function ProductCard({ product }) {
  const { title, handle, body_html, images } = product;

  // Clean HTML tags from body_html for a short snippet
  let snippet = (body_html || '').replace(/<[^>]+>/g, '').trim();
  if (snippet.length > 130) {
    snippet = snippet.substring(0, 130) + '...';
  }

  const displayImage = images && images.length > 0 
    ? images[0].src 
    : 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&q=80&w=800';

  return (
    <Link href={`https://gloxmart.com/products/${handle}`} target="_blank" rel="noopener noreferrer" className="news-card">
      <div className="card-badge" style={{ backgroundColor: '#2dd4bf', color: '#0f172a' }}>SPONSORED</div>
      <div className="news-card-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={displayImage} alt={title} className="news-card-image" loading="lazy" />
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-snippet">{snippet}</p>
        <div className="news-card-footer">
          <span className="news-card-date" style={{ fontWeight: 600, color: '#2dd4bf' }}>Gloxmart</span>
          <span className="news-card-readmore">
            Shop Now
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
