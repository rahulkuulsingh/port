import { Tag } from "./tags";
import GrowthMetrics from "./grwothMetrics";
import Image from "next/image";
import cardImage from "../public/image-side-by-side.png";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function Card({ ...props }) {
  return (
    <div className="card flex rounded-lg text-xs p-8 flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
      <Image
        className="card-image"
        src={cardImage}
        width={320}
        height={320}
        alt="Project featured Image describing the project"
      />
      <div className="card-details w-full">
        <div className="tagCloud">
          <Tag link={"https://example.com"} label={"B2B"} />
          <Tag link={"https://example.com"} label={"SASS"} />
          <Tag link={"https://example.com"} label={"Marketing Automation"} />
        </div>
        <h2 className="card-title leading-9	">{props.title}</h2>
        <div className="project-meta-details">
          <p className="role">Role: {props.role}</p>
          <p className="projectDate">Year: {props.projectDate}</p>
          <p className="team">Team: {props.team}</p>
        </div>
        <div className="flex flex-row justify-between">
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
        <Link
          className="flex p-3 pl-6 bg-gray-300 w-fit self-end rounded-lg"
          href={props.link}
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
