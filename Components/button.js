import Link from "next/link";

export default function Button({ title, font, sm }) {
  return (
    <Link href="/">
      <a
        className={`text-[16px] font-[${
          font ? font : "600"
        }] w-[175px] h-[55px] text-white px-[20px] ${
          sm ? "py-[14px]" : "pt-[18px] pb-[11px]"
        } bg-[#e66328] tracking-[.5px] text-center uppercase rounded-sm relative overflow-hidden button-anime`}
      >
        {title}
      </a>
    </Link>
  );
}
