import { WhyBox } from "./WhyBox";

const ContentSec = () => {
  return (
    <section className="text-white w-full justify-center flex">
      <div className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-16 lg:py-24 z-50">
        <h1 className="lg:text-4xl text-2xl font-bold mb-10  w-full text-center">
          Why iTeller?
        </h1>
        <div className="flex flex-wrap justify-center w-full items-center max-lg:gap-8">
          <div className="flex">
            <WhyBox icon="UltraLowFees" text="Ultra-Low Fees" />
            <img
              src="/icons/border.svg"
              className="mb-10 hidden lg:block mx-3"
              alt=""
            />
          </div>
          <div className="flex">
            <WhyBox icon="money-exchange" text="Fast Transactions" />
            <img
              src="/icons/border.svg"
              className="mb-10 hidden lg:block mx-3"
              alt=""
            />
          </div>
          <div className="flex">
            <WhyBox icon="curriculum" text="Easy Onboarding" />
            <img
              src="/icons/border.svg"
              className="mb-10 hidden lg:block mx-3"
              alt=""
            />
          </div>
          <div className="flex">
            <WhyBox icon="true" text="Instant Verification" />
            <img
              src="/icons/border.svg"
              className="mb-10 hidden lg:block mx-3"
              alt=""
            />
          </div>
          <WhyBox icon="TopTierSecurity" text="Top-Tier Security" />
        </div>
      </div>
    </section>
  );
};

export default ContentSec;
