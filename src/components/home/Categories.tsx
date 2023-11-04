import SectionHeading from "../utils/SectionHeading";
import SectionPage from "../utils/SectionPage";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div>
      <SectionHeading
        title="Categories"
        subTitle="Choose desire Product From the categories"
      />
      <SectionPage>
        <section className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-6">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </section>
      </SectionPage>
    </div>
  );
};

export default Categories;
