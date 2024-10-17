import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Water Relief 2023', impact: 85 },
  { name: 'Food Aid 2022', impact: 60 },
];

const ImpactScoreGraph: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Impact Score</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: '#4A3F35', fontSize: 12 }} />
          <YAxis tick={{ fill: '#4A3F35', fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="impact" fill="#4A3F35" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImpactScoreGraph;
