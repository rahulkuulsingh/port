"use client";
import Image from "next/image";
import Link from "next/link";
import CaseStudyButton from "./CaseStudyButton";

interface CardProps {
  title: string;
  caseLink: string;
  containerclassName?: string;
  cardClassName?: string;
  cardImage: string;
}

export default function Card({
  // tags,
  title,
  caseLink,
  containerclassName,
  cardClassName,

  cardImage,
}: CardProps) {
  return (
    <Link href={caseLink} passHref className={`${containerclassName}`}>
      <div
        className={`${cardClassName} rounded-lg shadow-xl overflow-clip bg-surface-primary bg-zinc-900`}
      >
        <div className="flex flex-col w-full px-4 py-8 pb-4 justify-between">
          <h2 className="mt-4 text-2xl font-light tracking-tight">{title}</h2>
          <CaseStudyButton />
        </div>
        <div className="overflow-hidden">
          <Image
            className="overflow-hidden card-image"
            src={cardImage}
            width={520}
            height={520}
            alt="Project featured Image describing the project"
          />
        </div>
      </div>
    </Link>
  );
}
