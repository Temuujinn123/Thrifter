export default function Container({ children }) {
  return (
    <div className="container mx-auto 2xl-max-w-[1280px] h-full">
      {children}
    </div>
  );
}
