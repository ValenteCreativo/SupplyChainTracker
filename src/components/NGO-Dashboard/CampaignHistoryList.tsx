'use client';

import Link from "next/link";

// Datos de campañas generales que no se han mencionado anteriormente
const campaigns = [
  { name: 'Earthquake Relief 2024', status: 'Completed', milestones: '100%', impact: 'High', date: 'Feb 2024 - Aug 2024', link: '#link-to-earthquake-data' },
  { name: 'Flood Assistance 2023', status: 'Completed', milestones: '90%', impact: 'High', date: 'Mar 2023 - Dec 2023', link: '#link-to-flood-data' },
  { name: 'Health Services 2022', status: 'Completed', milestones: '100%', impact: 'Medium', date: 'Apr 2022 - Nov 2022', link: '#link-to-health-data' },
];

const CampaignHistoryList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Previous Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index} className="mb-4 border-b pb-2 last:border-b-0">
            <p className="font-bold">{campaign.name}</p>
            <p>Status: {campaign.status}</p>
            <p>Milestones: {campaign.milestones}</p>
            <p>Impact: {campaign.impact}</p>
            <p>Date: {campaign.date}</p>
            <Link href={campaign.link} className="text-[#D6BA8A] hover:underline">
              View Campaign Data
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignHistoryList;
