import React from "react";

import Image from "../assets/img/house-banner.png";

import Search from "../components/Search";

const Cta = () => {
  return (
    <section className="mb-8 h-full max-h-[640px] xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg-px-0 flex flex-1 flex-col items-center justify-center px-4 text-center lg:ml-8 lg:items-start lg:text-left xl:ml-[135px]">
          <h1 className="mb-6 text-4xl font-semibold leading-none lg:text-[58px]">
            <span className="text-violet-700">Rent </span>
            Your Dream House With us.
          </h1>
          <p className="mb-8 max-w-[480px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            atque modi impedit molestias, ea accusamus aliquam repudiandae
            quisquam consectetur dolorum, rerum esse animi perspiciatis ratione
            unde? Perspiciatis voluptates fuga nisi?
          </p>
        </div>
        <div className="hidden flex-1 items-end justify-end lg:flex">
          <img src={Image} alt="kray" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Cta;
