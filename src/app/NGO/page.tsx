'use client';

import React from 'react';
import NGOFlowDiagram from 'src/components/NGO-Dashboard/NGOFlowDiagram';
import SignupButton from 'src/components/OnChainKitTools/SignupButton';
import Image from 'next/image';
import Link from 'next/link';

const NGO: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-[#388E3C] bg-opacity-90 backdrop-blur-lg shadow-md w-full">
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
        <section className="container mx-auto px-4">
          <NGOFlowDiagram />
          <div className="space-y-6 flex flex-col items-center mt-8">
            <SignupButton className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity" />
            
            <Link href="/NGODashboard" passHref>
              <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                Go to dashboard
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3F35] text-white py-8 w-full">
        <div className="container mx-auto text-center">
          <p>
            From México with 🩵. Open source available at: 
            <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]"> Github</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NGO;
