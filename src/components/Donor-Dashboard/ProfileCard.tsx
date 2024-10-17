import React from 'react';

const ProfileCard: React.FC = () => {
  const user = {
    name: "John Doe",
    builderScore: 85, // Placeholder
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p className="text-gray-600">Builder Score: {user.builderScore}</p>
    </div>
  );
};

export default ProfileCard;
