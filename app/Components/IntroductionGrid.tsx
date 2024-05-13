import React from 'react';

interface IntroductionGridProps {
  title: string;
  subTitle: string;
  subTitleColor: string;
  description: string;
  roleContent: string[];
  teamContent: string[];
  timeline: string;
}

const IntroductionGrid: React.FC<IntroductionGridProps> = ({
  title,
  subTitle,
  subTitleColor,
  description,
  roleContent,
  teamContent,
  timeline,
}) => {
  return (
    <section className="hero-section mt-16 pb-32 pt-16 mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
      <div className="">
        <h2 className="pb-8 text-sm text-purple-500">{subTitle}</h2>
        <h1 className="max-w-4xl text-balance text-3xl/9 tracking-tight sm:text-5.5xl md:text-6xl">
          {title}
        </h1>
        <p className="max-w-md mt-4 text-gray-500 text-base/6">{description}</p>
      </div>
      <div className="my-role isolate mt-24 grid grid-cols-1 border border-white/[.075] sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative z-10 col-start-1 row-start-1 px-6 py-8">
          <h2 className="text-balance text-xl tracking-[-0.015em]">The Projects High Level Context</h2>
          <p className="mt-3 text-gray-400 text-sm/5">
            {roleContent[0]}
          </p>
        </div>
        <ul
          role="list"
          className="relative flex flex-wrap col-start-1 isolate col-span-full sm:row-start-1"
        >
          <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075] px-6 py-8 sm:ml-[50%] sm:w-1/2 sm:border-l sm:border-t-0 lg:ml-[25%] lg:w-1/4">
            <h3 className="mt-6 text-sm font-medium">My Role</h3>
            <p className="mt-2 mb-auto text-gray-400 text-sm/5">
              {roleContent[1]}
            </p>
          </li>
          <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 lg:w-1/4 lg:border-l lg:border-t-0">
            <h3 className="mt-6 text-sm font-medium">Team Structure</h3>
            <p className="mt-2 mb-auto text-gray-400 text-sm/5">
              {teamContent.join(', ')}
            </p>
          </li>
          <li className="flex w-full flex-none flex-col items-start border-t border-white/[.075]  px-6 py-8 sm:w-1/2 sm:border-l lg:w-1/4 lg:border-t-0">
            <h3 className="mt-6 text-sm font-medium">Project Timeline</h3>
            <p className="mt-2 mb-auto text-gray-400 text-sm/5">
              {timeline}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroductionGrid;
