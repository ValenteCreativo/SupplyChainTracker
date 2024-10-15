import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Refuge Aid', value: 50, color: '#39B54A' },
  { name: 'Emergency Fund', value: 20, color: '#FF7043' },
  { name: 'Women Assistance', value: 20, color: '#CB6CE5' },
  { name: 'Operations', value: 10, color: '#6D4C41' },
];

const FundsAllocation: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Funds Allocation</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="mt-4 space-y-2">
        {data.map((item, index) => (
          <li key={index} className="flex justify-between text-lg">
            <span>{item.name}</span>
            <span className="font-bold">{item.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FundsAllocation;
