'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', marginTop: '60px', padding: '40px 0', backgroundColor: 'var(--bg-card)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div className="footer-links" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--text-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>About Us</Link>
          <Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--text-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>Contact</Link>
          <Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--text-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='var(--text-primary)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>Terms of Service</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {currentYear} Naija News Hub. All rights reserved. News content belongs to external publishers.
        </p>
      </div>
    </footer>
  );
}
