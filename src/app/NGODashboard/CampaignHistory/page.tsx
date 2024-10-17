'use client'

import React from 'react';
import CampaignHistoryList from 'src/components/NGO-Dashboard/CampaignHistoryList';
import ImpactScoreGraph from 'src/components/NGO-Dashboard/ImpactScoreGraph';
import ReputationChart from 'src/components/NGO-Dashboard/ReputationChart';
import Link from 'next/link'

const CampaignHistory: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <h1 className="text-3xl font-bold text-center text-[#4A3F35]">Campaign History</h1>
        <div className="flex items-center space-x-4">
              <Link href="/NGODashboard" passHref>
                <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Dashboard
                </button>
              </Link>
            </div>
      </header>

      
      <main className="flex-grow p-8 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <CampaignHistoryList />

        
          <ImpactScoreGraph />
        </div>

        
        <div className="grid grid-cols-1 mt-8">
          <ReputationChart />
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

export default CampaignHistory;
