"use client";
import React, { useState } from "react";

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
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-64 p-2 rounded-2xl bg-black/[0.5] text-sm backdrop-blur-lg z-20 ">
      <button
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        className="flex items-center justify-between w-full p-2 font-semibold text-white bg-slate-800 rounded-xl shadow-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        <span>{isCollapsed ? "Show Table of Contents" : "Hide Table of Contents"}</span>
        <svg
          className={`transform transition-transform duration-300 ${isCollapsed ? "rotate-90" : "-rotate-90"}`}
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      <ul
        className={`overflow-hidden transition-all duration-300 ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
        }`}
      >
        {items.map((item) => (
          <li key={item.id} className="my-1">
            <a
              href={`#${item.id}`}
              className="block px-2 py-1 text-white rounded hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
