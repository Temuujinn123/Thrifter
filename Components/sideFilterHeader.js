import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SideFilterContent } from "./sideFilterContent";

export const SideFilterHeader = ({ title, data }) => {
  const [filterContentVisible, setFilterContentVisible] = useState(false);

  return (
    <div className="pb-3 bg-[#efefefd4] border-t border-[#8793ad]">
      <div
        className="flex justify-between items-center py-4 px-3 mb-[2px]"
        onClick={() => setFilterContentVisible(!filterContentVisible)}
      >
        <h1 className="text-[20px] font-bold tracking-[.025em] leading-[1.6] text-black">
          {title}
        </h1>
        <span
          className={`${
            filterContentVisible ? "rotate-180" : "rotate-0"
          } transition-[.5s] border border-[#ccc] rounded-full p-1`}
        >
          <IoIosArrowDown />
        </span>
      </div>
      <div
        className={`${
          filterContentVisible
            ? "h-fit opacity-1 visible transition-[.5s]"
            : "h-0 opacity-0 invisible"
        } flex flex-wrap px-2`}
      >
        {data.map((content, index) => (
          <SideFilterContent title={content} key={index} />
        ))}
      </div>
    </div>
  );
};
