import React from 'react';
import { cn } from '@/app/utils/cn';
import { highlightWords } from '@/app/utils/textHighlighter'; // Import the highlightWords function

interface HowMightWeSectionProps {
  problemStatement?: string;
  quoteText: string;
  problemCount?: number;
  highlightedText?: string[];
  highlightedColors?: string[];
  containerClass?: string;
  problemLabel?: string;
}

const HowMightWeSection: React.FC<HowMightWeSectionProps> = ({
  problemStatement,
  problemLabel = "Workflow Problem.",
  quoteText,
  problemCount,
  highlightedText = [],
  highlightedColors = [],
  containerClass,
}) => {

  return (
    // <section className={cn(`relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]`, containerClass)}>
      <blockquote className={cn("text-xl font-light lg:text-3xl pl-8 border-l-2 ", containerClass)}>
        {problemStatement && (
          <p className="pb-4 text-sm font-medium ">
            <strong className="text-sky-300">{problemLabel} {problemCount}:</strong>{' '}
            {problemStatement}
          </p>
        )}
        <h3 className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
          {highlightWords(quoteText, highlightedText, highlightedColors)} {/* Use the highlightWords function */}
        </h3>
      </blockquote>
    // </section>
  );
};

export default HowMightWeSection;
