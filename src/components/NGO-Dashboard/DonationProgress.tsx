import React from 'react';

const DonationProgress: React.FC = () => {
  const progressPercentage = 75; // Example percentage

  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Fundraising Progress</h2>
      <div className="relative w-full h-4 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-[#39B54A] rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        {progressPercentage}% of the $100,000 goal reached!
      </p>
    </div>
  );
};

export default DonationProgress;
