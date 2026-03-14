export default function Terms() {
  const lastUpdated = "March 13, 2026";

  return (
    <div className="static-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
      <h1 className="page-title" style={{ marginBottom: '8px' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.9rem' }}>Last Updated: {lastUpdated}</p>
      
      <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>
          Please read these Terms of Service ("Terms") carefully before using the Naija News Hub website (the "Service") operated by Naija News Hub ("us", "we", or "our").
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>2. Nature of the Service (Fair Use Aggregation)</h2>
        <p>
          Naija News Hub is a content organization platform. We automatically aggregate headlines, featured images, and short text snippets from the publicly available RSS feeds of various Nigerian news publishers. 
        </p>
        <p>
          <strong>No Ownership of Content:</strong> We do not claim ownership, copyright, or authorship over the news articles displayed on our site. All copyright rights belong entirely to the respective original publishers (e.g., Vanguard, Punch, The Nation, Channels TV). Our service exists to drive traffic to the original creators by providing direct outbound links to their full articles.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>3. Links To Other Web Sites</h2>
        <p>
          Our Service contains direct links to third-party web sites or services that are not owned or controlled by Naija News Hub. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Naija News Hub shall not be responsible or liable, directly or indirectly, for any damage or loss caused by or in connection with the use of such external content.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>4. Disclaimer of Warranties</h2>
        <p>
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the Service, or the accuracy, reliability, or completeness of the aggregated news information. The news you read may contain errors, biases, or inaccuracies propagated from the original source.
        </p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '20px', fontSize: '1.3rem' }}>5. Modifications to Service</h2>
        <p>
          We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We may also add or remove specific newspaper publishers from our aggregation feeds at our sole discretion.
        </p>
      </div>
    </div>
  );
}
