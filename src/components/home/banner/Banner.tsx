import Image from "next/image";
import sanitaryImage from "../../../assests/sanitary-item-image.jpg";
import rodImage from "../../../assests/iron-rod-image.jpeg";
import roofingTinImage from "../../../assests/roofing-tin.jpg";
import bgImage from "../../../assests/banner-bg.png";

const Banner = () => {
  return (
    <div
      className="relative bg-[#434e57] py-12 pb-64"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
      }}
    >
      <div className="container mx-auto">
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:row-span-2">
            <Image
              className="brightness-90"
              src={sanitaryImage}
              // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_1_770x.png?v=1636529699"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 grid place-items-center text-white leading-10">
            <h1 className="text-2xl lg:text-4xl uppercase text-white ">
              <span className=" text-white">Quality Construction</span> <br />
              <span className="lg:ml-20 lg:text-3xl text-white">
                Materials by
              </span>
              <br />
              <span className="text-4xl lg:text-6xl font-bold lg:ml-36 text-white">
                RR Traders
              </span>
            </h1>
          </div>
          <div>
            <Image
              className="brightness-75"
              src={rodImage}
              // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_2_1060x.png?v=1636529761"
              alt=""
              height={600}
              width={1000}
            />
          </div>
          <div>
            <Image
              className="brightness-75"
              src={roofingTinImage}
              // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_3_600x.png?v=1636529810"
              alt=""
              height={600}
              width={1000}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
