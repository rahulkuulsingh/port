// import React from "react";
// import { cn } from "../utils/cn";

// interface SectionTitleProps {
//   sectionID: string;
//   title?: string;
//   subtitle?: string;
//   subtitleColor?: string;
//   highlightTitle?: [string] | null | undefined;
//   customCode?: React.ReactNode;
// }

// export default function SectionTitle(props: SectionTitleProps) {
//   return (
//     <header className="max-w-3xl" id={props.sectionID}>
//       {props.subtitle && ( 
//         <p className={cn("text-sm font-medium text-transparent bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text", props.subtitleColor )}>
//           {props.subtitle}
//         </p>
//       )}
//       {props.subtitle && (
//         <h2 className="mt-4 text-balance text-3xl tracking-[-0.015em]">
//           {props.title}
//         </h2>
//       )}
//       {props.customCode}
//     </header>
//   );
// }


import React from "react";
import { cn } from "../utils/cn";
import { highlightWords } from "../utils/textHighlighter"; // Import the highlightWords function

interface SectionTitleProps {
  sectionID: string;
  title?: string;
  subtitle?: string;
  subtitleColor?: string;
  highlightTitle?: string[] | null | undefined; // Change the type to string[]
  customCode?: React.ReactNode;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <header className="max-w-3xl" id={props.sectionID}>
      {props.subtitle && ( 
        <p className={cn("text-sm font-medium text-transparent bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text", props.subtitleColor )}>
          {props.subtitle}
        </p>
      )}
      {props.title && (
        <h2 className="mt-4 text-balance text-2xl tracking-[-0.015em]">
          {props.highlightTitle ? highlightWords(props.title || '', props.highlightTitle, []) : props.title}
        </h2>
      )}
      {props.customCode}
    </header>
  );
}

