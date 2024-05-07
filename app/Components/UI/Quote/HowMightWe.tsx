import React from 'react';
import { cn } from '@/app/utils/cn';

const colorVariants: {[key: string]: string} = {
  gray: "text-gray-100",
  red: "text-red-300",
  orange: "text-orange-300",
  amber: "text-amber-300",
  yellow: "text-yellow-300",
  lime: "text-lime-300",
  green: "text-green-300",
  emerald: "text-emerald-300",
  teal: "text-teal-300",
  cyan: "text-cyan-300",
  blue: "text-blue-300",
  indigo: "text-indigo-300",
  violet: "text-violet-300",
  purple: "text-purple-300",
  fuchsia: "text-fuchsia-300",
  pink: "text-pink-300",
  rose: "text-rose-400",
};

interface HowMightWeSectionProps {
  problemStatement?: string;
  quoteText: string;
  problemCount?: number;
  highlightedText?: string[];
  highlightedColors?: string[]; // New prop for user-provided colors
  containerClass?: string;
  problemLabel?:string,
}

const HowMightWeSection: React.FC<HowMightWeSectionProps> = ({
  problemStatement,
  problemLabel="Workflow Problem.",
  quoteText,
  problemCount,
  highlightedText = [],
  highlightedColors = [],
  containerClass, // Assign default value as empty array
}) => {
  const highlightWords = (text: string): React.ReactNode => {
    const highlightedRegex = new RegExp(`\\b(${highlightedText.join('|')})\\b`, 'gi');
    const parts = text.split(highlightedRegex);

    return parts.map((part, index) => {
      const isHighlighted = highlightedText.some(
        highlighted => part.toLowerCase() === highlighted.toLowerCase()
      );

      if (isHighlighted) {
        // Check if there's a corresponding color for this highlight
        const colorIndex = highlightedText.findIndex(word => word.toLowerCase() === part.toLowerCase());
        const color = highlightedColors[colorIndex] || 'yellow'; // Default to yellow if color not provided
        const colorClassName = colorVariants[color] || ''; // Check if color exists in colorVariants
        return (
          <strong key={index} className={`${colorClassName} underline underline-offset-4`}>
            {part}
          </strong>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <section className={cn(`relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]`,containerClass)}>
      <blockquote className="text-xl font-light lg:text-3xl pl-8 border-l-2 ">
        {problemStatement && (
          <p className="pb-4 text-sm font-medium ">
            <strong className="text-sky-300">{problemLabel} {problemCount}:</strong>{' '}
            {problemStatement}
          </p>
        )}
        <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
          {highlightWords(quoteText)}
        </p>
      </blockquote>
    </section>
  );
};

export default HowMightWeSection;
