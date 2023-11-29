"use client";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import SectionHeading from "../../utils/SectionHeading";
import SectionPage from "../../utils/SectionPage";
import FeaturedProductCard from "./FeaturedProductCard";
import { IProduct } from "@/interfaces/common";

const FeaturedProducts = () => {
  const { data: productsData } = useGetAllProductsQuery({});
  return (
    <div>
      <SectionHeading
        title="Top Picks"
        subTitle="Freatured products on top sale"
      />
      <SectionPage>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12">
          {productsData?.data?.map((product: IProduct) => (
            <FeaturedProductCard key={product?.id} product={product} />
          ))}

          {/* <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard />
          <FeaturedProductCard /> */}
        </section>
      </SectionPage>
    </div>
  );
};

export default FeaturedProducts;
