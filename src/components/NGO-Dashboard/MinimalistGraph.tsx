import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Datos de ejemplo con milestones y porcentajes de completado
const data = [
  { name: 'Inicio', progress: 0 },
  { name: 'Planeación', progress: 20 },
  { name: 'Distribución', progress: 50 },
  { name: 'Entrega Intermedia', progress: 75 },
  { name: 'Impacto Final', progress: 100 },
];

const MinimalistGraph = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4A3F35]">Progress of Campaign Milestones</h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Gradiente de color para la línea */}
          <defs>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff7f50" />
              <stop offset="100%" stopColor="#87cefa" />
            </linearGradient>
          </defs>
          
          {/* Estilos minimalistas tipo sketch */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fill: '#4A3F35', fontSize: 12 }} />
          <YAxis tick={{ fill: '#4A3F35', fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#f0f0f0', borderRadius: '10px', fontSize: '14px' }} />
          
          {/* Línea con efecto wow */}
          <Line
            type="monotone"
            dataKey="progress"
            stroke="url(#lineColor)"
            strokeWidth={4}
            dot={{ r: 6, fill: '#87cefa', strokeWidth: 2, stroke: '#4A3F35' }}
            activeDot={{ r: 8, stroke: '#ff7f50', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MinimalistGraph;
