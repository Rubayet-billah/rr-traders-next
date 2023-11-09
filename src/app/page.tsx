import BannerPageExtra from "@/components/extra/BannerPageExtra";
import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import ContactUsPage from "@/components/home/ContactUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="container mx-auto px-5">
        <Banner />
        {/* <BannerPageExtra /> */}
        <AboutUs />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <ContactUsPage />
      </main>
    </main>
  );
}
