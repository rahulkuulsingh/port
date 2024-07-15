"use client";
import GrowthMetrics from "./grwothMetrics";
import Image from "next/image";
import Link from "next/link";
import CaseStudyButton from "./CaseStudyButton";

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
        className={`${cardClassName} rounded-lg shadow-xl overflow-clip bg-zinc-900`}
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
          <h2 className="mt-4 text-2xl font-light tracking-tight">{title}</h2>

          <CaseStudyButton />
        </div>
      </div>
    </Link>
  );
}
