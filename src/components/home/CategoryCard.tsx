"use client";
import { Card } from "flowbite-react";

const CategoryCard = () => {
  const categoryImage =
    "https://loowera.com/uploads/media/o_1h5n47fr2p4ike51bkhk0v14s8a.jpg"; // Replace with your image URL
  const categoryName = "Sanitary"; // Replace with your category name

  return (
    <Card
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
    </Card>
  );
};

export default CategoryCard;
