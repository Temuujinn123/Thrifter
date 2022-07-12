import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const ClothCard = ({ img, title, price, href }) => {
  const [isHeartCLicked, setIsHeartCLicked] = useState(false);

  return (
    <div className="relative my-[15px] mx-[.99%] border-2 border-[#eef1f4] rounded-[12px] inline overflow-hidden w-[48%] h-auto md:h-[440px] md:w-[31.3%] transition-[.5s] hover:shadow-xl">
      <div className="max-w-full h-[276px] relative">
        <Link href={href}>
          <a className="w-full h-full flex justify-center items-center">
            <Image src={img} alt="" width="100%" height="100%" />
          </a>
        </Link>
      </div>
      <div className="text-center mt-1 py-[10px] px-[15px] bg-white w-full">
        <Link href={href}>
          <a className="bg-transparent text-center text-[#666] text-[.87em] leading-[1.3em]">
            {title}
          </a>
        </Link>
        <div className="w-full mt-1">
          <Link href={href}>
            <a className="text-[1.2em] text-[#666] font-medium text-center">
              {price}
            </a>
          </Link>
        </div>
        <button
          className="absolute top-1 right-1 text-xl p-5 bg-[rgba(255,255,255,.8)] cursor-pointer flex justify-center items-center before:absolute before:top-[11px] before:right-[12px] before:rounded-full before:w-[calc(100%-24px)] before:h-[calc(100%-24px)] before:bg-[#f2e7e2] before:z-0"
          onClick={() => setIsHeartCLicked(!isHeartCLicked)}
        >
          <span className="relative z-10 text-[#d76a3b]">
            <AiFillHeart className={`${isHeartCLicked ? "block" : "hidden"}`} />
            <AiOutlineHeart
              className={`${isHeartCLicked ? "hidden" : "block"}`}
            />
          </span>
        </button>
      </div>
    </div>
  );
};
