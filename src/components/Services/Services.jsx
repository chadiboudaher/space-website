import React from "react";
import { FaReact } from "react-icons/fa";
import { FaSatellite, FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/voice wave by Shubo✈.gif";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosdelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting earth and serves as a space enviroment research laboratory",
    icon: <FaSatellite className="text-7xl" />,
    aosdelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosdelay: "700",
  },
];
const Services = () => {
  return (
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
            {ServiceData.map((data, index) => (
              <div
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                key={index}
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
