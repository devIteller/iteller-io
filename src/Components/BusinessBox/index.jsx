import React from "react";

export const BusinessBox = ({ src, title, sub }) => {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col text-center items-center gap-2  lg:w-[400px]"
    >
      <img src={`/Business/${src}.png`} alt={src} />
      <h1 className="font-bold text-xl">{title}</h1>
      <h5 className="max-w-[350px]">{sub}</h5>
    </div>
  );
};
