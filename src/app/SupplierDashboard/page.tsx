'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SupplierDashboard: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
     
     <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md">
        <Link href="/" passHref>
          <Image
            src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/Home" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Back
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow p-8 space-y-8 pt-32">
        <section className="container mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-[#4A3F35]">Supplier Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Search for Campaigns */}
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">Search for Campaigns</h2>
              <p className="text-center text-gray-600 mb-6">Explore and support peace-building campaigns in real-time.</p>
              <Link href="/SupplierDashboard/SearchCampaign" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Search Campaigns
                </button>
              </Link>
            </div>

            {/* Ecosystem Impact Tracker */}
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]"> My Impact</h2>
              <p className="text-center text-gray-600 mb-6">Track your contributions, see NGO attestations, milestones, and impact reports.</p>
              <Link href="/SupplierDashboard/ImpactTracker" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  View Impact
                </button>
              </Link>
            </div>

            {/* Network Visualization */}
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#4A3F35]">Peace Network</h2>
              <p className="text-center text-gray-600 mb-6">Visualize how peace is built in real-time through campaigns and milestones.</p>
              <Link href="/SupplierDashboard/NetworkVisualization" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Visualize Network
                </button>
              </Link>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From Mexico with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default SupplierDashboard;
