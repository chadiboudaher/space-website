import React from "react";
import satelliteImg from "../../assets/satellite1.png";

const Banner = () => {
  return (
    <div>
      <div className="w-full bg-black text-white pb-12 relative z-50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center">
              <img src={satelliteImg} alt="" />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 text-center sm:text-start">
              <p className="text-sky-800 uppercase">Our Mission</p>
              <h1 className="uppercase text-5xl">Rapicast</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem obcaecati excepturi incidunt deleniti aut
                architecto, nobis maxime illo culpa eligendi laborum beatae
                repudiandae consequuntur. Quidem at magnam vel. Dignissimos,
                ratione.
              </p>
              <button className="primary-button">learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
