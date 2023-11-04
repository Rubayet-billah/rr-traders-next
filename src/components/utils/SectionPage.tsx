const SectionPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[70vh] my-5 md:my-12 grid place-items-center">
      {children}
    </div>
  );
};

export default SectionPage;
