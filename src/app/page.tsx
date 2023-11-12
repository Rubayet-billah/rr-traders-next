import AboutUs from "@/components/home/about/AboutUs";
import Banner from "@/components/home/banner/Banner";
import Categories from "@/components/home/categories/Categories";
import ContactUsPage from "@/components/home/contact/ContactUs";
import FeaturedProducts from "@/components/home/featured/FeaturedProducts";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <main>
        <Banner />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        <Testimonials />
        <ContactUsPage />
      </main>
    </main>
  );
}
