import Head from "next/head";
import Header from "../Components/header";
import Container from "../Components/container";
import Banner from "../Components/banner";
import { HomeMarket } from "../Components/homeMarket";
import { Section } from "../Components/section";
import { TextHighlighter } from "../Components/textHighlighter";
import { CgTimer } from "react-icons/cg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thrifter</title>
      </Head>
      <Header />
      <Banner />
      <div className="mt-20"></div>
      <Container>
        <HomeMarket />
      </Container>
      <Section>
        <Container>
          <div>
            <div>
              <h1 className="text-[28px] leading-[38px] font-bold text-center">
                Make <TextHighlighter>Second-Hand</TextHighlighter> Your First
                Choice
              </h1>
              <p className="text-[18px] leading-[28px] pt-[16px] text-center">
                We have over 250,000 quality-assured second-hand items in stock,
                with fast delivery and 30 day returns.
              </p>
            </div>
            <div className="flex justify-around pt-[35px]">
              <span className="text-[3rem] text-[#e66328]">
                <CgTimer className="mx-auto" />
                <p className="pt-[14px] text-[14px] font-[500] leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
                  Fast delivery
                </p>
              </span>
              <span className="text-[3rem] text-[#e66328]">
                <CgTimer className="mx-auto" />
                <p className="pt-[14px] text-[14px] font-[500] leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
                  Fast delivery
                </p>
              </span>
              <span className="text-[3rem] text-[#e66328]">
                <CgTimer className="mx-auto" />
                <p className="pt-[14px] text-[14px] font-[500] leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
                  Fast delivery
                </p>
              </span>
              <span className="text-[3rem] text-[#e66328]">
                <CgTimer className="mx-auto" />
                <p className="pt-[14px] text-[14px] font-[500] leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
                  Fast delivery
                </p>
              </span>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
