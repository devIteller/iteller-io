import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect } from "react";
import { MiniFAQ } from "../../Components/LocalFAQ/MiniFAQ";
import { EarnBox } from "../../Components/EarnBox";
import PageTitle from "../../Components/PageTitle";
import { Link } from "react-router-dom";
import ReceiveInsights from "../../Components/ReceiveInsights/ReceiveInsights";

export const Learn = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="Learn" />
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
          <div className="md:grid flex flex-col lg:flex-col-reverse gap-y-10 grid-cols-1 lg:grid-cols-2 z-50">
            <div className="md:mt-5">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold lg:w-[700px] text-white">
                Explore the world of cryptocurrencies with iTeller's Learn hub.
              </h1>
              <div className="mb-2 leading-relaxed text-[#FFF]">
                <p>
                  Whether you're a beginner or an experienced investor, our
                  curated content covers everything from basics to advanced
                  topics like market dynamics and security.
                </p>
                <p className="mt-3">
                  Discover real-world use cases, practical guides, and
                  strategies to optimize your digital assets. Start your journey
                  today and turn your knowledge into profitable strategies.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.33301 14.6025C3.74634 14.6025 0.833008 11.6892 0.833008 8.10254C0.833008 4.51587 3.74634 1.60254 7.33301 1.60254C10.9197 1.60254 13.833 4.51587 13.833 8.10254C13.833 11.6892 10.9197 14.6025 7.33301 14.6025ZM7.33301 2.60254C4.29967 2.60254 1.83301 5.06921 1.83301 8.10254C1.83301 11.1359 4.29967 13.6025 7.33301 13.6025C10.3663 13.6025 12.833 11.1359 12.833 8.10254C12.833 5.06921 10.3663 2.60254 7.33301 2.60254Z"
                      fill="#ABB7C2"
                    />
                    <path
                      d="M13.4401 15.9624C13.3867 15.9624 13.3334 15.9557 13.2867 15.949C12.9734 15.909 12.4067 15.6957 12.0867 14.7424C11.9201 14.2424 11.9801 13.7424 12.2534 13.3624C12.5267 12.9824 12.9867 12.769 13.5134 12.769C14.1934 12.769 14.7267 13.029 14.9667 13.489C15.2067 13.949 15.1401 14.5357 14.7601 15.1024C14.2867 15.8157 13.7734 15.9624 13.4401 15.9624ZM13.0401 14.429C13.1534 14.7757 13.3134 14.949 13.4201 14.9624C13.5267 14.9757 13.7267 14.849 13.9334 14.549C14.1267 14.2624 14.1401 14.0557 14.0934 13.9624C14.0467 13.869 13.8601 13.769 13.5134 13.769C13.3067 13.769 13.1534 13.8357 13.0667 13.949C12.9867 14.0624 12.9734 14.2357 13.0401 14.429Z"
                      fill="#ABB7C2"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="w-full ps-5 focus:outline-none pe-9 bg-[#172463] rounded-lg py-3"
                  placeholder="Search ... "
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/Learn/DigitalCryptoCurrency.png"
                className="w-full md:w-[70%] lg:w-[75%] object-contain"
                alt="coin"
              />
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold float-left w-full">
            Crypto Essentials Explained
          </h1>
          <div className=" justify-center lg:justify-between w-full gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <div className="text-center space-y-5 text-sm flex flex-col justify-center">
              <img src="/Learn/dollar.png" alt="dollar" />
              <h3 className="text-[16px] font-medium">Cryptocurrency Basics</h3>
            </div>
            <div className="text-center space-y-5 text-sm flex flex-col justify-center">
              <img src="/Learn/bitcoin.png" alt="bitcoin" />
              <h3 className="text-[16px] font-medium">
                Blockchain Technology Unpacked
              </h3>
            </div>
            <div className="text-center space-y-5 text-sm flex flex-col justify-center">
              <img src="/Learn/laptop.png" alt="" />
              <h3 className="text-[16px] font-medium">
                Guide to Major Cryptos
              </h3>
            </div>
            <div className="text-center space-y-5 text-sm flex flex-col justify-center">
              <img src="/Learn/lap_top.png" alt="" />
              <h3 className="text-[16px] font-medium">
                Crypto Market Operations
              </h3>
            </div>
            <div className="text-center space-y-5 text-sm flex flex-col justify-center">
              <img src="/Learn/trade.png" alt="" />
              <h3 className="text-[16px] font-medium">
                Advantages of Cryptocurrency
              </h3>
            </div>
          </div>
          <button className="bg-[#101949] place-self-end mb-10  hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-20 w-fit mt-5  duration-300 rounded font-medium text-sm md:text-base text-center mx-auto">
            See More
          </button>
          <h1 className="text-2xl lg:text-3xl font-bold float-left w-full">
            Secure Your Crypto
          </h1>
          <div className="justify-center lg:justify-between w-full gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Security.png" alt="Security" />
              <h3 className="text-[16px] font-medium">
                Crypto Security Essentials
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/coins.png" alt="coins" />
              <h3 className="text-[16px] font-medium">Crypto Storage Guide</h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/b-coin.png" alt="b-coin" />
              <h3 className="text-[16px] font-medium">
                Cyber Threat Protection
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/coin-trade.png" alt="coin-trade" />
              <h3 className="text-[16px] font-medium">
                Crypto Security Best Practices
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Tips.png" alt="Tips" />
              <h3 className="text-[16px] font-medium">
                Backup and Recovery Tips
              </h3>
            </div>
          </div>
          <button className="bg-[#101949] place-self-end mb-10  hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-20 w-fit mt-5  duration-300 rounded font-medium text-sm md:text-base text-center mx-auto">
            See More
          </button>
        </div>
        <div className="w-full bg-[#101949]  flex flex-col justify-center items-center text-white">
          <div className="z-50 lg:max-w-[1440px] px-3 md:px-10 py-10 lg:py-5 w-[90%] items-center relative ">
            <div className="grid  grid-cols-1 justify-start items-center w-full  lg:grid-cols-3 md:py-14">
              <div data-aos="fade-right" className="lg:col-span-2">
                <h1 className="text-2xl mb-1 md:text-3xl font-medium ">
                  iTeller in the Spotlight
                </h1>
                <p>
                  Sign up and easily get New User Rewards. There is up to 1,000
                  USDT Futures Bonus waiting for you.
                </p>
              </div>
              <button
                data-aos="flip-up"
                className="bg-i_orange w-full place-self-end hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-20 md:w-fit mt-6  duration-300 rounded font-medium text-sm md:text-base text-center"
              >
                Claim Benefits
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col z-50 gap-y-4 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 lg:py-5 items-center relative mt-28 text-white mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold float-left w-full">
            Crypto Use Cases
          </h1>
          <div className="justify-center lg:justify-between w-full gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Crypto.png" alt="Crypto" />
              <h3 className="text-[16px] font-medium">
                Crypto in Financial Services
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Blockchain.png" alt="Blockchain" />
              <h3 className="text-[16px] font-medium">
                Blockchain in Supply Chain
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Tokenization.png" alt="Tokenization" />
              <h3 className="text-[16px] font-medium">
                Real Estate Tokenization
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Healthcare.png" alt="Healthcare" />
              <h3 className="text-[16px] font-medium">
                Blockchain for Healthcare
              </h3>
            </div>
            <div
              data-aos="fade-in"
              className="text-center space-y-5 text-sm flex flex-col justify-center"
            >
              <img src="/Learn/Government.png" alt="Government" />
              <h3 className="text-[16px] font-medium">
                Blockchain in Government
              </h3>
            </div>
          </div>
          <button className="bg-[#101949] place-self-end mb-10  hover:bg-i_orange/80 hover:scale-90 border-0 py-3 px-20 w-fit mt-5  duration-300 rounded font-medium text-sm md:text-base text-center mx-auto">
            See More
          </button>
        </div>
      </div>
      <ReceiveInsights />
      <Footer />
    </>
  );
};
