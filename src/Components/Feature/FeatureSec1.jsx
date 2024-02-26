import FeatureItem from "./FeatureItem/FeatureItem";

const FeatureSec1 = () => {
  return (
    <section className="text-white pt-10 body-font flex justify-center items-center max-sm:overflow-hidden">
      <div className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 flex max-lg:flex-wrap lg:gap-3 justify-between">
        <div className="flex w-full flex-col gap-6 justify-center text-center lg:w-1/2 md:pr-10">
          <FeatureItem
            icon="crypto"
            title={<strong>Trading</strong>}
            desc="Over the counter spot, derivatives and Web3 digital assets trading."
            aos={"fade-right"}
          />
          <FeatureItem
            icon="buy-sell"
            title={
              <>
                <strong>Buy & Sell:</strong>{" "}
                <span className="text-gray-200 lg:text-2xl">
                  Crypto OTC Trading platform
                </span>
              </>
            }
            desc="Buy-Sell Feature: The iTeller platform stands out as a premier Crypto OTC Trading platform. It is meticulously engineered to streamline the intricate process of buying and selling cryptocurrencies in exchange for fiat currency. Our platform offers a straightforward, user-friendly interface that removes the complexities often associated with crypto transactions. Clients can enjoy a smooth and efficient gateway to transition between traditional monetary assets and digital currencies."
            aos={"fade-right"}
          />
        </div>
        <div className="lg:w-1/2 w-full max-lg:mt-6">
          <img
            alt="vector_1"
            className="h-64 md:h-[500px] lg:h-[620px] w-full"
            src="/Feature/vector_1.avif"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSec1;
