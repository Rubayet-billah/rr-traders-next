import Image from "next/image";
import SectionHeading from "../utils/SectionHeading";
import SectionPage from "../utils/SectionPage";
import AboutUsImage from "../../assests/about-us.png";

const AboutUs = () => {
  return (
    <div>
      <SectionHeading
        title="About Us"
        subTitle="Know Us, our journeys and motivations"
      />
      <SectionPage>
        <section className="">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At RR Traders, we are committed to providing high-quality
                  construction items to our customers. Our journey began in{" "}
                  <span className="font-bold">2001 </span>
                  when <span className="font-bold">Md Baqui Billah</span>{" "}
                  founded the shop with a vision to distribute quality product
                  in the local area. Since then, we have been dedicated to
                  offering a wide range of construction materials and equipment
                  that meet the needs of both professionals and DIY enthusiasts.
                </p>
              </div>
              <div>
                <Image
                  src={AboutUsImage}
                  alt="About Us"
                  height={300}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
      </SectionPage>
    </div>
  );
};

export default AboutUs;
