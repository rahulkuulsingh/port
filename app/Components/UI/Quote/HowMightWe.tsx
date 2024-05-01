import React from 'react';

interface HowMightWeSectionProps {
  problemStatement?: string;
  quoteText: string;
  problemCount?: number;
}

const HowMightWeSection: React.FC<HowMightWeSectionProps> = ({
  problemStatement,
  quoteText,
  problemCount,
}) => {
  return (
    <section className="relative mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
      <blockquote className="text-xl font-light lg:text-3xl pl-8 border-l-2 ">
        {problemStatement && (
          <p className="pb-4 text-sm font-medium ">
            <strong className="text-sky-300">Workflow Problem.{" "}{problemCount}:</strong> {problemStatement}
          </p>
        )}
        <p className="relative before:absolute before:right-full before:top-0 before:content-['“'] after:content-['”']">
          {quoteText}
        </p>
      </blockquote>
    </section>
  );
};

export default HowMightWeSection;
