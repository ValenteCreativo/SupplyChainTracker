'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const CreateCampaign: React.FC = () => {
  
  const [campaignName, setCampaignName] = useState('');
  const [description, setDescription] = useState('');
  const [milestones, setMilestones] = useState(['']);
  const [goal, setGoal] = useState('');

  
  const addMilestone = () => {
    setMilestones([...milestones, '']);
  };

  const handleMilestoneChange = (index: number, value: string) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index] = value;
    setMilestones(updatedMilestones);
  };

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

  {/* Título centrado */}
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
          <h2 className="text-2xl font-bold mb-6 text-center text-[#4A3F35]">Campaign Details</h2>
          <form className="space-y-6">
            
            <div>
              <label className="block text-[#4A3F35] text-lg font-semibold mb-2">Campaign Name</label>
              <input
                type="text"
                className="w-full p-3 border border-[#C2A676] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2A676]"
                placeholder="Enter campaign name"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              />
            </div>

            
            <div>
              <label className="block text-[#4A3F35] text-lg font-semibold mb-2">Description</label>
              <textarea
                className="w-full p-3 border border-[#C2A676] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2A676]"
                placeholder="Enter a brief description of the campaign"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

        
            <div>
              <label className="block text-[#4A3F35] text-lg font-semibold mb-2">Fundraising Goal (USD)</label>
              <input
                type="number"
                className="w-full p-3 border border-[#C2A676] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2A676]"
                placeholder="Enter fundraising goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>

           
            <div>
              <label className="block text-[#4A3F35] text-lg font-semibold mb-2">Milestones</label>
              {milestones.map((milestone, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-full mb-3 p-3 border border-[#C2A676] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2A676]"
                  placeholder={`Milestone ${index + 1}`}
                  value={milestone}
                  onChange={(e) => handleMilestoneChange(index, e.target.value)}
                />
              ))}
              <button
  type="button"
  className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
  onClick={addMilestone}
>
  + Add Milestone
</button>
</div>

<a 
  href="https://base-sepolia.easscan.org/attestation/attestWithSchema/0xbe316d1b4853bff8f96d3addef2aaaada363d29e7a04fbf3888278d696752616" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity mt-4"
  >
    Create Campaign
  </button>
</a>
          </form>
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
