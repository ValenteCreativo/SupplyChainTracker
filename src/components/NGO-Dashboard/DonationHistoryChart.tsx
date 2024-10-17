'use client'

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', donations: 4000 },
  { name: 'Feb', donations: 3000 },
  { name: 'Mar', donations: 2000 },
  { name: 'Apr', donations: 2780 },
  { name: 'May', donations: 1890 },
  { name: 'Jun', donations: 2390 },
  { name: 'Jul', donations: 3490 },
];

const DonationHistoryChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="donations" fill="#CB6CE5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DonationHistoryChart;
