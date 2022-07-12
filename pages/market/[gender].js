import { useRouter } from "next/router";
import Button from "../../Components/button";
import Container from "../../Components/container";
import { Footer } from "../../Components/footer";
import Header from "../../Components/header";
import { SectionPara } from "../../Components/sectionParagraph";
import { AiFillCaretDown } from "react-icons/ai";
import { Filter } from "../../Components/filter";
import { ClothCard } from "../../Components/clothCard";
import { SideFilterHeader } from "../../Components/sideFilterHeader";

import { ClothCardData } from "../../dummyData/clothCard";
import { FilterData } from "../../dummyData/filter";
import { useState } from "react";

const Gender = () => {
  const router = useRouter();
  const { gender } = router.query;

  const [isSortClicked, setIsSortClicked] = useState(false);

  return (
    <>
      <Header normal />
      <div className="mt-10 md:mt-[110px]">
        <Container>
          <div className="mt-7"></div>
          <div className="flex gap-4">
            <div className="hidden md:block pt-[1em] w-3/12">
              {FilterData.map((data, index) => (
                <SideFilterHeader
                  key={index}
                  title={data.title}
                  data={data.content}
                />
              ))}
            </div>
            <div className="w-full">
              <div className="after:flex after:h-[5px] after:w-full after:border-b after:border-[#ccc] px-5 md:px-0">
                <div className="mb-5 flex md:items-center gap-1 md:mb-1 float-none md:float-right">
                  <Filter />
                  <span className="text-[.8em] font-medium hidden md:block">
                    Sort by:
                  </span>
                  <Button
                    onclick={() => setIsSortClicked(!isSortClicked)}
                    normal
                    title="Sort"
                    icon={AiFillCaretDown}
                  >
                    <div
                      className={`${
                        isSortClicked ? "block" : "hidden"
                      } absolute w-full top-[100%] left-0`}
                    >
                      Hello
                    </div>
                  </Button>
                </div>
                <div>
                  <span className="uppercase text-left text-[#252d3a] font-medium text-[13.6px] md:text-[16px] md:leading-[1.6]">
                    20000 results
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap">
                {ClothCardData.map((data, index) => (
                  <ClothCard
                    img={data.img}
                    title={data.title}
                    price={data.price}
                    href={data.href}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Gender;
