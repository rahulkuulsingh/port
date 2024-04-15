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
  tags: Tag[];
  title: string;
  role: string;
  projectDate: string;
  team: string;
  caseLink: string;
  className?: string;
  showGrowthMetrics: boolean;
  cardImage: string;
}

export function Card({
  tags,
  title,
  role,
  projectDate,
  team,
  caseLink,
  className,
  showGrowthMetrics,
  cardImage,
}: CardProps) {
  return (
    <div
      className={`${className} card flex flex-col gap-4 rounded-lg bg-zinc-900 text-xs`}
    >
      <div className="media-container">
        <Image
          className="card-image"
          src={cardImage}
          width={520}
          height={520}
          alt="Project featured Image describing the project"
        />
      </div>
      <div className="card-details w-full py-8 px-4 pb-4">
        <div className="tagCloud">
          {tags.map((tag, index) => (
            <Tag key={index} url={tag.link} label={tag.label} />
          ))}
        </div>
        <h2 className="card-title leading-9	">{title}</h2>
        <div className="project-meta-details">
          <p className="role">Role: {role}</p>
          <p className="projectDate">Year: {projectDate}</p>
          <p className="team">Team: {team}</p>
        </div>
        {showGrowthMetrics && ( // Conditionally render GrowthMetrics
          <div className="flex flex-row justify-between pt-12">
            <GrowthMetrics
              growthValue={13}
              growthStatement={"INCREASE IN NPS score"}
            />
            <GrowthMetrics
              growthValue={7}
              growthStatement={"BOOST IN product adoption"}
            />
            <GrowthMetrics growthValue={9} growthStatement={"RISE in MRR"} />
          </div>
        )}
        <Link
          className="flex p-3 pl-6 bg-gray-300 w-fit self-end rounded-lg items-center dark:bg-zinc-950 focus:ring focus:ring-violet-300 hover:bg-sky-700	"
          href={String(caseLink)}
        >
          View Case Study
          <ArrowRightIcon
            className="ml-2"
            width={24}
            height={24}
            stroke="#00FF9F"
          />
        </Link>
      </div>
    </div>
  );
}
