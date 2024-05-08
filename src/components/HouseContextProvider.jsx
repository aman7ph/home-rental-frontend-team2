import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, SetCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properies, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const listOfUniqueCountries = ["Location (any)", ...new Set(allCountries)];
    SetCountries(listOfUniqueCountries);
  }, []);

  useEffect(() => {
    const allProperies = houses.map((house) => {
      return house.type;
    });
    const listOfUniqueProperies = ["Location (any)", ...new Set(allProperies)];
    setProperties(listOfUniqueProperies);
  }, []);

  const HandleSearch = () => {
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const parsePriceRange = (priceValue) => {
      const [min, max] = priceValue.split(" - ");
      const maxPrice = max ? parseInt(max) : Infinity;
      const minPrice = parseInt(min.replace(/\D/g, ""));
      return { minPrice, maxPrice };
    };

    const newHouse = housesData.filter((house) => {
      const { minPrice, maxPrice } = parsePriceRange(price);
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return (
          house.country === country &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return (
          house.type === property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }
    });

    setHouses(newHouse);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        countries,
        property,
        properies,
        price,
        loading,
        setCountry,
        setProperty,
        setPrice,
        HandleSearch,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
