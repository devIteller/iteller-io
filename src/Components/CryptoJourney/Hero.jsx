import { Link } from "react-router-dom";

const CryptoJourney = () => {
  return (
    <>
      <section className="text-white w-full flex justify-center">
        <div
          data-aos="zoom-in"
          className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-16 lg:py-14 flex flex-col justify-center items-center space-y-2"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="md:flex justify-start hidden">
              <img
                src="/CryptoJourny/iPadPro.png"
                alt="Earn"
                className="w-full lg:w-[75%]"
              />
            </div>
            <div>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                Start your crypto journey
              </h1>
              <div className="md:hidden block my-5">
                <img src="/CryptoJourny/iPadPro.png" alt="Earn" />
              </div>
              <div className="mb-8 leading-relaxed text-[#FFF]">
                <p>
                  Teller is a trusted crypto trading platform designed for a
                  seamless and secure trading experience. We offer ultra-low
                  fees, lightning-fast transactions, top-tier security, easy
                  onboarding, and instant verification. Our platform supports a
                  variety of cryptocurrencies, allowing you to maximize your
                  returns with flexible investment tiers and transparent, secure
                  processes
                </p>
              </div>
              <Link to="https://my.iteller.app/en/auth/sign-up">
                <button className="bg-i_orange text-white hover:bg-i_orange/80 hover:scale-90 border-0 py-4 md:py-3 md:w-[224px]  duration-300 rounded-lg font-medium md:text-lg text-center w-full">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoJourney;
