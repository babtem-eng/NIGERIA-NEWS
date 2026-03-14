'use client';

export default function Contact() {
  return (
    <div className="static-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
      <h1 className="page-title" style={{ marginBottom: '24px' }}>Contact Us</h1>
      
      <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>
          We'd love to hear from you! Whether you have feedback about the app, suggestions for new newspaper sources to add to our aggregator, or general inquiries, please reach out.
        </p>

        <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', marginTop: '20px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-dark)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Email</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-dark)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>Message</label>
              <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-dark)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" style={{ padding: '14px 24px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '10px', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background='var(--accent-secondary)'} onMouseOut={(e) => e.target.style.background='var(--accent-primary)'}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
