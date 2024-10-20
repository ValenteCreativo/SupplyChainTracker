'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Datos de ejemplo sobre puntajes de integridad para campañas recientes (ordenados de 2021 a 2023)
const reputationData = [
  { name: 'Flood Assistance (2022)', reputation: 85, beneficiaries: 5000, fundsRaised: '$1.2M' },
  { name: 'Hurricane Recovery (2023)', reputation: 88, beneficiaries: 4000, fundsRaised: '$2.0M' },
  { name: 'Earthquake Relief (2024)', reputation: 92, beneficiaries: 6000, fundsRaised: '$1.5M' },
];

const ReputationChart: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Integrity Score as Peacebuilders</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={reputationData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="reputation" stroke="#1E3A8A" fillOpacity={0.3} fill="#1E3A8A" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="mt-4 text-gray-500">This area chart indicates the integrity scores of recent peacebuilding campaigns.</p>
    </div>
  );
};

// Tooltip personalizado para el gráfico de reputación
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded">
        <p className="text-black">{`Campaign: ${payload[0].payload.name}`}</p>
        <p className="text-black">{`Integrity Score: ${payload[0].value}`}</p>
        <p className="text-black">{`Beneficiaries: ${payload[0].payload.beneficiaries}`}</p>
        <p className="text-black">{`Funds Raised: ${payload[0].payload.fundsRaised}`}</p>
      </div>
    );
  }
  return null;
};

export default ReputationChart;
