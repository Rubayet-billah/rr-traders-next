const SectionPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-5 md:my-12 grid place-items-center container mx-auto px-5">
      {children}
    </div>
  );
};

export default SectionPage;
