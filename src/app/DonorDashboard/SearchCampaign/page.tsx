'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SearchCampaigns: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list'); // Para alternar entre vista de lista y mapa

  // Filtros simulados
  const campaigns = [
    { name: "Water for Africa", category: "In-kind", location: "Kenya", goal: "10000 USD" },
    { name: "Education for All", category: "Monetary", location: "India", goal: "5000 USD" },
    { name: "Volunteers for Nature", category: "Volunteer", location: "Brazil", goal: "Help Needed" },
  ];

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
        <Image
          src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
          alt="Logo"
          width={100}
          height={50}
        />
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Home
            </button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-8 space-y-8 pt-32">
        <section className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold text-[#4A3F35] mb-6 text-center">Search Campaigns</h1>

          {/* Barra de búsqueda y Filtros */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <input
              type="text"
              placeholder="Search for campaigns..."
              className="w-full md:w-1/3 p-4 border rounded-lg mb-4 md:mb-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C2A676]"
            />
            <div className="flex space-x-4">
              <button className="bg-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Monetary
              </button>
              <button className="bg-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                In-kind
              </button>
              <button className="bg-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Volunteer
              </button>
            </div>
          </div>

          {/* Toggle de vista: Lista o Mapa */}
          <div className="flex justify-end mb-4">
            <button
              className={`px-4 py-2 rounded-l-full ${view === 'list' ? 'bg-[#C2A676]' : 'bg-gray-200'} text-white`}
              onClick={() => setView('list')}
            >
              List View
            </button>
            <button
              className={`px-4 py-2 rounded-r-full ${view === 'map' ? 'bg-[#C2A676]' : 'bg-gray-200'} text-white`}
              onClick={() => setView('map')}
            >
              Map View
            </button>
          </div>

          {/* Contenido dinámico: Lista o Mapa */}
          {view === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {campaigns.map((campaign, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-[#4A3F35]">{campaign.name}</h2>
                  <p className="text-[#4A3F35]"><strong>Category:</strong> {campaign.category}</p>
                  <p className="text-[#4A3F35]"><strong>Location:</strong> {campaign.location}</p>
                  <p className="text-[#4A3F35]"><strong>Goal:</strong> {campaign.goal}</p>
                  <button className="bg-[#C2A676] text-white px-4 py-2 rounded-full mt-4">Donate</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              {/* Aquí se agregará el componente de mapa más adelante */}
              <p className="text-xl text-[#4A3F35]">Map View Coming Soon</p>
            </div>
          )}
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

export default SearchCampaigns;
