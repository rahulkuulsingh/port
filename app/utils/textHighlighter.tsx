// utils/textHighlighter.ts

const colorVariants: {[key: string]: string} = {
    gray: "text-gray-100",
    red: "text-red-300",
    orange: "text-orange-500",
    amber: "text-amber-300",
    yellow: "text-yellow-300",
    lime: "text-lime-300",
    green: "text-green-300",
    emerald: "text-emerald-300",
    teal: "text-teal-300",
    cyan: "text-cyan-300",
    blue: "text-blue-300",
    indigo: "text-indigo-300",
    violet: "text-violet-300",
    purple: "text-purple-300",
    fuchsia: "text-fuchsia-300",
    pink: "text-pink-300",
    rose: "text-rose-400",
  };
  
  export const highlightWords = (text: string, highlightedText: string[], highlightedColors: string[]): React.ReactNode => {
    const highlightedRegex = new RegExp(`\\b(${highlightedText.join('|')})\\b`, 'gi');
    const parts = text.split(highlightedRegex);
  
    return parts.map((part, index) => {
      const isHighlighted = highlightedText.some(
        highlighted => part.toLowerCase() === highlighted.toLowerCase()
      );
  
      if (isHighlighted) {
        const colorIndex = highlightedText.findIndex(word => word.toLowerCase() === part.toLowerCase());
        const color = highlightedColors[colorIndex] || 'yellow';
        const colorClassName = colorVariants[color] || '';
        return (
          <strong key={index} className={`${colorClassName} underline underline-offset-4`}>
            {part}
          </strong>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };