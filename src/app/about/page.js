export default function About() {
  return (
    <div className="static-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
      <h1 className="page-title" style={{ marginBottom: '24px' }}>About Naija News Hub</h1>
      
      <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p>
          Welcome to <strong>Naija News Hub</strong>, your premier destination for aggregated, real-time news from across Nigeria. We believe in making information accessible, organized, and beautifully presented.
        </p>

        <p>
          In a fast-paced world, staying updated with multiple news outlets can be overwhelming. Our platform solves this by bringing together the top headlines from Nigeria's most trusted and widely-read publishers—such as Vanguard, Punch, The Nation, Channels TV, and Premium Times—all into a single, seamless interface.
        </p>

        <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)', marginTop: '20px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Our Mission</h3>
          <p style={{ fontSize: '1rem' }}>
            To empower Nigerians globally by providing a unified, unbiased, and lightning-fast platform to consume daily news, politics, sports, and entertainment updates. We strive to respect the original publishers by driving engaging traffic directly to their full articles.
          </p>
        </div>

        <p>
          Please note that Naija News Hub is an aggregator. All articles, images, and content belong to their respective original publishers. We do not alter the news; we simply organize it for your convenience.
        </p>
      </div>
    </div>
  );
}
