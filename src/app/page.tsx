import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="container mx-auto px-5">
        <Banner />
        {/* <AboutUs /> */}
        <Categories />
        <FeaturedProducts />
        <Testimonials />
      </main>
    </main>
  );
}
