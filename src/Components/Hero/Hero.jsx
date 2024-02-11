import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font xl:pb-16 pb-5  relative overflow-hidden">
      <span className="w-1/3 blur-[150px] z-10 absolute md:left-[-110px]   top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50]"
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
        <div className=" z-50 flex md:px-10 lg:max-w-[1440px] w-[90%]  max-md:mt-5 flex-col ">
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
            className="inline-flex text-white bg-btn hover:bg-btn/70 dur3 border-0 py-3 pl-6 pr-10 duration-300
         rounded-tr-3xl w-fit text-sm md:text-lg"
          >
            Digital Trade, Ensuring Seamless Liquidity
          </button>
          <img
            src="/Hero/Line.svg"
            className="my-12 w-[60%] hidden lg:block"
            alt=""
          />
          <h4 className="text-white mb-1 max-lg:mt-5">Start Your Journey</h4>

          <Link to="https://my.iteller.app/en/auth/sign-up">
            <button
              className="i text-white bg-[#CD7B00] hover:bg-[#CD7B00]/80 dur3 border-0 py-3 px-8  duration-300
         rounded-lg md:w-fit text-sm md:text-lg w-full text-center"
            >
              Create Your Account
            </button>
          </Link>
        </div>
      </div>
      <span className="w-1/3 blur-[150px]  z-10 absolute right-[-140px] bottom-[-210px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="538"
          height="301"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50]"
        ></svg>
      </span>
    </section>
  );
};

export default Hero;
