// AnimationGrid.tsx
import React from "react";

import SectionTitle from "../../SectionTitle";
import { AnimationCard } from "./AnimationCard";

const tools = [
  {
    videoSrc: "/AnimationCard/DropInMiddle.webm",
    imageAlt: "Figma logo",
  },
  {
    videoSrc: "/AnimationCard/DropInMiddle.webm",
    imageAlt: "Figma logo",
  },
  {
    videoSrc: "/AnimationCard/DropInMiddle.webm",
    imageAlt: "Figma logo",
  },

];

const AnimationGrid: React.FC = () => {
  return (
    <>
      <SectionTitle
        containerClass="max-w-screen-lg mb-8"
        sectionID="recent-work"
        title="Motion and Interaction Design"
        subtitle="These are a few tools I use to create Designs, Research and Prototype products."
      />
      <div className="flex flex-wrap gap-4">
        {tools.map((tool, index) => (
          <AnimationCard
            key={index}
            videoSrc={tool.videoSrc}
          />
        ))}
      </div>
    </>
  );
};

export default AnimationGrid;
