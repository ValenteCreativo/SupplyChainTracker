import React from 'react';

const stories = [
  {
    title: 'Rebuilding After the Flood',
    description: 'Thanks to donations, 20 families were relocated and are rebuilding their homes.',
    image: 'https://via.placeholder.com/100', // Replace with actual images
  },
  {
    title: 'Emergency Medical Aid',
    description: 'Essential medical supplies delivered to a remote village.',
    image: 'https://via.placeholder.com/100',
  },
];

const ImpactStories: React.FC = () => {
  return (
    <div className="bg-[#F5F1E3] rounded-lg p-6 shadow-lg text-[#333]">
      <h2 className="text-xl font-semibold text-[#6D4C41] mb-4">Impact Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <img
              src={story.image}
              alt={story.title}
              className="rounded-lg w-32 h-32 object-cover"
            />
            <h3 className="text-lg font-bold text-[#6D4C41]">{story.title}</h3>
            <p className="text-gray-600">{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
