export const AdvantageSide = ({ icon, title }) => {
  return (
    <span className="text-[3rem] text-[#e66328]">
      <div className="flex justify-center">{icon()}</div>
      <p className="pt-[14px] text-[14px] font-[500] leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
        {title}
      </p>
    </span>
  );
};
