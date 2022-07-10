import Link from "next/link";

export default function Button({ className, title, font, sm }) {
  return (
    <Link href="/">
      <a
        className={`${className} text-[14px] md:text-[16px] font-[${
          font ? font : "600"
        }] md:w-[175px] h-auto md:h-[55px] text-white px-[5px] md:px-[20px] ${
          sm ? "py-[14px]" : "py-[12px] md:pt-[18px] md:pb-[11px]"
        } bg-[#e66328] md:min-w-auto tracking-[.5px] text-center uppercase rounded-sm relative overflow-hidden button-anime`}
      >
        {title}
      </a>
    </Link>
  );
}
