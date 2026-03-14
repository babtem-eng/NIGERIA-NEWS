import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="Naija News Hub" style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover' }} />
          Naija News Hub
        </Link>
      </div>
    </header>
  );
}
