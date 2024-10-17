import React from 'react';
import ForumPostItem from './ForumPostItem'; // Asegurando import default

const ForumPostList: React.FC = () => {
  const posts = [
    { id: 1, title: "Project Collaboration for Environmental Campaign", description: "Looking for volunteers...", author: "Jane Doe" },
    { id: 2, title: "Fundraising Strategies", description: "Discussion on effective methods...", author: "John Smith" },
  ];

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <ForumPostItem key={post.id} post={post} /> 
      ))}
    </div>
  );
};

export default ForumPostList; // Confirmando exportación default
