import React from "react";

export const WhyBox = ({ icon, text }) => {
  return (
    <div data-aos="zoom-in" className="flex flex-col justify-center items-center">
      <div className="bg-[#4431BA40] p-4 rounded-full shadow-whyShadow">
        <div className="bg-[#4431BA4D] shadow-whyShadow p-4 rounded-full">
          <div className="bg-[#4431BA66] shadow-whyShadow p-4 rounded-full">
            <img src={`/BuySell/${icon}.svg`} className="w-8" alt={icon} />
          </div>
        </div>
      </div>
      <h1 className="mt-4 font-medium">{text}</h1>
    </div>
  );
};
