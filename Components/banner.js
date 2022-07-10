import Image from "next/image";
import BannerImage from "../public/img/banner-image.webp";
import Container from "./container";
import Button from "./button";
import { TextHighlighter } from "./textHighlighter";
import { BannerTitle } from "./bannerTitle";

export default function Banner() {
  return (
    <div className="mb-[-6px] md:mb-0 md:h-screen banner-bg-image">
      <div className="block md:hidden">
        <Image className="" src={BannerImage} alt="" />
      </div>
      <Container>
        <div className="h-full justify-center flex-col hidden md:flex">
          <BannerTitle
            title={[
              "Explore our huge range of",
              <br key="1" />,
              "quality second-hand fashion.",
            ]}
          />
          <div className="flex gap-2 mt-8">
            <Button title="shop" />
            <Button title="sell" />
          </div>
        </div>
      </Container>
    </div>
  );
}
