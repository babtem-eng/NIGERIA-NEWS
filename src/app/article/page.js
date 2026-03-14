'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

function ArticleContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) {
        setError('No article ID provided.');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        
        if (data.success) {
          const found = data.data.find(a => a.id === id);
          if (found) {
            setArticle(found);
          } else {
            setError('Article not found or has expired from the recent feed.');
          }
        } else {
          setError(data.error || 'Failed to fetch article data');
        }
      } catch (err) {
        setError('Network error: Unable to load article at this time.');
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="static-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
        <div className="skeleton-line title" style={{ height: '40px', width: '80%', marginBottom: '20px' }}></div>
        <div className="skeleton-img" style={{ height: '400px', borderRadius: '16px', marginBottom: '30px' }}></div>
        <div className="skeleton-line" style={{ height: '20px' }}></div>
        <div className="skeleton-line" style={{ height: '20px' }}></div>
        <div className="skeleton-line short" style={{ height: '20px' }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <svg className="error-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3>Whoops! Something went wrong.</h3>
        <p>{error}</p>
        <Link href="/" style={{ mt: '20px', padding: '10px 20px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', display: 'inline-block', marginTop: '20px' }}>
          Back to Headlines
        </Link>
      </div>
    );
  }

  if (!article) return null;

  const fallbackImage = 'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&q=80&w=1200';
  const displayImage = article.image || fallbackImage;

  let timeAgo = '';
  try {
    timeAgo = formatDistanceToNow(new Date(article.pubDate), { addSuffix: true });
  } catch (e) {
    timeAgo = article.pubDate || '';
  }

  return (
    <article className="article-view" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0 60px 0' }}>
      <Link href="/" style={{ color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', fontWeight: 600, fontSize: '0.95rem' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Back to News Feed
      </Link>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-secondary)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          {article.source}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{timeAgo}</span>
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '30px', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
        {article.title}
      </h1>

      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={displayImage} alt={article.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '50px', background: 'var(--bg-card)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--accent-primary)' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article Summary</h3>
        <p>{article.snippet}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Continue Reading</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '10px' }}>
          Read the full, unabridged article directly on the {article.source} website.
        </p>
        <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 32px', background: 'var(--accent-primary)', color: 'white', borderRadius: '12px', fontWeight: 600, fontSize: '1.1rem', transition: 'all 0.2s', boxShadow: 'var(--shadow-glow)' }}>
          Read on {article.source}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>Loading article abstract...</div>}>
      <ArticleContent />
    </Suspense>
  );
}
