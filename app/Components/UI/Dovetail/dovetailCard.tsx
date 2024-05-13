// components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  image?: string;
}

const DovetailCard: React.FC<CardProps> = ({ title, content, author, authorAvatar, image }) => {
  return (
    <div className="max-w-xs mb-4 overflow-hidden bg-white rounded-md shadow-md">
      {image && <img className="object-cover w-full h-40" src={image} alt={title} />}
      <div className="p-4">
        <h2 className="font-semibold text-gray-800 text-md">{title}</h2>
        <p className="mt-2 text-xs text-gray-600">{content}</p>
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-2 rounded-full" src={authorAvatar} alt={author} />
          <span className="text-gray-800">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default DovetailCard;
