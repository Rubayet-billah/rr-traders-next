"use client";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import SectionHeading from "../../utils/SectionHeading";
import SectionPage from "../../utils/SectionPage";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data: categoriesData } = useGetAllCategoriesQuery();
  return (
    <div>
      <SectionHeading
        title="Categories"
        subTitle="Choose desire Product From the categories"
      />
      <SectionPage>
        <section className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {categoriesData?.data?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
          {/* <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard /> */}
        </section>
      </SectionPage>
    </div>
  );
};

export default Categories;
