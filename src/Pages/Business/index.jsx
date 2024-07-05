import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import React from "react";
import { MiniFAQ } from "../../Components/LocalFAQ/MiniFAQ";
import PageTitle from "../../Components/PageTitle";
import { Link } from "react-router-dom";
import { BusinessBox } from "../../Components/BusinessBox";

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

const Business = () => {
  useEffect(() => {
    setTimeout(() => {
      // window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="Business" />
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
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-4 ">
            <div className="flex h-fit gap-3 flex-col justify-between ">
              <h1 className="text-3xl font-bold float-left w-full">
                Transform Your Financial Operations <br /> with Our Seamless
                Crypto Solution
              </h1>
              <h5 className="text-lg">
                iTeller offers comprehensive cryptocurrency solutions designed
                to enhance business operations. Our services provide faster,
                secure transactions, diversified investment opportunities, and
                access to new markets, all while ensuring compliance and
                operational efficiency. Trust iTeller to be your partner in
                navigating the evolving digital finance landscape.
              </h5>
              <Link to="https://my.iteller.app/en/auth/sign-up">
                <button className="bg-i_orange hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[240px]  duration-300 rounded font-medium text-sm md:text-base text-center">
                  Get Started
                </button>
              </Link>
            </div>
            <img
              src="/Business/hero.png"
              loading="lazy"
              alt="hero"
              className="w-full"
            />
          </div>
          <div className="w-full bg-[#090E2B] px-10 py-8 mt-10">
            <h1 className="text-xl mb-4 md:text-3xl font-bold text-start w-full">
              Business Benefits of Crypto Integration
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Diversification of Assets:
                </h1>
                <p>
                  Cryptocurrencies add a new layer of asset diversification,
                  enhancing risk management.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Operational Efficiencies:
                </h1>
                <p>Facilitate faster, cheaper cross-border transactions.</p>
              </div>
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Hedge Against Inflation:
                </h1>
                <p>
                  Digital assets like Bitcoin can protect against inflation and
                  currency devaluation.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Access to New Markets:
                </h1>
                <p>
                  Transact in regions with underdeveloped banking systems,
                  broadening your customer base.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Growth Potential:
                </h1>
                <p>
                  Digital assets offer significant growth opportunities with
                  mainstream acceptance.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="text-i_orange text-lg font-bold">
                  Potential Tax Benefits:
                </h1>
                <p>
                  Some jurisdictions provide tax incentives for crypto
                  investments.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-10 gap-y-5 w-full">
            <BusinessBox
              title="Unmatched Security"
              sub="Robust security protocols ensure your assets and transactions are safeguarded, providing peace of mind."
              src="1"
            />
            <BusinessBox
              title="Competitive Rates"
              sub="Benefit from low spreads and competitive pricing, maximizing your investment value."
              src="2"
            />
            <BusinessBox
              title="Deep Liquidity"
              sub="Access extensive liquidity pools for seamless execution of high-volume trades without market disruption."
              src="3"
            />
            <BusinessBox
              title="Instant Transactions"
              sub="Experience immediate trade execution for efficient and effective trading operations."
              src="4"
            />
            <BusinessBox
              title="Quick Verification"
              sub="Certified and regulated, ensuring fast and secure account verification processes."
              src="5"
            />
            <BusinessBox
              title="Personalized Service"
              sub="Enjoy dedicated 1-on-1 support from initial consultation through to trade execution, ensuring a tailored experience."
              src="6"
            />
          </div>
          <a
            href="https://my.iteller.app/en/auth/sign-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-i_orange self-start mb-10 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[250px]  duration-300 rounded font-medium text-sm md:text-base text-center">
              Join iTeller Today
            </button>
          </a>

          <h1 className="text-2xl mb-4 md:text-3xl font-bold text-center md:text-start w-full">
            How to Start Earning
          </h1>
          <div
            
            className="w-full flex items-center justify-center  lg:justify-between flex-wrap lg:mb-14"
          >
            <div data-aos="zoom-in" className="text-center flex items-center h-80 flex-col gap-3">
              <div className="bg-white w-32 h-[200px]  rounded-full flex justify-center items-center">
                <img
                  src="/Business/sign-in.png"
                  className="w-16 mt-4"
                  alt="sign-in"
                />
              </div>
              <h1 className="font-bold text-lg">Sign Up</h1>
              <h5 className="text-sm w-72">
                Register your business account with iTeller.
              </h5>
            </div>
            <div data-aos="zoom-in" className="text-center flex items-center h-80 flex-col gap-3">
              <div className="bg-white w-32 h-[200px] rounded-full flex justify-center items-center">
                <img
                  src="/Business/upload.png"
                  className="w-16 ml-2 py-1"
                  alt="upload"
                />
              </div>
              <h1 className="font-bold text-lg">Upload Documents</h1>
              <h5 className="text-sm w-72">
                Provide necessary documentation for verification.
              </h5>
            </div>
            <div data-aos="zoom-in" className="text-center flex items-center h-80 flex-col gap-3">
              <div className="bg-white w-32 h-[200px]  rounded-full flex justify-center items-center">
                <img
                  src="/Business/Operations.png"
                  className="w-16  "
                  alt="Operations"
                />
              </div>
              <h1 className="font-bold text-lg">Start Operations</h1>
              <h5 className="text-sm w-72">
                Begin investing, trading, and executing transactions seamlessly
                with our platform's deep liquidity and low spreads
              </h5>
            </div>
          </div>
          <a
            href="https://my.iteller.app/en/auth/sign-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-i_orange self-start mb-10 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[250px]  duration-300 rounded font-medium text-sm md:text-base text-center">
              Sign Up Now
            </button>
          </a>
          <MiniFAQ />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
