'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard: React.FC = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center pt-32">
        <h1 className="text-4xl font-extrabold text-[#4A3F35] mb-6 drop-shadow-lg">
          Welcome to Supply Cycle
        </h1>

        <p className="text-1xl text-[#4A3F35] mb-8 max-w-2xl">
          Choose the appropriate tooling based on your role. Whether you're an NGO managing resources or a donor tracking your impact, we've got you covered.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => router.push('/NGO')}
            className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white py-3 px-6 rounded-full text-lg hover:opacity-90 transition-opacity">
            NGO's Tooling
          </button>

          <button
            onClick={() => router.push('/Donor')}
            className="bg-[#A48460] text-white py-3 px-6 rounded-full text-lg hover:bg-[#8F6C4E] transition-colors">
            Donor's Tooling
          </button>

        </div>
        

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

export default Dashboard;
