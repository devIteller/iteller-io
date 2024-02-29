﻿import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font xl:pb-16 pb-5  relative overflow-hidden">
      <span className="md:w-1/3 w-full blur-[150px] z-10 absolute md:left-[-110px] top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50] w-full"
        ></svg>
      </span>
      <video
        autoPlay
        loop
        muted
        className="absolute  w-full object-cover h-full"
      >
        <source src="/Hero/background.mp4" type="video/mp4" />
      </video>
      <div className="w-full flex flex-col justify-center py-10 items-center relative mt-32">
        <div className=" z-50 flex px-3 md:px-10 lg:max-w-[1440px] w-[90%]  flex-col ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Effortless OTC
            <br />
            Transactions, Uniting Financial Worlds
          </h1>
          <p className="mb-8 md:w-[60%] leading-relaxed text-[#FFF]">
            iTeller, a financial services provider, operates under regulatory
            oversight in both Australia and UK. The company specializes in
            offering an OTC Exchange platform, along with on-ramp and off-ramp
            solutions, specifically designed to meet the diverse financial needs
            and preferences of its extensive client base
          </p>
          <button
            className=" text-white bg-btn hover:bg-btn/70 border-0 py-5 md:py-3 sm:pl-6 sm:pr-10 duration-300
            md:w-fit text-sm md:text-lg w-full text-center md:text-start min-h-[55px"
          >
            Digital Trade, Ensuring Seamless Liquidity
          </button>
          <img
            src="/Hero/Line.svg"
            className="my-12 w-[60%] hidden lg:block"
            alt="Line"
          />
          <h4 className="text-white mb-1 max-lg:mt-5 font-medium">
            Start Your Journey
          </h4>

          <div className="flex max-lg:flex-col justify-center text-center lg:items-center md:w-fit gap-4 text-white w-full">
            <Link to="https://my.iteller.app/en/register">
              <button className="bg-[#CD7B00] hover:bg-[#CD7B00]/80 hover:scale-90 border-0 py-4 md:py-3 md:w-[224px]  duration-300 rounded-lg font-medium md:text-lg text-center w-full">
                Create Your Account
              </button>
            </Link>
            <h3>OR</h3>
            <a href="https://apps.apple.com/us/app/iteller/id6477462194">
              <button className="bg-black border py-2 duration-300 hover:scale-90 text-xs rounded-lg flex justify-center items-center gap-2  md:w-[224px] w-full">
                <img
                  src="/Footer/app_store.png"
                  className="w-[125px]"
                  alt="app_store"
                />
                <p className="sr-only">download from app store</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <span className="md:w-1/3 w-full blur-[150px]  z-10 absolute right-[-140px] bottom-[-210px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="538"
          height="301"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50] w-full"
        ></svg>
      </span>
    </section>
  );
};

export default Hero;
