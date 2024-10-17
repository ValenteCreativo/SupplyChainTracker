'use client'

import React from 'react';

const ImpactReportForm: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Submit Impact Report</h2>
      <p className="text-gray-600 mb-6">
        Upload final reports and track the impact of your campaign.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Report URL</label>
          <input 
            type="url" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Link to final report"
          />
        </div>
        <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ImpactReportForm;
