'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DonorDashboard: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
     
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="flex items-center space-x-4">
          <Link href="/Home" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Home
            </button>
          </Link>
        </div>
      </header>

      
      <main className="flex-grow p-8 space-y-8 pt-32">
        <section className="container mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-[#4A3F35]">Donor Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">Search for Campaigns</h2>
              <p className="text-center text-gray-600 mb-6">Discover new campaigns to donate or volunteer with.</p>
              <Link href="/DonorDashboard/SearchCampaign" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Search Campaigns
                </button>
              </Link>
            </div>

            
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">Impact Tracker</h2>
              <p className="text-center text-gray-600 mb-6">Track the impact of your donations and share it with your network.</p>
              <Link href="/DonorDashboard/ImpactTracker" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Impact Tracker
                </button>
              </Link>
            </div>

            
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">Collaboration Forum</h2>
              <p className="text-center text-gray-600 mb-6">Join discussions and build new projects with the community.</p>
              <Link href="/DonorDashboard/Forum" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Collaboration Forum
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      
      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default DonorDashboard;
