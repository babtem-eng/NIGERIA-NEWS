import NewsFeed from '@/components/NewsFeed';

export default function Home() {
  return (
    <>
      <h1 className="page-title">Today's Headlines</h1>
      <p className="page-subtitle">Stay updated with the latest news from Nigeria's top publishers.</p>
      
      <NewsFeed />
    </>
  );
}
