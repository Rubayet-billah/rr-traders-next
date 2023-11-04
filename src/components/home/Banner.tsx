"use client";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateSearchQuery } from "@/redux/features/filterSlice";
import { useRouter } from "next/navigation";
import bannerImage from "../../assests/banner-image.png";
import Image from "next/image";
import SectionPage from "../utils/SectionPage";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = () => {
    // dispatch(updateSearchQuery(searchQuery));
    router.push("/shop"); // Adjust the route to your shop page.
  };

  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SectionPage>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
        <div className="flex place-items-center">
          <div>
            <h1 className="text-xl text-center md:text-left md:text-3xl lg:text-5xl font-bold">
              Your One-Stop Shop for Construction Items
            </h1>
            <div className="bg-base-200 mt-5 p-4 rounded flex gap-3">
              <input
                className="input input-sm w-full rounded-sm"
                type="text"
                placeholder="Search for construction items"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button
                onClick={() => handleSearch()}
                className="btn btn-warning btn-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={bannerImage}
            className="mx-auto"
            height={500}
            width={500}
            alt="street-food"
          />
        </div>
      </section>
    </SectionPage>
  );
};

export default Banner;
