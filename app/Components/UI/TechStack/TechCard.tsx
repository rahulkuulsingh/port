"use client";
// import React from "react";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

interface TechCardProps {
  toolName: string;
  imageSrc: string;
  imageAlt: string;
  toolLabelClassName?: string;
  imageClassName?: string;
  cardClassName?: string;
  imageHeight?: number;
  imageWidth?: number;
  tooltipData?: string;
}

const TechCard: React.FC<TechCardProps> = ({
  toolName,
  imageSrc,
  imageAlt,
  toolLabelClassName,
  imageClassName,
  cardClassName,
  tooltipData,
  imageHeight = 200,
  imageWidth = 256,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div
        data-tooltip-id="techStackToolTip"
        data-tooltip-content={tooltipData}
        data-tooltip-offset="8"
        data-tooltip-delay-show={300}
        className={`w-24 h-24 flex flex-col rounded-lg overflow-hidden bg-[#171717] transition duration-300 ease-in-out transform hover:scale-110 p-2 ${cardClassName}`}
      >
        <div
          className={`w-full h-5/6  flex items-center justify-center ${imageClassName}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className="object-contain"
          />
        </div>
        <div
          className={`w-full h-2/6  flex items-center  text-xs	 justify-center ${toolLabelClassName}`}
        >
          <p className="text-center">{toolName}</p>
        </div>
      </div>

      {isClient && <Tooltip noArrow id="techStackToolTip" />}
    </>
  );
};

export default TechCard;
