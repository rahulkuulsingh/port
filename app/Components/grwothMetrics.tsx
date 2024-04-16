import {ArrowUpRightIcon} from '@heroicons/react/24/outline'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({ weight: '400', subsets: ['latin'] }, );


export default function GrowthMetrics({ ...props }) {
  return (
    <div className="growth-metrics">
      <div className="growth-value">
        <p className={`${mono.className} text-2xl`}>{props.growthValue}%</p><ArrowUpRightIcon className="ml-2" width={24} height={24} stroke="#00FF9F"/></div>
      <p className={`${mono.className} text-l uppercase`}>{props.growthStatement}</p>
    </div>
  );
}


