import React from 'react';

const DonationsTracking: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Track Donations</h2>
      <p className="text-gray-600 mb-6">
        Register the status of donations at each stage of the supply chain.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Donation Description</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter details (e.g., 10 bottles of water)"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Location</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter current location"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Date</label>
          <input 
            type="date" 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Register Donation
        </button>
      </form>
    </div>
  );
};

export default DonationsTracking;
