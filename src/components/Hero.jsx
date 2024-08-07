import React from "react";
import Button from "./Button";
import { hero } from "../constants";

const Hero = () => {
  return (
    <div className="container z-20 mx-auto px-4 flex gap-20 mt-20">
      <div className="w-1/2 flex flex-col gap-4 max-2xl:w-2/3 max-xl:w-full">
        <p className="text-2xl font-Zain font-black text-custom-green_dark">
          {hero.subTitle}
        </p>
        <h1 className="text-7xl leading-tight font-nato font-bold text-custom-white max-md:mb-3">
          {hero.mainTitle}
        </h1>
        <Button
          btnTitle={hero.buttonLabel}
          btnURL={hero.buttonLink}
          btnBG="bg-custom-black"
        />
      </div>
    </div>
  );
};

export default Hero;
