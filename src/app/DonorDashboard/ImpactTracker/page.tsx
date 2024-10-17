'use client'

import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const ImpactTracker: React.FC = () => {
  // Datos simulados para la gráfica de impacto
  const data = [
    { name: "Water for Africa", value: 4000 },
    { name: "Education for All", value: 3000 },
    { name: "Volunteers for Nature", value: 2000 },
  ];
  
  const COLORS = ['#C2A676', '#4A3F35', '#D6BA8A'];

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <h1 className="text-4xl font-semibold text-[#4A3F35]">Impact Tracker</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-8 space-y-8 pt-32">
        <section className="container mx-auto px-4">
          {/* Resumen de Donaciones */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#4A3F35]">Your Donations</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#4A3F35]">Monetary Donations</h3>
                <p className="text-[#4A3F35]">$4000 USD</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#4A3F35]">In-Kind Donations</h3>
                <p className="text-[#4A3F35]">15 items</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#4A3F35]">Volunteering Hours</h3>
                <p className="text-[#4A3F35]">25 hours</p>
              </div>
            </div>
          </div>

          {/* Gráfica de Impacto */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#4A3F35] mb-4">Campaign Impact Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Atestaciones de la ONG */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-[#4A3F35]">NGO Progress & Attestations</h2>
            <ul className="mt-4 space-y-4">
              <li className="text-[#4A3F35]">
                <strong>Water for Africa:</strong> Reached 50% of the donation goal. <br />
                <em>Attestation:</em> Milestone 1 completed (Water distribution in Kenya).
              </li>
              <li className="text-[#4A3F35]">
                <strong>Education for All:</strong> Reached 60% of the donation goal. <br />
                <em>Attestation:</em> Milestone 2 completed (School infrastructure setup).
              </li>
              <li className="text-[#4A3F35]">
                <strong>Volunteers for Nature:</strong> Reached 40% of the donation goal. <br />
                <em>Attestation:</em> Milestone 1 completed (Environmental cleanup).
              </li>
            </ul>
          </div>

          {/* Cadena de suministro */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-[#4A3F35]">Supply Chain Status</h2>
            <ul className="mt-4 space-y-4">
              <li className="text-[#4A3F35]">
                <strong>Water Bottles (Africa Campaign):</strong> Delivered to Kenya distribution center (16/Oct/2024).
              </li>
              <li className="text-[#4A3F35]">
                <strong>School Supplies (India Campaign):</strong> En route to Rajasthan (17/Oct/2024).
              </li>
              <li className="text-[#4A3F35]">
                <strong>Cleaning Supplies (Brazil Campaign):</strong> Arrived at volunteer site (15/Oct/2024).
              </li>
            </ul>
          </div>

          {/* Compartir Impacto en Warpcast/Farcaster */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8 text-center">
            <h2 className="text-2xl font-bold text-[#4A3F35] mb-4">Share Your Impact</h2>
            <button className="bg-[#C2A676] text-white px-8 py-2 rounded-full hover:opacity-90 transition-opacity">
              Share on Warpcast/Farcaster
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
        <div className="container mx-auto text-center">
          <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
        </div>
      </footer>
    </div>
  );
};

export default ImpactTracker;
