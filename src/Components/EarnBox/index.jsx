import React from "react";

export const EarnBox = ({ icon, title, text }) => {
  return (
    <div
      data-aos="zoom-in"
      className="flex text-center items-center flex-col w-full "
    >
      <div className="relative top-10 p-3 bg-white rounded-full">
        <img
          src={`/Earn/${icon}.svg`}
          alt=""
          className=" w-16 h-16 p-1 object-contain "
        />
      </div>
      <div className="bg-[#101949] px-4 w-full h-[200px] flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
