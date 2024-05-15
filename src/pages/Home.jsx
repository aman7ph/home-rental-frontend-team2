import React from "react";

import Cta from "../components/Cta";
import HouseList from "../features/houses/components/HouseList";
const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Cta />
      <HouseList />
    </div>
  );
};

export default Home;
