import Image from "next/image";
import sanitaryImage from "../../assests/sanitary-item-image.jpg";
import rodImage from "../../assests/iron-rod-image.jpeg";
import roofingTinImage from "../../assests/roofing-tin.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-3 gap-12">
        <div className="lg:row-span-2">
          <Image
            src={sanitaryImage}
            // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_1_770x.png?v=1636529699"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 grid place-items-center">
          <h1 className="text-2xl lg:text-4xl uppercase">
            <span className="">Quality Construction</span> <br />
            <span className="lg:ml-20 lg:text-3xl text-gray-400">
              Materials by
            </span>
            <br />
            <span className="text-4xl lg:text-6xl font-bold lg:ml-36 text-red-500">
              RR Traders
            </span>
          </h1>
        </div>
        <div>
          <Image
            src={rodImage}
            // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_2_1060x.png?v=1636529761"
            alt=""
            height={600}
            width={1000}
          />
        </div>
        <div>
          <Image
            src={roofingTinImage}
            // src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_3_600x.png?v=1636529810"
            alt=""
            height={600}
            width={1000}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
