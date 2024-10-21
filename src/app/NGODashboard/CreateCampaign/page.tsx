'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CreateCampaign: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
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

        <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
          Create Campaign
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
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4A3F35]">Create Your Campaign</h2>
          <p className="text-gray-600 mb-6">
            Creating a campaign is your opportunity to make a significant impact in your community. 
            To get started, you'll need to fill out the following key information:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Campaign Name:</strong> Choose a compelling name for your campaign.</li>
            <li><strong>Description:</strong> Provide a brief overview of the campaign's purpose and goals.</li>
            <li><strong>Fundraising Goal:</strong> Specify the amount of money needed to achieve your campaign's objectives.</li>
            <li><strong>Milestones:</strong> Outline specific goals you aim to reach throughout the campaign, helping to track progress and celebrate achievements.</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Once you've gathered all this information, you can submit your campaign for approval. 
            This will allow you to begin fundraising and making a real difference in the lives of those you aim to support.
          </p>
          <p className="text-gray-600 mb-6">
            To create your campaign, please visit the attestation page and follow the instructions provided. 
            This will ensure that your campaign details are recorded in a secure and transparent manner.
          </p>
          <Link
            href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0xeff691af0f7bb45f8a061eaa59933e6aca6d151854289ed5c2e0edec5906d71a"
            className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity inline-block mt-4"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Create Campaign
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

export default CreateCampaign;
