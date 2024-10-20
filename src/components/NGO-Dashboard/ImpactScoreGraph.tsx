'use client';

import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Datos de ejemplo sobre puntuaciones de impacto y hitos basados en desastres recientes en México
const data = [
  { name: 'Hurricane Agatha Relief', impact: 92, milestone: 'Provided Shelter for 5,000 Families' },
  { name: 'Earthquake Oaxaca Relief', impact: 88, milestone: 'Distributed 10,000 Food Packs' },
  { name: 'Tropical Storm Nora Relief', impact: 85, milestone: 'Rebuilt 200 Homes' },
];

const ImpactScoreGraph: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">Impact Score & Milestones</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            background
            dataKey="impact"
            fill="#1E3A8A"
            label={{
              position: 'insideStart',
              fill: '#fff',
              fontSize: '1rem',
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{ top: 0, left: 350, lineHeight: '24px' }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex justify-between text-gray-500">
            <span>{entry.name}</span>
            <span>{entry.milestone}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .recharts-surface {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }
      `}</style>
    </div>
  );
};

// Tooltip personalizado para el gráfico radial
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded">
        <p className="text-black">{`Campaign: ${payload[0].payload.name}`}</p>
        <p className="text-black">{`Impact Score: ${payload[0].value}`}</p>
        <p className="text-black">{`Milestone: ${payload[0].payload.milestone}`}</p>
      </div>
    );
  }
  return null;
};

export default ImpactScoreGraph;
