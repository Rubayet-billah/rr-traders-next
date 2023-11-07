const BannerPage = () => {
  return (
    <div className="container mx-auto">
      <section className="grid lg:grid-cols-3 gap-12">
        <div className="row-span-2">
          <img
            src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_1_770x.png?v=1636529699"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-4xl uppercase">
            contemporary <br />
            <span className="text-6xl">mordern</span>
            <br /> tiles
          </h1>
        </div>
        <div>
          <img
            src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_2_1060x.png?v=1636529761"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://tileo-theme.myshopify.com/cdn/shop/files/tiles-v4_3_600x.png?v=1636529810"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default BannerPage;
