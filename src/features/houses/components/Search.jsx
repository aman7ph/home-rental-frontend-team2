import React, { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";

import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import CountryDropdown from "./CountryDropdown";

import { HouseContext } from "../HouseContextProvider";

const Search = () => {
  const { HandleSearch } = useContext(HouseContext);
  return (
    <div className="mx-w-[1170px] relative mx-auto flex flex-col justify-between gap-4 rounded-lg bg-white px-[30px] py-6 lg:-top-4 lg:flex-row lg:gap-x-3 lg:bg-transparent lg:shadow-1 lg:backdrop-blur">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => HandleSearch()}
        className="flex h-16 w-full items-center justify-center rounded-lg bg-violet-700 text-lg text-white transition hover:bg-violet-800 lg:max-w-[162px]"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
