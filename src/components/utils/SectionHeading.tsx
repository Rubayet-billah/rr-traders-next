import React from "react";

type IProps = {
  title: string;
  subTitle: string;
};

const SectionHeading = ({ title, subTitle }: IProps) => {
  return (
    <div className="text-center mt-5 md:my-12">
      <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold">
        {title}
      </h1>
      <p className="text-gray-800 md:text-lg mt-1 capitalize">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
