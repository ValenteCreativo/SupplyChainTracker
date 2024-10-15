import React from 'react';

const DonationSummary: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333] flex flex-col space-y-4">
      <h2 className="text-xl font-semibold text-[#6D4C41]">Donation Overview</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Total Donations</p>
          <h3 className="text-2xl font-bold">$50,000</h3>
        </div>
        <div className="bg-[#39B54A] text-white p-4 rounded-full">
          {/* Icon Placeholder */}
          <span className="text-3xl">&#x1F4B0;</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Number of Donors</p>
          <h3 className="text-2xl font-bold">350</h3>
        </div>
        <div className="bg-[#CB6CE5] text-white p-4 rounded-full">
          {/* Icon Placeholder */}
          <span className="text-3xl">&#x1F465;</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">Funds Distributed</p>
          <h3 className="text-2xl font-bold">$40,000</h3>
        </div>
        <div className="bg-[#FF7043] text-white p-4 rounded-full">
          {/* Icon Placeholder */}
          <span className="text-3xl">&#x1F4C8;</span>
        </div>
      </div>
    </div>
  );
};

export default DonationSummary;
