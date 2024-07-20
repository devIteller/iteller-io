import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import React from "react";
import PageTitle from "../../Components/PageTitle";
import { RefferalFAQ } from "../../Components/LocalFAQ/RefferalFAQ";

const Refferal = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="Referral" />
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
        <div className="flex flex-col z-50 gap-y-4 lg:max-w-[1440px] w-[90%] px-3 py-10 lg:py-5 items-center relative mt-20  text-white">
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-4 ">
            <div className="flex capitalize h-fit gap-3 flex-col justify-between lg:w-[50%]">
              <h1 className="text-2xl lg:text-3xl font-bold float-left w-full">
                Earn and Give with iTeller's Referral (IB Room) Program!
              </h1>
              <h5 className="font-bold text-i_orange">
                Welcome to the iTeller Referral Program!
              </h5>
              <h5 className=" text-xl">
                Earn rewards by sharing the benefits of our secure,
                user-friendly crypto
              </h5>
              <h5 className=" text-xl">
                trading platform with your friends and network. Help us grow the
                iTeller community and get rewarded immediately!
              </h5>
            </div>
            <img
              src="/Referral/Referral.png"
              loading="lazy"
              alt="hero"
              className="lg:w-[32vw]"
            />
          </div>
          <h1 className="text-xl mt-8 mb-2  md:text-3xl font-bold text-center  w-full">
            Benefits of the Program
          </h1>
          <div className="w-full relative flex gap-5 flex-col items-center justify-between bg-referral_sm md:bg-referral bg-cover  bg-no-repeat p-5 md:p-10">
            <div className="flex flex-col items-center md:flex-row gap-5 justify-between w-full">
              <div className="bg-referralLightG border-y border-gray-500 backdrop-blur-sm rounded-xl w-fit p-5">
                <div className="mb-5">
                  <svg
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.3125"
                      y="6.625"
                      width="32.375"
                      height="8.3125"
                      rx="1.5"
                      stroke="#E8EAF2"
                      stroke-width="2"
                    />
                    <path
                      d="M17.6172 6.42126L25.5266 1.67109C26.0001 1.38674 26.6012 1.5477 26.8692 2.03059L29.5323 6.8287"
                      stroke="#E8EAF2"
                      stroke-width="2"
                    />
                    <path
                      d="M17.3828 6.42126L9.47337 1.67109C8.99991 1.38674 8.39882 1.5477 8.13081 2.03059L5.46772 6.8287"
                      stroke="#E8EAF2"
                      stroke-width="2"
                    />
                    <path
                      d="M13.125 14.9374H21.875V25.0293C21.875 25.4096 21.4673 25.6507 21.134 25.4674L17.9819 23.7338C17.6818 23.5687 17.3182 23.5687 17.0181 23.7338L13.866 25.4674C13.5327 25.6507 13.125 25.4096 13.125 25.0293V14.9374Z"
                      stroke="#E8EAF2"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.5 14.9374H31.5V32.1874C31.5 33.292 30.6046 34.1874 29.5 34.1874H5.5C4.39543 34.1874 3.5 33.292 3.5 32.1874V14.9374Z"
                      stroke="#E8EAF2"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <h1 className="text-white text-lg">Immediate Rewards</h1>
                <p className="text-black w-60 mt-2 text-sm">
                  Both the referrer and the referred user receive $10 USDT as
                  soon as the referred user completes their first trade.
                </p>
              </div>
              <div className="bg-referralLightG border-y border-gray-500 backdrop-blur-sm rounded-xl w-fit p-5">
                <div className="mb-5">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5013 32.0834C25.5221 32.0834 32.0846 25.5209 32.0846 17.5C32.0846 9.47919 25.5221 2.91669 17.5013 2.91669C9.48047 2.91669 2.91797 9.47919 2.91797 17.5C2.91797 25.5209 9.48047 32.0834 17.5013 32.0834Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.668 17.5H23.3346"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 23.3334V11.6667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-white text-lg">Additional Benefits</h1>
                <p className="text-black w-60 mt-2 text-sm">
                  Monthly Draws: For every 5 verified referrals, you get an
                  entry into a monthly draw for a chance to win $500 USDT.
                </p>
              </div>
            </div>
            <div className="flex flex-col  items-center  md:flex-row gap-5 justify-between w-full">
              <div className="bg-referralG border-y border-gray-500 backdrop-blur-sm rounded-xl w-fit p-5">
                <div className="mb-5">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.62109 10.85L17.4982 18.3021L30.2877 10.8937"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 31.5146V18.2875"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.5135 18.7105V13.3729C31.5135 11.3604 30.0698 8.91047 28.3052 7.93339L20.5177 3.61669C18.8552 2.68335 16.1427 2.68335 14.4802 3.61669L6.69268 7.93339C4.9281 8.91047 3.48438 11.3604 3.48438 13.3729V21.6272C3.48438 23.6397 4.9281 26.0896 6.69268 27.0667L14.4802 31.3834C15.3114 31.8501 16.4052 32.0834 17.4989 32.0834C18.5927 32.0834 19.6864 31.8501 20.5177 31.3834"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.9987 31.2084C30.576 31.2084 32.6654 29.119 32.6654 26.5417C32.6654 23.9644 30.576 21.875 27.9987 21.875C25.4214 21.875 23.332 23.9644 23.332 26.5417C23.332 29.119 25.4214 31.2084 27.9987 31.2084Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.5404 32.0833L32.082 30.625"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-white text-lg">Simple and Transparent</h1>
                <p className="text-[#A8A8A8] w-60 mt-2 text-sm">
                  The program's structure is straightforward, making it easy for
                  new users to understand and participate.
                </p>
              </div>
              <div className="bg-referralG border-y border-gray-500 backdrop-blur-sm rounded-xl w-fit p-5">
                <div className="mb-5">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7344 8.99792C27.651 11.025 29.6635 14.2479 30.0719 17.9667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.08594 18.0396C5.4651 14.3354 7.44844 11.1125 10.3359 9.0708"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9453 30.5375C13.637 31.3979 15.562 31.8791 17.5891 31.8791C19.5432 31.8791 21.3807 31.4416 23.0286 30.6396"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5893 11.2292C19.8284 11.2292 21.6435 9.41407 21.6435 7.17502C21.6435 4.93596 19.8284 3.12085 17.5893 3.12085C15.3503 3.12085 13.5352 4.93596 13.5352 7.17502C13.5352 9.41407 15.3503 11.2292 17.5893 11.2292Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.04635 29.05C9.28541 29.05 11.1005 27.2349 11.1005 24.9958C11.1005 22.7568 9.28541 20.9417 7.04635 20.9417C4.8073 20.9417 2.99219 22.7568 2.99219 24.9958C2.99219 27.2349 4.8073 29.05 7.04635 29.05Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.9565 29.05C30.1956 29.05 32.0107 27.2349 32.0107 24.9958C32.0107 22.7568 30.1956 20.9417 27.9565 20.9417C25.7175 20.9417 23.9023 22.7568 23.9023 24.9958C23.9023 27.2349 25.7175 29.05 27.9565 29.05Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-white text-lg">Incentives for Growth</h1>
                <p className="text-[#A8A8A8] w-60 mt-2 text-sm">
                  The more you refer, the more you earn, encouraging continuous
                  engagement and growth within the iTeller community.
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl mt-10 mb-2 md:text-3xl font-bold text-center md:text-start w-full">
            How It Works
          </h1>
          <div
            className="text-center grid grid-cols-1 md:grid-cols-2  bg-[#090E2B] mb-10 px-5 md:px-10 py-5 gap-3"
          >
            <img src="/Referral/gift.png" className="max-md:w-[70%] mx-auto" alt="sign-up" />
            <div className="flex flex-col justify-center gap-8">
              <div className="text-start space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-i_orange font-bold md:text-2xl w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-full">
                    1
                  </span>
                  <h1 className="font-bold text-i_orange text-lg md:text-2xl">Sign Up</h1>
                </div>
                <div className="text-sm">
                  <h5>• Log in to your iTeller account.</h5>
                  <h5>• Navigate to the IB room section.</h5>
                </div>
              </div>
              <div className="text-start space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-i_orange font-bold md:text-2xl w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-full">
                    2
                  </span>
                  <h1 className="font-bold text-i_orange text-lg md:text-2xl">
                    Share Your Link
                  </h1>
                </div>
                <div className="text-sm">
                  <h5>• Generate your unique referral link.</h5>
                  <h5>
                    • Share it with your friends, family, and on social media.
                  </h5>
                </div>
              </div>
              <div className="text-start space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-i_orange font-bold md:text-2xl w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-full">
                    3
                  </span>
                  <h1 className="font-bold text-i_orange text-lg md:text-2xl">
                    Earn Rewards
                  </h1>
                </div>
                <div className="text-sm">
                  <h5>
                    When a new user signs up using your referral link and
                    completes their first trade of at least $100 worth of
                    cryptocurrency, both you and the referred user receive $10
                    USDT.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <RefferalFAQ />
          <h1 className="text-xl mt-8 md:mb-2  md:text-4xl font-bold text-center  w-full">
            Join Now and Start Earning!
          </h1>
          <p className="md:text-lg text-center ">
            Don’t miss out on the chance to earn rewards and help grow the
            iTeller community.
          </p>
          <a
            href="https://my.iteller.app/en/auth/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white md:w-fit text-center font-medium text-sm md:text-lg w-fit mb-5 capitalize bg-[#007aff] hover:scale-90 duration-300 py-2 px-4"
          >
            Sign Up today and start sharing your referral link!
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Refferal;
