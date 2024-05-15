import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { housesData } from "../../../data";
import Carousel from "./Carousel";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className="min-h-screen">
      <section>
        <div className="container mx-auto mb-14">
          <div className="mb-3">
            <Link to="/" className=" bg-violet-400 px-5 py-2 text-white">
              &larr; Go back
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{house.name}</h2>
              <h3 className="mb-4 text-lg">{house.address}</h3>
            </div>
            <div className="mb-4 flex gap-x-2 text-sm lg:mb-0">
              <div className="rounded-full bg-green-500 px-3 text-white">
                {house.type}
              </div>
              <div className="rounded-full bg-violet-500 px-3 text-white">
                {house.country}
              </div>
            </div>
            <div className="text-3xl font-semibold text-violet-600">
              {house.price} birr
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <Carousel images={house.imageLg} />
              </div>
              <div className="mb-6 flex gap-x-6 text-violet-700">
                <div className="flex items-center gap-x-2">
                  <BiBed className="text-2xl " />
                  <div>{house.bedrooms}</div>
                </div>
                <div className="flex items-center gap-x-2">
                  <BiBath className="text-2xl " />
                  <div>{house.bathrooms}</div>
                </div>
                <div className="flex items-center gap-x-2">
                  <BiArea className="text-2xl " />
                  <div>{house.surface}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
            <div className="mb-8 w-full flex-1 rounded-lg border border-gray-300 bg-white px-6 py-8">
              <div className="mb-8 flex items-center gap-x-4">
                <div className="h-20 w-20 rounded-full border border-gray-300 p-1">
                  <img src={house.agent.image} alt={house.agent.name} />
                </div>
                <div>
                  <div className="text-lg font-bold">{house.agent.name}</div>
                  <Link to="" className="text-sm text-violet-700">
                    View Listing
                  </Link>
                </div>
              </div>
              <form className="flex flex-col gap-y-4">
                <input
                  className="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
                  type="text"
                  placeholder="Email*"
                />
                <input
                  className="h-14 w-full rounded border border-gray-300 px-4 text-sm outline-none focus:border-violet-700"
                  type="text"
                  placeholder="Phone*"
                />
                <textarea
                  className="h-36 w-full resize-none rounded border border-gray-300 p-4 text-sm text-gray-400 outline-none focus:border-violet-700"
                  placeholder="message*"
                ></textarea>
                <div>
                  <button className="w-full rounded bg-violet-700 p-4 text-sm text-white transition hover:bg-violet-800">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
