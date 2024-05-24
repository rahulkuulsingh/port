"use client";
import Tag from "./tags";
import GrowthMetrics from "./grwothMetrics";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface Tag {
  link: string;
  label: string;
}

interface GrowthMetricsProps {
  growthValue: number;
  growthStatement: string;
}

interface CardProps {
  // tags: Tag[];
  title: string;
  role: string;
  projectDate: string;
  team: string;
  caseLink: string;
  containerclassName?: string;
  cardClassName?: string;
  showGrowthMetrics: boolean;
  cardImage: string;
}

export default function Card({
  // tags,
  title,
  role,
  projectDate,
  team,
  caseLink,
  containerclassName,
  cardClassName,
  showGrowthMetrics,
  cardImage,
}: CardProps) {
  return (
    <Link href={caseLink} passHref className={`${containerclassName}`}>
      <div
        className={`${cardClassName} rounded-lg bg-white shadow-xl overflow-clip dark:bg-zinc-900`}
      >
        <div className="overflow-hidden">
          <Image
            className="overflow-hidden card-image"
            src={cardImage}
            width={520}
            height={520}
            alt="Project featured Image describing the project"
          />
        </div>
        <div className="flex flex-col w-full px-4 py-8 pb-4">
          {/* <div className="tagCloud">
            {tags.map((tag, index) => (
              <Tag key={index} url={tag.link} label={tag.label} />
            ))}
          </div> */}
          <h2 className="mt-4 text-2xl font-light tracking-tight">{title}</h2>
          <div className="flex flex-col gap-1 mt-2 mb-8 text-xs text-gray-400">
            <p>Role: {role}</p>
            <p>Year: {projectDate}</p>
            <p>Team: {team}</p>
          </div>
          {showGrowthMetrics && (
            <div className="flex gap-4 mb-8 max-w-max">
              <GrowthMetrics
                growthValue={13}
                growthStatement={"increase in NPS score"}
              />
              <GrowthMetrics
                growthValue={7}
                growthStatement={"boost in product adoption"}
              />
              <GrowthMetrics growthValue={9} growthStatement={"rise in MRR"} />
            </div>
          )}

          <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50 text-xs max-w-max place-self-end">
            <span className="z-10 pr-2">View Case Study</span>
            <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
              <div className="mr-3.5 flex items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-neutral-50"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
}
