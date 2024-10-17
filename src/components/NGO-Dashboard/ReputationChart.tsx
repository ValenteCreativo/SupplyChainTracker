'use client'

import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const reputationData = [
  { name: 'Water Relief 2023', reputation: 90 },
  { name: 'Food Aid 2022', reputation: 75 },
];

const ReputationChart: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Reputation</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart data={reputationData} innerRadius="10%" outerRadius="80%" barSize={10}>
          <RadialBar dataKey="reputation" fill="#87cefa" />
          <Legend iconSize={10} layout="horizontal" verticalAlign="top" wrapperStyle={{ top: 0 }} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReputationChart;
