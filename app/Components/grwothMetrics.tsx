import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export default function GrowthMetrics({ ...props }) {
  return (
    <div className="flex flex-col text-gray-400 max-w-max">
      <div className="flex items-center gap-1 mb-2">
        <p className={`${mono.className} text-base`}>{props.growthValue}%</p>
        <ArrowUpRightIcon
          width={16}
          height={16}
        />
      </div>
      <p className={`${mono.className} text-xs capitalize` }>
        {props.growthStatement}
      </p>
    </div>
  );
}
