import { ViewAll } from "./viewAll";
import { MainClothCard } from "./mainClothCard";
import { TextHighlighter } from "./textHighlighter";

export const HomeMarket = () => {
  return (
    <div className="px-10">
      <div className="mb-16 text-center">
        <h1 className="text-[#252d3a] pb-[30px] text-[26px] font-bold">
          Sizzling summer style <br /> at{" "}
          <TextHighlighter>low prices.</TextHighlighter>
        </h1>
        <div className="flex justify-center">
          <ViewAll link="/" />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-5">
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
      </div>
    </div>
  );
};
