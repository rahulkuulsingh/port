"use-client"

import { cn } from "@/app/utils/cn";


interface FolderProps {
  listItems: string[];
  bgColor: string;
  strokeColor:string;
  folderName: string;
  containerClassName?:string;
}

export default function Folder({
  folderName,
  bgColor,
  listItems,
  strokeColor,
  containerClassName,
}: FolderProps) {
  return (
    <>
      <div className={cn("folder-container flex flex-col items-start", containerClassName) }>
        <div
          className={`folder-name flex justify-center items-center p-2 gap-2 w-[158] h-7 ${bgColor} rounded-t-lg text-black`}
        >
          {folderName}
        </div>
        <ul
          className={`${strokeColor} folder-issues flex flex-col items-start p-2 gap-2  border-2 rounded-b-lg rounded-tr-lg h-full w-full`}
        >
          {listItems.map((item, index) => (
            <li
              key={index}
              className="item-issue flex justify-center items-center p-2 gap-2 bg-[#202020]/[0.5] rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
