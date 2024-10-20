'use client'

import React, { useState } from 'react';

const ForumPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Create a new post</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium">Title:</label>
        <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description:</label>
        <textarea 
          className="w-full p-2 border border-gray-300 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full">
        Post
      </button>
    </form>
  );
};

export default ForumPostForm;
