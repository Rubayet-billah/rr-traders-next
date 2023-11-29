import { IProduct } from "@/interfaces/common";

type IFeaturedProductCardProps = {
  product: IProduct;
};

const FeaturedProductCard = ({ product }: IFeaturedProductCardProps) => {
  const {
    name,
    image,
    description,
    price,
    // Add other properties from the IProduct interface as needed
  } = product;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded shadow hover:scale-[102%] duration-200 dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t" src={image || ""} alt={`Product: ${name}`} />
      <div className="px-5 pb-5">
        <div className="relative">
          <h5
            className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5 hover:text-blue-800 hover:underline duration-100 cursor-pointer"
            title="View Details"
          >
            {name}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        {/* The rest of your card content using the product's properties */}
        {/* ... */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 uppercase"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
