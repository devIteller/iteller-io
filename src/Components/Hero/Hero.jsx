import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font xl:pb-16 pb-5 relative flex justify-center">
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
        <div className="md:py-9 mt-40 z-50 flex items-center px-3  lg:max-w-[1440px] w-[90%] flex-col ">
          <div className="md:grid flex flex-col-reverse gap-y-10 grid-cols-1 lg:grid-cols-2 z-50">
            <div className="md:mt-5">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                Buy and Sell Crypto with Ease
              </h1>
              <div className="mb-8 md:w-[70%] leading-relaxed text-[#FFF]">
                <p>
                  Experience unparalleled crypto trading with iTeller's secure
                  and user-friendly platform.
                </p>
                <p className="mt-2">
                  Maximize your returns with low fees and lightning-fast
                  transactions. Enjoy top-tier security and seamless onboarding
                  to start your crypto journey today.
                </p>
              </div>
              <h4 className="text-white mb-2 max-lg:mt-5 ">
                Start Your Journey
              </h4>
              <div className="flex max-lg:flex-col justify-center text-center lg:items-center md:w-fit gap-4 text-white w-full">
                  <a
                    href="https://my.iteller.app/en/auth/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="i text-white bg-[#CD7B00] hover:bg-[#CD7B00]/80 dur3 border-0 py-4 px-8  duration-300
         rounded-lg md:w-fit text-sm md:text-lg w-full text-center"
                    >
                      Create Your Account
                    </button>
                  </a>
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
            <div className="flex justify-end">
              <img
                src="/Hero/vector.png"
                className="lg:w-[90%] object-contain"
                alt="crypto"
              />
            </div>
          </div>
        </div>
        <span className="md:w-1/3 w-full blur-[150px]  absolute right-[-140px] bottom-[-210px]">
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
      <div className="flex justify-center animate-bounce items-center max-md:mt-2 z-[99999999]  ">
        <img src="/icons/mouse.svg" className="" alt="crypto" />
      </div>
    </>
  );
};

export default Hero;
