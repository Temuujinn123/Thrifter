import { useRouter } from "next/router";
import Button from "../../Components/button";
import Container from "../../Components/container";
import { Footer } from "../../Components/footer";
import Header from "../../Components/header";
import { SectionPara } from "../../Components/sectionParagraph";
import { AiFillCaretDown } from "react-icons/ai";
import { Filter } from "../../Components/filter";

const Gender = () => {
  const router = useRouter();
  const { gender } = router.query;

  return (
    <>
      <Header normal />
      <div className="mt-10">
        <Container>
          <div className="after:flex after:h-[5px] after:w-full after:border-b after:border-[#ccc] px-5">
            <div className="mb-5 flex gap-1">
              <Filter />
              <Button normal title="Sort" icon={AiFillCaretDown} />
            </div>
            <div>
              <span className="uppercase text-left text-[#252d3a] font-medium text-[13.6px]">
                20000 results
              </span>
            </div>
          </div>
          <div className="mt-7"></div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Gender;
