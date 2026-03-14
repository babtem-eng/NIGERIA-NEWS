export default function Privacy() {
  const lastUpdated = "March 13, 2026";

  return (
    <div className="static-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
      <h1 className="page-title" style={{ marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.9rem' }}>Last Updated: {lastUpdated}</p>
      
      <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>
          At Naija News Hub, your privacy is critically important to us. This Privacy Policy outlines the types of information we collect, how it is used, and how we protect your personal data when you use our news aggregation services.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>1. Information We Collect</h2>
        <p>
          As an RSS news aggregator, Naija News Hub functions primarily as a content curation platform. We do not require you to create an account, log in, or provide personal information to access our basic news feeds. 
        </p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><strong>Usage Data:</strong> We may automatically collect anonymous diagnostic data such as IP addresses, browser types, interaction with our layout, and time spent on pages to improve our service.</li>
          <li><strong>Cookies:</strong> We use essential cookies to maintain your category filtering preferences and theme choices locally in your browser.</li>
          <li><strong>Contact Information:</strong> If you voluntarily reach out to us via our Contact form, we collect your name, email address, and message content solely for the purpose of responding to your inquiry.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>2. Third-Party Publishers</h2>
        <p>
          Naija News Hub aggregates links, headlines, and excerpts from third-party Nigerian news publishers (e.g., Vanguard, Punch, Premium Times). When you click a news card to "Read Article", you are directed to the publisher's external website. We have no control over the privacy practices, tracking scripts, tracking cookies, or content of these external sites. We strongly encourage you to review the privacy policies of any site you visit.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>3. Data Security</h2>
        <p>
          We implement commercially reasonable technical and organizational measures to secure your personal data against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the Internet can be guaranteed to be 100% secure.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>4. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy periodically to reflect changes in our practices or relevant laws. We will notify users of any significant changes by updating the "Last Updated" date at the top of this page.
        </p>
      </div>
    </div>
  );
}
