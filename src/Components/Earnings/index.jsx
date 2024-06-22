import React from "react";
import { Link } from "react-router-dom";

export const Earnings = () => {
  return (
    <section className="text-gray-600 body-font py-10 lg:py-16 flex justify-center">
      <div className="flex justify-center z-50 px-3 lg:max-w-[1440px] w-[90%] ">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 max-lg:gap-10">
          <div className="mt-5">
            <h1
              data-aos="zoom-in"
              className="title-font text-4xl mb-4 font-bold text-white max-lg:text-center"
            >
              Maximize Your Earnings
            </h1>
            <div
              data-aos="zoom-in"
              className="mb-8 leading-relaxed text-[#FFF]"
            >
              <p>
                Benefit from high returns, flexible tiers, and secure
                investments. Enjoy consistent growth with the right tier for
                your financial goals. Start earning weekly payouts in
                <span className="text-[#50AF95] mx-1 font-[1000]">USDT</span>
                with top-tier security and transparency.
              </p>
            </div>
            <Link to="https://my.iteller.app/en/auth/sign-up">
              <button
                data-aos="zoom-in"
                className="bg-i_orange hover:bg-i_orange/80 text-white hover:scale-90 border-0 py-4 md:py-3 md:w-[224px]  duration-300 rounded-lg font-medium md:text-lg text-center w-full"
              >
                Earn with us
              </button>
            </Link>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-center lg:justify-end"
          >
            <img src="/Earnings/Earn.png" className="" alt="Earn" />
          </div>
        </div>
      </div>
    </section>
  );
};
