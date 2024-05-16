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
    <nav className="flex flex-col  gap-4 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-64 rounded-3xl bg-black/[0.5] z-10 p-4  text-sm backdrop-blur">
      <button
        onClick={toggleCollapse}
        className="relative inline-block p-px text-xs font-semibold leading-6 text-white no-underline shadow-2xl cursor-pointer rounded-xl bg-slate-800 group shadow-zinc-900"
      >
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex items-center justify-between px-4 py-2 space-x-2 rounded-xl bg-zinc-950 ring-1 ring-white/10 ">
          <span>
            {/* Tailwind Connect */}
            {isCollapsed ? "Show Table of Contents" : "Hide Table of Contents"}
          </span>
          <svg
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
              transform={isCollapsed ? "rotate(90 12 12)" : "rotate(-90 12 12)"}
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </button>
      {/* <button
        onClick={toggleCollapse}
        className='flex items-center justify-center w-full px-2 py-2 bg-gray-700 rounded-lg dark:bg-zinc-950 hover:bg-sky-700'
      >
              {isCollapsed ? 'Show Table of Contents' : 'Hide Table of Contents'}

      </button> */}
      <ul
        className={`overflow-hidden transition-all duration-300 ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
        }`}
      >
        {items.map((item) => (
          <li key={item.id} className="my-1">
            <a href={`#${item.id}`} className="hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
