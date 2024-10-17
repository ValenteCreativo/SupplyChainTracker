'use client';

import ForumPostList from 'src/components/Donor-Dashboard/ForumPostList';
import ForumFilters from 'src/components/Donor-Dashboard/ForumFilters';
import ProfileCard from 'src/components/Donor-Dashboard/ProfileCard';

const Forum: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <h1 className="text-4xl font-semibold text-[#4A3F35]">Forum</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-8 space-y-8 pt-32 lg:flex lg:justify-between">
        <aside className="w-full lg:w-1/4 space-y-4 p-4">
          <ProfileCard />
          <ForumFilters />
        </aside>
        <section className="flex-grow p-4">
          <ForumPostList />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Forum;
