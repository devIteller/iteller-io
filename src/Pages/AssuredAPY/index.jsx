import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const AssuredAPY = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  const AssuredAPYData = [
    {
      title: "Investment Tiers and Returns",
      desc: (
        <div className="space-y-3">
          <h1 className=" font-bold text-lg ">Tier 1:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 text-lg ">
            <h3 className="bg-[#141F5C] px-6 py-3">
              <span className="font-bold">Investment Range:</span> 5,000 to
              25,000 USDT
            </h3>
            <h3 className="bg-[#141F5C] px-6 py-3 font-bold">
              APY: 10% to 13%
            </h3>
          </div>
          <h1 className=" font-bold text-lg ">Tier 2:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 text-lg ">
            <h3 className="bg-[#141F5C] px-6 py-3">
              <span className="font-bold">Investment Range:</span> 25,000 to
              50,000 USDT
            </h3>
            <h3 className="bg-[#141F5C] px-6 py-3 font-bold">
              APY: 13% to 15%
            </h3>
          </div>
          <h1 className=" font-bold text-lg ">Tier 3:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 text-lg ">
            <h3 className="bg-[#141F5C] px-6 py-3">
              <span className="font-bold">Investment Range:</span> 50,000 to
              100,000 USDT
            </h3>
            <h3 className="bg-[#141F5C] px-6 py-3 font-bold">
              APY: 15% to 18%
            </h3>
          </div>
        </div>
      ),
    },
    {
      title: "PayoutSchedule:",
      desc: (
        <div className="space-y-2">
          <h3 className="bg-[#141F5C] px-6 py-3">
            <span className="font-bold">Frequency: </span>
            <span> Weekly payouts</span>
          </h3>
          <h3 className="bg-[#141F5C] px-6 py-3">
            <span className="font-bold">Currency: </span>
            <span>USDT (Tether)</span>
          </h3>
          <h3 className="bg-[#141F5C] px-6 py-3">
            <span className="font-bold">Method: </span>
            <span>Direct to Your Designated Digital Wallet</span>
          </h3>
        </div>
      ),
    },
    {
      title: "Key Benefits:",
      desc: (
        <div className="space-y-2">
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg">Stable Returns:</h1>
            <p>
              Enjoy peace of mind with our assured APY rates, designed to
              provide consistent growth to your investment
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg">Flexibility:</h1>
            <p>
              Our tiered investment structure caters to various investment
              capacities, offering you the flexibility to invest within your
              comfort zone.
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg">Security:</h1>
            <p>
              Investments are managed with the utmost care, focusing on risk
              mitigation and capital preservation.
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg">Transparency:</h1>
            <p>
              Receive detailed reports and updates about your investment
              performance and payout schedule.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const AssuredAPYData_2 = [
    {
      title: "Key Benefits:",
      desc: (
        <div className="space-y-2">
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg ">Review Investment Tiers:</h1>
            <p>
              Consider your investment goals and select the tier that best suits
              your financial strategy.
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg ">Complete Application: </h1>
            <p>
              Fill out our online application form with your details and
              investment tier preference.
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg ">Fund Your Investment:</h1>
            <p>
              Transfer your USDT to the provided wallet address within our
              secure platform.
            </p>
          </div>
          <div className="bg-[#141F5C] px-6 py-3">
            <h1 className="font-medium text-lg ">Receive Weekly Payouts: </h1>
            <p>
              Start receiving your APY returns, paid weekly directly to your
              designated wallet.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4 z-50 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 items-center relative mt-28 text-[#E8EAF2]">
          <div className="space-y-2">
            <h1 className="text-xl lg:text-2xl mb-2 font-bold float-left w-full">
              Discover Assured APY Returns Through Our Liquidity Investment
              Program
            </h1>
            <p className="text-[15px]">
              Welcome to an exclusive opportunity designedto elevate your
              investment portfolio with stable and lucrative returns. Our
              liquidity investment program is meticulously structured to offer
              competitive annual percentage yields (APY) on your capital, paid
              out in USDT for enhanced security and predictability. Below, we
              outline our tiered investment options,each tailored to meet the
              diverse needs and objectives of our investors.
            </p>
          </div>
          {AssuredAPYData.map((pp, index) => {
            return (
              <div
                key={index}
                className={`" w-full z-50 odd:bg-[#0C1237] even:bg-[#0C1237] p-7 space-y-4 `}
              >
                <div
                  type="button"
                  className="flex items-center justify-between w-full text-lg lg:text-xl font-bold rounded-t-xl  gap-3"
                >
                  <span className="self-start text-lg lg:text-xl text-start text-i_orange ">
                    {pp.title}
                  </span>
                </div>
                <h3 className={`"text-[#E8EAF2] duration-700 overflow-hidden`}>
                  {pp.desc}
                </h3>
              </div>
            );
          })}
          <div className=" w-full">
            <h1 className="text-xl lg:text-xl mb-1 font-bold float-left w-full">
              GettingStarted:
            </h1>
            <p className="text-[15px]">
              Investing with us is straightforward. Followthese simple steps to
              become a part of our liquidity investment program:
            </p>
          </div>
          {AssuredAPYData_2.map((pp, index) => {
            return (
              <div
                key={index}
                className={`" w-full z-50 odd:bg-[#0C1237] even:bg-[#0C1237] p-7 space-y-4`}
              >
                <div
                  type="button"
                  className="flex items-center justify-between w-full text-lg lg:text-xl font-bold rounded-t-xl  gap-3"
                >
                  <span className="self-start text-lg lg:text-xl  text-start text-i_orange ">
                    {pp.title}
                  </span>
                </div>
                <h3 className={`"text-[#E8EAF2] duration-700 overflow-hidden`}>
                  {pp.desc}
                </h3>
              </div>
            );
          })}
          <div className="space-y-2">
            <h1 className="text-xl lg:text-xl mb-2 font-bold float-left w-full">
              Legaland Compliance:
            </h1>
            <p className="text-[15px]">
              We are committed to upholding the highest standards of legal
              compliance and ethical investment practices. Our program operates
              in strict adherence to applicable laws and regulations, ensuring
              your investment is managed safely and responsibly. <br /> For more
              detailed information about our liquidity investment program,
              including terms and conditions, please
              <Link to="/Assured-APY-Click">
                <span className="text-i_orange underline font-bold mx-1">
                  Click Here
                </span>
              </Link>
              <br />
              Invest with confidence and watch your wealth grow. Join our
              liquidity investment program today and secure your financial
              future with assured APY returns.
            </p>
          </div>
          <Link to="/Assured-APY-Form">
            <button className="bg-i_orange hover:bg-i_orange/80 hover:scale-90 border-0 py-3 lg:py-2 w-[191px]  duration-300 rounded font-medium text-sm md:text-base text-center">
              Submit Form
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssuredAPY;
