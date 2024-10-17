import React from 'react';

const ForumFilters: React.FC = () => {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Filters</h3>
      <div>
        <label className="block text-sm">Category:</label>
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option>All</option>
          <option>Volunteering</option>
          <option>Fundraising</option>
          <option>Project Collaboration</option>
        </select>
      </div>
    </div>
  );
};

export default ForumFilters;
