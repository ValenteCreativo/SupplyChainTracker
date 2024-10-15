import React from 'react';

const donations = [
  { name: 'Alice Johnson', amount: '$500', date: 'Oct 12, 2024' },
  { name: 'Bob Smith', amount: '$300', date: 'Oct 10, 2024' },
  { name: 'Carla Green', amount: '$1000', date: 'Oct 9, 2024' },
];

const RecentDonations: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Recent Donations</h2>
      <ul>
        {donations.map((donation, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span className="text-lg font-medium">{donation.name}</span>
            <span className="text-lg font-bold text-[#39B54A]">{donation.amount}</span>
            <span className="text-sm text-gray-600">{donation.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentDonations;
