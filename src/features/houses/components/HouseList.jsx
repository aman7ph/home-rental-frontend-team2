import React, { useContext } from "react";
import { HouseContext } from "../HouseContextProvider";
import { Link } from "react-router-dom";

import House from "./House";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto mt-[200px] animate-spin text-4xl text-violet-700" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="mt-48 text-center text-3xl text-gray-400">
        Soory, nothing found
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property-detail/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
