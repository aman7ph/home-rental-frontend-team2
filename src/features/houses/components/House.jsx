import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="mx-auto w-full max-w-[352px] cursor-pointer rounded-lg rounded-tl-[90px] bg-white p-5 shadow-1 transition hover:shadow-2xl">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="rounded-full bg-green-500 px-3 text-white">{type}</div>
        <div className="rounded-full bg-violet-500 px-3 text-white">
          {country}
        </div>
      </div>
      <div className="max-w-[260px] text-lg font-semibold">{address}</div>
      <div className="my-4 flex gap-x-4">
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="font mb-4 text-lg font-semibold text-violet-600">
        {price}
      </div>
    </div>
  );
};

export default House;
