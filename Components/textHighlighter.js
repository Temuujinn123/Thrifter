export const TextHighlighter = ({ children, mdNone }) => {
  return (
    <span className={`${mdNone ? "md:text-highligth" : "text-highligth"}`}>
      {children}
    </span>
  );
};
