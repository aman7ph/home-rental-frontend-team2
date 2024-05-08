import React, { useContext, useState } from "react";

import { HouseContext } from "./HouseContextProvider";

import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

const prices = [
  { value: "Price range (any)" },
  { value: "5000 - 8000" },
  { value: "8000 - 11000" },
  { value: "11000 - 13000" },
  { value: "13000 - 16000" },
  { value: "16000 - 19000" },
  { value: "19000 - 21000" },
  { value: "21000 - 23000" },
  { value: "23000 - 26000" },
  { value: "26000 - 29000" },
  { value: "29000 < " },
];

import { Menu } from "@headlessui/react";

const PriceRangeDropdown = () => {
  const { setPrice, price } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]"> Choose your Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              onClick={() => setPrice(price.value)}
              className="cursor-pointer transition hover:text-violet-700"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
