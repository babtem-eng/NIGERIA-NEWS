'use client';

import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

export default function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSource, setSelectedSource] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        
        if (data.success) {
          setNews(data.data);
        } else {
          setError(data.error || 'Failed to fetch news');
        }
      } catch (err) {
        setError('Network error: Unable to load news feed at this time.');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="news-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="skeleton">
            <div className="skeleton-img"></div>
            <div className="skeleton-content">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line title short"></div>
              <div className="skeleton-line snippet"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <svg className="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3>Whoops! Something went wrong.</h3>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          style={{ mt: '20px', padding: '10px 20px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '20px' }}>
          Try Again
        </button>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="empty-state">
        <h3 className="page-title">No news found</h3>
        <p>We couldn't aggregate any news from the feeds. Please try again later.</p>
      </div>
    );
  }

  // Extract unique sources for the filter buttons
  const sources = ['All', ...new Set(news.map(item => item.source))].sort();
  const types = ['All', 'Politics', 'Sports', 'Business', 'Entertainment'];

  // Basic keyword-based categorization
  const getArticleType = (article) => {
    const text = (article.title + ' ' + article.snippet).toLowerCase();
    if (text.includes('politic') || text.includes('election') || text.includes('president') || text.includes('governor') || text.includes('senate')) return 'Politics';
    if (text.includes('sport') || text.includes('football') || text.includes('match') || text.includes('epl') || text.includes('fifa')) return 'Sports';
    if (text.includes('business') || text.includes('economy') || text.includes('naira') || text.includes('cbn') || text.includes('bank') || text.includes('market')) return 'Business';
    if (text.includes('entertainment') || text.includes('actor') || text.includes('movie') || text.includes('music') || text.includes('singer')) return 'Entertainment';
    return 'Other';
  };

  // Filter the news based on selected source and type
  const filteredNews = news.filter(article => {
    const sourceMatch = selectedSource === 'All' || article.source === selectedSource;
    const typeMatch = selectedType === 'All' || getArticleType(article) === selectedType;
    return sourceMatch && typeMatch;
  });

  return (
    <div>
      <div className="filter-controls" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div className="filter-group">
          <span style={{ fontWeight: 600, marginRight: '15px', color: 'var(--text-secondary)' }}>Source:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {sources.map(source => (
              <button 
                key={source}
                onClick={() => setSelectedSource(source)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  background: selectedSource === source ? 'var(--accent-primary)' : 'var(--glass-bg)',
                  color: selectedSource === source ? '#fff' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {source}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span style={{ fontWeight: 600, marginRight: '15px', color: 'var(--text-secondary)' }}>Category:</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {types.map(type => (
              <button 
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  background: selectedType === type ? 'var(--accent-secondary)' : 'var(--glass-bg)',
                  color: selectedType === type ? '#fff' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredNews.length === 0 ? (
        <div className="empty-state" style={{ padding: '40px 20px' }}>
          <h4>No articles match your filters.</h4>
          <button onClick={() => { setSelectedSource('All'); setSelectedType('All'); }} style={{ marginTop: '15px', padding: '8px 16px', background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', borderRadius: '6px', cursor: 'pointer' }}>Clear Filters</button>
        </div>
      ) : (
        <div className="news-grid">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} article={item} />
          ))}
        </div>
      )}
    </div>
  );
}
