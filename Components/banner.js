import Container from "./container";
import Button from "./button";
import { TextHighlighter } from "./textHighlighter";

export default function Banner() {
  return (
    <div className="h-screen banner-bg-image">
      <Container>
        <div className="h-full flex justify-center flex-col">
          <h1 className="text-[#252d3a] text-[42px] font-bold">
            Explore our huge range of <br /> quality second-hand fashion.
          </h1>
          <div className="flex gap-2 mt-8">
            <Button title="shop" />
            <Button title="sell" />
          </div>
        </div>
      </Container>
    </div>
  );
}
