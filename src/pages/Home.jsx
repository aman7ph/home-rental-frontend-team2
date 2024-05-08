import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Cta from "../components/Cta";
import HouseList from "../components/HouseList";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[1800px]">
        <Cta />
        <HouseList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
