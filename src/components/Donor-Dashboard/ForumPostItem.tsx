import React from 'react';

interface PostProps {
  post: { id: number, title: string, description: string, author: string };
}

const ForumPostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
      <p className="text-sm text-gray-500">By {post.author}</p>
    </div>
  );
};

export default ForumPostItem;
