import React from "react";
import { cn } from "../utils/cn";
import { highlightWords } from "../utils/textHighlighter"; // Import the highlightWords function

interface SectionTitleProps {
  containerClass?:string;
  sectionID: string;
  title?: string;
  subtitle?: string;
  subtitleColor?: string;
  highlightTitle?: string[] | null | undefined; // Change the type to string[]
  customCode?: React.ReactNode;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <header className={cn("max-w-3xl", props.containerClass )}  id={props.sectionID}>
      {props.subtitle && ( 
        <p className={cn("text-sm font-medium text-gray-400", props.subtitleColor )}>
          {props.subtitle}
        </p>
      )}
      {props.title && (
        <h2 className="text-balance text-2xl tracking-[-0.015em]">
          {props.highlightTitle ? highlightWords(props.title || '', props.highlightTitle, []) : props.title}
        </h2>
      )}
      {props.customCode}
    </header>
  );
}

