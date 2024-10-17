'use client'

const campaigns = [
    { name: 'Water Relief 2023', status: 'Completed', milestones: '90%', impact: 'High', date: 'Jan 2023 - Jul 2023' },
    { name: 'Food Aid 2022', status: 'In Progress', milestones: '60%', impact: 'Medium', date: 'Aug 2022 - Present' },
    // Puedes añadir más campañas
  ];
  
  const CampaignHistoryList: React.FC = () => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#4A3F35]">Previous Campaigns</h2>
        <ul>
          {campaigns.map((campaign, index) => (
            <li key={index} className="mb-4">
              <p className="font-bold">{campaign.name}</p>
              <p>Status: {campaign.status}</p>
              <p>Milestones: {campaign.milestones}</p>
              <p>Impact: {campaign.impact}</p>
              <p>Date: {campaign.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CampaignHistoryList;
  