export const SectionTitle = ({ children, sm }) => {
  return (
    <h1
      className={`${
        sm ? "text-[28px] leading-[38px]" : "text-[32px] leading-[39px]"
      }  font-bold text-center tracking-[.02em]`}
    >
      {children}
    </h1>
  );
};
