import React from "react";
import { cn } from "@/app/utils/cn";

interface StickyNotesProps {
  content: string;
  authorName?: string; // Making authorName optional
  stickyColor?: keyof typeof colorVariants; // Allow only keys of colorVariants
  rotation?: number; // Optional rotation value provided by the user
  containerClassName?: string; // Optional rotation value provided by the user
}

const colorVariants = {
  red: "bg-red-300",
  orange: "bg-orange-300",
  amber: "bg-amber-300",
  yellow: "bg-yellow-300",
  lime: "bg-lime-300",
  green: "bg-green-300",
  emerald: "bg-emerald-300",
  teal: "bg-teal-300",
  cyan: "bg-cyan-300",
  blue: "bg-blue-300",
  indigo: "bg-indigo-300",
  violet: "bg-violet-300",
  purple: "bg-purple-300",
  fuchsia: "bg-fuchsia-300",
  pink: "bg-pink-300",
  rose: "bg-rose-400",
};

const getRandomColor = () => {
  const colorKeys = Object.keys(colorVariants);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  return colorKeys[randomIndex];
};

const StickyNotes: React.FC<StickyNotesProps> = ({
  content,
  authorName,
  stickyColor = getRandomColor(), // Default to random color
  containerClassName,
  rotation = Math.floor(Math.random() * 31) - 15, // Generate random rotation value if not provided by the user
}) => {
    const colorClass = colorVariants[stickyColor as keyof typeof colorVariants];

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(`min-h-40 w-40 ${colorClass} font-bold flex flex-col transition-all ease-in duration-150 text-black rounded-sm text-xs p-4 shadow-lg`, containerClassName) }
    >
      <p className=" flex-1 opacity-75">{content}</p>
      {authorName && (
        <div className="text-xs opacity-50 pt-4 font-bold capitalize ">
          {authorName}
        </div>
      )}
    </div>
  );
};

export default StickyNotes;
