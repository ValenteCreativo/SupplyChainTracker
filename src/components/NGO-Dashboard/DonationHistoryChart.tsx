'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const donationData = [
  { date: 'Jun 2024', amount: 2000 },
  { date: 'Jul 2024', amount: 3000 },
  { date: 'Ago 2024', amount: 1500 },
  { date: 'Sept 2024', amount: 4000 },
];

const DonationHistoryChart: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Donation History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={donationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#D6BA8A" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-4 text-gray-500">This line chart displays the donation amounts received over time.</p>
    </div>
  );
};

export default DonationHistoryChart;
