'use client'
import React, { useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className='fixed bottom-4 left-1/2 transform -translate-x-1/2 w-64 rounded bg-black/[0.6] z-10 p-8 text-sm backdrop-blur'>
      <button
        onClick={toggleCollapse}
        className='px-2 py-2 bg-gray-700 rounded text-white w-full'
      >
        {isCollapsed ? 'Show Contents' : 'Hide Contents'}
      </button>
      <ul className={`overflow-hidden mt-4 transition-all duration-300 ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}`}>
        {items.map((item) => (
          <li key={item.id} className='my-1'>
            <a href={`#${item.id}`} className='hover:underline'>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
