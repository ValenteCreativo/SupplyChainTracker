import React from 'react';

const ngoData = [
  { name: 'Hope for Tomorrow', projects: 12, impact: 'High', verified: true },
  { name: 'Shelter Aid', projects: 8, impact: 'Moderate', verified: true },
  { name: 'Women Empowerment', projects: 6, impact: 'Low', verified: false },
];

const NGOOverview: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">NGO Performance</h2>
      <ul>
        {ngoData.map((ngo, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-200"
          >
            <span className="text-lg font-medium">{ngo.name}</span>
            <span className="text-sm text-gray-600">
              {ngo.verified ? 'Verified' : 'Not Verified'}
            </span>
            <span className="text-sm">{ngo.projects} projects</span>
            <span className="text-sm font-bold text-[#39B54A]">{ngo.impact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGOOverview;
