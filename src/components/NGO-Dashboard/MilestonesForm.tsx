'use client'

import React from 'react';

const MilestonesForm: React.FC = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-[#4A3F35]">Attest Milestones</h2>
      <p className="text-gray-600 mb-6">
        Declare milestones reached, upload evidence, and track campaign progress.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Milestone Name</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter milestone name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Date Reached</label>
          <input 
            type="date" 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Evidence URL</label>
          <input 
            type="url" 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Link to evidence"
          />
        </div>
        <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Submit Milestone
        </button>
      </form>
    </div>
  );
};

export default MilestonesForm;
