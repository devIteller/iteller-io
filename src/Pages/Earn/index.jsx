import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect } from "react";
import { MiniFAQ } from "../../Components/LocalFAQ/MiniFAQ";
import { EarnBox } from "../../Components/EarnBox";
import PageTitle from "../../Components/PageTitle";
import { Link } from "react-router-dom";

export const Earn = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="Earn" />
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
          <h1 className="text-2xl lg:text-3xl font-bold float-left w-full">
            Boost Your Earnings with iTeller
          </h1>
          <div className="p-5 bg-[#101949]  flex flex-col lg:flex-row items-center justify-between gap-4 ">
            <div className="flex h-fit gap-4 flex-col justify-between ">
              <h5 className="text-[16px]">
                Unlock the potential of your investments with iTeller's Assured
                APY program. Enjoy competitive returns, flexible investment
                tiers, and weekly payouts, all backed by top-tier security.
                Start your journey to financial growth with a platform designed
                for your success.
              </h5>
              <Link to="/Assured-APY-Form">
                <button className="bg-i_orange mt-3 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 md:w-[191px]  duration-300 rounded font-medium text-sm md:text-base text-center w-full">
                  Start Earning Today
                </button>
              </Link>
            </div>
            <img
              src="/Earn/Earn.png"
              loading="lazy"
              alt="revenue operations collage"
              className="w-full"
            />
          </div>
          <div className="grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <EarnBox
              icon="risk"
              title="High Returns"
              text="Enjoy competitive annual percentage yields (APY) on your investments."
            />
            <EarnBox
              icon="Flexible"
              title="Flexible Tiers"
              text="Choose from a variety of investment tiers to suit your financial goals."
            />
            <EarnBox
              icon="Payouts"
              title="Weekly Payouts"
              text="Receive your earnings in USDT every week."
            />
            <EarnBox
              icon="Investments"
              title="Secure Investments"
              text="Benefit from top-tier security measures and transparent investment processes."
            />
            <EarnBox
              icon="Returns"
              title="Stable Returns"
              text="Consistent growth with assured APY rates."
            />
            <EarnBox
              icon="bill"
              title="Transparency"
              text="Simple and quick online application process."
            />
            <EarnBox
              icon="EasyAccess"
              title="Easy Access"
              text="Simple and quick online application process."
            />
            <EarnBox
              icon="Lock"
              title="Security"
              text="Managed with utmost care for risk mitigation and capital preservation."
            />
          </div>
          <div
            data-aos="zoom-in"
            className="flex max-lg:flex-col my-14 lg:justify-between w-full lg:items-center"
          >
            <div className="text-lg lg:text-3xl font-bold">
              <h1>Understanding Investment Returns:</h1>
              <h2 className="text-i_orange">Comparing Options</h2>
            </div>
            <div className="flex self-end items-end gap-3">
              <div>
                <span className="text-sm">~0.06%</span>
                <span className="w-[15vw] md:w-24 h-10 bg-[#D7FFDF] block rounded-t-md"></span>
                <span className="text-xs block h-5 mt-1 w-[15vw] md:w-24">
                  Saving Accounts
                </span>
              </div>
              <div>
                <span className="text-sm">2-3%</span>
                <span className="w-[15vw] md:w-24 h-24 bg-[#97ECC5] block rounded-t-md"></span>
                <span className="text-xs block h-5 mt-1 w-[15vw] md:w-24">
                  Bonds
                </span>
              </div>
              <div>
                <span className="text-sm">~7%</span>
                <span className="w-[15vw] md:w-24 h-44 bg-[#00DBE7] block rounded-t-md"></span>
                <span className="text-xs block h-5 mt-1 w-[15vw] md:w-24">
                  Stock Market
                </span>
              </div>
              <div>
                <span className="text-sm">8-12%</span>
                <span className="w-[15vw] md:w-24 h-64 bg-[#01AAC1] block rounded-t-md"></span>
                <span className="text-xs block h-5 mt-1 w-[15vw] md:w-24">
                  Real Estate
                </span>
              </div>
              <div>
                <span className="text-sm">Up to 18%</span>
                <span className="w-[15vw] md:w-24 h-96 bg-[#00649F] block rounded-t-md"></span>
                <span className="text-xs block h-5 mt-1 w-[15vw] md:w-24">
                  Earn on iTeller
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold float-left w-full mt-8">
            How to Start Earning
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 float-left w-full"
          >
            <span className="font-medium">1. Select Your Tier: </span>
            <span className="font-[300] text-[#EEEEEE]">
              Choose the investment tier that fits your goals.
            </span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-medium">2. Complete Application: </span>
            <span className="font-[300] text-[#EEEEEE]">
              Fill out our simple online application form (link).
            </span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-medium">3. Fund Your Investment: </span>
            <span className="font-[300] text-[#EEEEEE]">
              Transfer your USDT to our secure platform.
            </span>
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-xl flex flex-wrap items-end gap-1 lg:gap-3 float-left w-full"
          >
            <span className="font-medium">4. Receive Weekly Payouts: </span>
            <span className="font-[300] text-[#EEEEEE]">
              Start earning APY returns, paid weekly.
            </span>
          </h1>
          <Link to="/Assured-APY-Form">
            <button className="bg-i_orange self-start mb-10 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-16 mt-5  duration-300 rounded font-medium text-sm md:text-base text-center">
              Start Your Investment Journey
            </button>
          </Link>
          <div
            data-aos="zoom-in"
            className="space-y-3 bg-[#101949] w-full px-7 py-10 my-10"
          >
            <h1 className="self-start font-bold mb-5 text-[19px] lg:text-xl  text-start text-i_orange ">
              Investment Tiers and Returns
            </h1>
            <div className="flex max-lg:flex-col items-center gap-x-5 gap-y-2 text-sm lg:text-lg">
              <h1 className=" font-bold text-lg w-full lg:w-[8%] lg:text-lg">
                Tier 1:
              </h1>
              <h3 className="bg-[#141F5C] w-full text-lg justify-between flex max-sm:flex-col lg:w-[60%] px-4 py-3">
                <span className="font-bold">Investment Range:</span>
                <span>5,000 to 25,000 USDT</span>
              </h3>
              <h3 className="bg-[#B8BDD6] text-lg w-full lg:w-[35%] text-black text-center px-6 py-1 lg:py-3 font-bold">
                APY: 10% to 13%
              </h3>
            </div>
            <div className="flex max-lg:flex-col items-center gap-x-5 gap-y-2 text-sm lg:text-lg">
              <h1 className=" font-bold text-lg w-full lg:w-[8%] lg:text-lg">
                Tier 2:
              </h1>
              <h3 className="bg-[#141F5C] text-lg justify-between px-4 py-3 flex max-sm:flex-col w-full lg:w-[60%]">
                <span className="font-bold">Investment Range:</span>
                <span>25,000 to 50,000 USDT</span>
              </h3>
              <h3 className="bg-[#B8BDD6] text-lg w-full lg:w-[35%] text-center text-black px-6 py-1 lg:py-3 font-bold">
                APY: 13% to 15%
              </h3>
            </div>
            <div className="flex max-lg:flex-col items-center gap-x-5 gap-y-2 text-sm lg:text-lg">
              <h1 className=" font-bold text-lg w-full lg:w-[8%] lg:text-lg">
                Tier 3:
              </h1>
              <h3 className="bg-[#141F5C] text-lg justify-between px-4 py-3 flex max-sm:flex-col w-full lg:w-[60%]">
                <span className="font-bold">Investment Range:</span>
                <span>50,000 to 100,000 USDT</span>
              </h3>
              <h3 className="bg-[#B8BDD6] text-lg w-full lg:w-[35%] text-center text-black px-6 py-1 lg:py-3 font-bold">
                APY: 15% to 18%
              </h3>
            </div>
          </div>
          <MiniFAQ />
          <div className="grid grid-cols-1 justify-start w-full mt-12 lg:grid-cols-3">
            <h1 className="text-xl md:text-2xl font-medium lg:col-span-2">
              Maximize your returns with <br />
              <span className="text-i_orange mx-1 font-bold">
                iTeller’s Assured APY
              </span>
              program and diversify your investments.
            </h1>
            <Link to="/Assured-APY-Form">
              <button className="bg-i_orange place-self-end mb-10  hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-20 w-fit mt-5  duration-300 rounded font-medium text-sm md:text-base text-center">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
