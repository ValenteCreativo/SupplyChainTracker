'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RegisterNGO: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Link href="/" passHref>
          <Image
            src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
          Register NGO
        </h1>

        <div className="flex items-center space-x-4">
          <Link href="/NGODashboard" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Dashboard
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow p-8 pt-32">
        <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4A3F35]">Register Your NGO</h2>
          <p className="text-gray-600 mb-6">
            Registering your NGO is an essential step to gain visibility and credibility in the nonprofit sector. 
            Here are the key details you'll need to provide:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>NGO Name:</strong> Choose a unique name that reflects your mission.</li>
            <li><strong>Mission:</strong> Provide a brief overview of your NGO's purpose and goals.</li>
            <li><strong>Category:</strong> Include a category for your project either Social, Environmental or Animal</li>
            <li><strong>Website:</strong> If available, provide a link to your NGO's website for more information.</li>
            
          </ul>
          <p className="text-gray-600 mb-6">
            Once you've gathered all the required information, you can proceed to register your NGO. 
            This process will help you build trust with donors and the community, allowing you to further your mission.
          </p>
          <p className="text-gray-600 mb-6">
            To register your NGO, please visit the attestation page and follow the instructions provided. 
            This will securely record your NGO's details in the Blockchain system.
          </p>
          <Link
            href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0xbe316d1b4853bff8f96d3addef2aaaada363d29e7a04fbf3888278d696752616"
            className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block mt-4"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register NGO
          </Link>
        </div>
      </main>

      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default RegisterNGO;
