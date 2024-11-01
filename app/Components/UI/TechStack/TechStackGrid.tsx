// TechStackGrid.tsx
import React from "react";
import TechCard from "./TechCard";
import SectionTitle from "../../SectionTitle";

const tools = [
  {
    toolName: "Figma",
    imageSrc: "/techStackImages/Figma.png",
    imageAlt: "Figma logo",
    tooltipData: "Design and Prototype"
  },
  {
    toolName: "Adobe XD",
    imageSrc: "/techStackImages/XD.png",
    imageAlt: "Adobe XD logo",
    tooltipData: "Design and Prototype"
  },
  {
    toolName: "Axure",
    imageSrc: "/techStackImages/Axure.png",
    imageAlt: "Axure logo",
    tooltipData: "Design and Prototype"
  },
  {
    toolName: "Framer",
    imageSrc: "/techStackImages/Framer.png",
    imageAlt: "Framer logo",
    tooltipData: "Interaction & Motion Design"
  },
  {
    toolName: "Maze",
    imageSrc: "/techStackImages/Maze.png",
    imageAlt: "Maze logo",
    tooltipData: "Research Documentation"
  },
  {
    toolName: "Dovetail",
    imageSrc: "/techStackImages/Dovetail.png",
    imageAlt: "Dovetail logo",
    tooltipData: "Research Documentation"
  },
  {
    toolName: "Fullstory",
    imageSrc: "/techStackImages/Fullstory.png",
    imageAlt: "Fullstory logo",
    tooltipData: "Quantitative & Qualitative Research"
  },
  {
    toolName: "Jira",
    imageSrc: "/techStackImages/Jira.png",
    imageAlt: "Jira logo",
    tooltipData: "Product Management"
  },
  {
    toolName: "Lottie",
    imageSrc: "/techStackImages/Lottie.png",
    imageAlt: "Lottie logo",
    tooltipData: "Motion & Animation"
  },
  {
    toolName: "After Effects",
    imageSrc: "/techStackImages/AE.png",
    imageAlt: "After Effects logo",
    tooltipData: "Motion & Animation"
  },
  {
    toolName: "Sketch",
    imageSrc: "/techStackImages/Sketch.png",
    imageAlt: "Sketch logo",
    tooltipData: "Product & Prototype"
  },
  {
    toolName: "Miro",
    imageSrc: "/techStackImages/Miro.png",
    imageAlt: "Miro logo",
    tooltipData: "Mind Mapping & Workshops"
  },
];

const TechStackGrid: React.FC = () => {
  return (
    <>
      <SectionTitle
        containerClass="max-w-screen-lg mb-8"
        sectionID="recent-work"
        title="Tools and Softwares"
        subtitle="These are a few tools I use to Designs, Research and Prototype."
      />
      <div className="flex flex-wrap gap-4">
        {tools.map((tool, index) => (
          <TechCard
            key={index}
            toolName={tool.toolName}
            imageSrc={tool.imageSrc}
            imageAlt={tool.imageAlt}
            tooltipData={tool.tooltipData}
          />
        ))}
      </div>
    </>
  );
};

export default TechStackGrid;
