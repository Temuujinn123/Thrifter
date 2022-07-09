import Image from "next/image";
import Button from "./button";

export const SectionCard = ({ title, bg }) => {
  return (
    <div
      className={`rounded-xl bg-cover bg-no-repeat bg-center relative md:h-[285px] w-full h-auto flex justify-center items-center image`}
    >
      <style jsx>{`
        .image {
          background-image: url(${bg});
        }
      `}</style>
      <Button title={title} font="400"></Button>
    </div>
  );
};
