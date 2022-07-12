import { useState } from "react";

export const SideFilterContent = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const CheckboxHandler = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <>
      <div className="rounded-[10px] py-1 px-2 border border-[#ccc] m-1 bg-transparent block md:hidden">
        <span className="text-[13.6px] tracking-[.025em] leading-[1.6] text-[#252d3a]">
          {title}
        </span>
      </div>
      <li className="pb-[.6em]">
        <label
          className={`${
            isChecked
              ? "font-bold hover:text-[#0654ba]"
              : "font-[400] hover:text-black"
          } text-[smaller] tracking-[.025em] leading-[1.6] text-[#252d3a] flex gap-1 cursor-pointer transition-[.3s]`}
        >
          <input
            type="checkbox"
            className="appearance-none"
            onClick={CheckboxHandler}
          />
          {title}
          <span className="font-[400] text-[1em] initial text-[#ccc]">
            (1413)
          </span>
        </label>
      </li>
    </>
  );
};
