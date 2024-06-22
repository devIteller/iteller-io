import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import publicFAQ from "./BuySell/BuySell_Content";
import { useEffect, useState } from "react";
import { BuySellBox } from "../../Components/BuySellBox";
import React from "react";
import { MiniFAQ } from "../../Components/LocalFAQ/MiniFAQ";
import PageTitle from "../../Components/PageTitle";

const images = [
  "Bitcoin",
  "Ethereum",
  "Tether",
  "Binance",
  "Litecoin",
  "Shiba",
  "DogeCoin",
  "Solana",
  "Tron",
];

const BuySell = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="Buy & Sell Crypto" />
      <Header />
      <span className="md:w-1/3 w-full blur-[170px] z-10 absolute md:left-[-110px]  top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50] w-full"
        ></svg>
      </span>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col z-50 gap-y-4 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 lg:py-5 items-center relative mt-28 text-white">
          <h1 className="text-2xl font-bold float-left w-full">
            Your Crypto Journey Starts Here
          </h1>
          <div className="p-5 bg-[#101949]  flex flex-col lg:flex-row items-center justify-between gap-4 ">
            <div className="flex h-fit gap-4 flex-col justify-between ">
              <h5 className="text-lg">
                Join iTeller today and experience seamless crypto trading. Enjoy
                a user-friendly platform designed for all traders. Secure your
                assets with cutting-edge technology and trade confidently in
                local and global markets.
              </h5>
              <Link to="https://my.iteller.app/en/auth/sign-up">
                <button className="bg-i_orange mt-3 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[191px]  duration-300 rounded font-medium text-sm md:text-base text-center">
                  Start Trading Now
                </button>
              </Link>
            </div>
            <img
              src="/BuySell/BuySell.png"
              loading="lazy"
              alt="revenue operations collage"
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between items-start w-full gap-5 mt-9">
            <BuySellBox icon="UltraLowFees" text="Ultra-Low Fees" />
            <BuySellBox
              icon="money-exchange"
              text="Lightning-Fast Transactions"
            />
            <BuySellBox icon="TopTierSecurity" text="Top-Tier Security" />
            <BuySellBox icon="curriculum" text="Easy Onboarding" />
            <BuySellBox icon="true" text="Instant Verification" />
          </div>
          <h1
            data-aos="zoom-in"
            className="text-3xl border-l-[20px] my-14 px-5 border-[#1A297A] font-bold float-left w-full"
          >
            Over 560 million people globally own cryptocurrencies. Be part of
            the revolution with iTeller.
          </h1>
          <h1 className="text-xl md:text-2xl font-bold float-left w-full">
            Supported Cryptocurrencies
          </h1>
          <div
            data-aos="zoom-in"
            className="w-full flex items-center  justify-center "
          >
            <div className="w-[200%] h-[20vh] overflow-hidden relative">
              <div className="w-[200%] flex items-center h-32 justify-around max-lg:gap-5 absolute left-0 animate-scroll hover:pause">
                {images.map((i) => {
                  return (
                    <div className="flex flex-col justify-center  items-start  duration-500 cursor-pointer shadow-BrandSh">
                      <img
                        className=" max-w-[25vw]"
                        src={`/BuySell/${i}.png`}
                      />
                      <h1 className="w-full text-center mt-2 font-medium">
                        {i}
                      </h1>
                    </div>
                  );
                })}
                {images.map((i) => {
                  return (
                    <div className="flex flex-col justify-center items-start duration-500 cursor-pointer shadow-BrandSh">
                      <img
                        className=" max-w-[25vw]"
                        src={`/BuySell/${i}.png`}
                      />
                      <h1 className="w-full text-center mt-2 font-medium">
                        {i}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h1
            data-aos="zoom-in"
            className="text-2xl font-bold float-left w-full mt-8"
          >
            How it works
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-bold">1. Create an Account</span>
            <span className="w-48 h-[1px] bg-white hidden lg:block"></span>
            <span className="text-base">
              Sign up with your email and create a secure password.
            </span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-bold">2. Verify Your Identity</span>
            <span className="w-48 h-[1px] bg-white hidden lg:block"></span>
            <span className="text-base">
              Complete quick KYC verification for added security.
            </span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-bold">3. Start Trading</span>
            <span className="w-48 h-[1px] bg-white hidden lg:block"></span>
            <span className="text-base">
              Buy and sell crypto instantly with our user-friendly platform.
            </span>
          </h1>
          <h1 className="text-xl float-left w-full my-4">
            Step-by-step guide to trade crypto on iTeller
          </h1>
          <a
            href="https://my.iteller.app/en/auth/sign-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-i_orange self-start mb-10 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[191px]  duration-300 rounded font-medium text-sm md:text-base text-center">
              Sign Up
            </button>
          </a>

          <MiniFAQ />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuySell;
