export const SectionPara = ({ children, className }) => {
  return (
    <p
      className={`${
        className ? className : "text-[18px] leading-[28px] pt-[16px]"
      } text-center`}
    >
      {children}
    </p>
  );
};
