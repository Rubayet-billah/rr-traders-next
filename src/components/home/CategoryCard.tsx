"use client";
import { Card } from "flowbite-react";

const CategoryCard = () => {
  const categoryImage =
    "https://loowera.com/uploads/media/o_1h5n47fr2p4ike51bkhk0v14s8a.jpg"; // Replace with your image URL
  const categoryName = "Sanitary"; // Replace with your category name

  return (
    <>
      {/* <Card
        className="max-w-sm hover:scale-[102%] duration-200 rounded"
        imgSrc={categoryImage}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sanitary
        </h5>
        <div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Luxurious and Fasionable Sanitary Wares
          </p>
        </div>
      </Card> */}

      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row md:max-w-xl hover:scale-[102%] duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l"
          src="https://loowera.com/uploads/media/o_1h5n47fr2p4ike51bkhk0v14s8a.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sanitary
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Luxurious and Fasionable Sanitary Wares
          </p>
        </div>
      </a>
    </>
  );
};

export default CategoryCard;
