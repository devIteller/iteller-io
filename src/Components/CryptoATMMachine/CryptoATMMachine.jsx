import React from "react";

const CryptoATMMachineBox = ({ title, desc }) => {
  // CryptoATMMachineBox.prototype = {
  //     title =
  // }
  return (
    <div className="bg-[#1A297A] py-7 lg:py-12 px-7  space-y-2 text-[#E8EAF2]">
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default CryptoATMMachineBox;
