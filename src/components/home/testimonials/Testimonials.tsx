import SectionHeading from "../../utils/SectionHeading";
import SectionPage from "../../utils/SectionPage";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div>
      <SectionHeading
        title="What Our Customers Say"
        subTitle="Read testimonials from satisfied customers"
      />
      <SectionPage>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </section>
      </SectionPage>
    </div>
  );
};

export default Testimonials;
