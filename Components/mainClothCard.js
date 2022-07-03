import Link from "next/link";
import Image from "next/image";
import TestImage from "../public/img/test-clotht-image.jpg";

export const MainClothCard = ({ img, content, price }) => {
  return (
    <div>
      <Link href="/">
        <a className="outline-none">
          <div className="flex flex-col gap-3">
            <div className="border-[3px] border-[#edf1f4] rounded-xl">
              <Image src={TestImage} />
            </div>
            <div>
              <h1 className="text-[14px] font-[500] text-[#252d3a]">
                {content}
              </h1>
              <span className="text-[14px] font-[500] text-[#252d3a]">
                {price}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};