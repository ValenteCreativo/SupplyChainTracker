'use client'

import React from 'react';
import NGOFlowDiagram from 'src/components/NGO-Dashboard/NGOFlowDiagram';
import SignupButton from 'src/components/OnChainKitTools/SignupButton';
import Image from 'next/image';
import Link from 'next/link'

const NGO: React.FC = () => {
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
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Home
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow p-8 space-y-8 pt-32">
  <section className="container mx-auto px-4">
    <NGOFlowDiagram />
    <div className="space-y-6 flex flex-col items-center">
      <SignupButton className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity" />

      <Link href="/Home" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                  Go to dashboard
                </button>
              </Link>
    </div>
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

export default NGO;
