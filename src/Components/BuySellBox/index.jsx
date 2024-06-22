import React from "react";

export const BuySellBox = ({icon,text}) => {
  return (
    <div data-aos="" className="w-full sm:w-[220px]">
      <div className="px-5 py-6 bg-[#101949] sm:h-[220px] flex items-center justify-center gap-4 ">
        <img
          src={`/BuySell/${icon}.svg`}
          loading="lazy"
          alt="revenue operations collage"
          className=" w-14 sm:w-20"
        />
      </div>
      <h2 className="font-bold sm:text-sm text-center mt-4 sm:mt-7">
        {text}
      </h2>
    </div>
  );
};
