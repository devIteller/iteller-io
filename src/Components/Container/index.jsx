import React from "react";

export const Container = ({ className,children }) => {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <div className="flex flex-col z-50 gap-y-4 lg:max-w-[1440px] w-[90%]  py-10 lg:py-5 items-center relative mt-20  text-white">
        {children}
      </div>
    </div>
  );
};
