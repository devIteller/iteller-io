import { Link } from "react-router-dom";

const FeatureSec1 = () => {
  const images = [
    "Bitcoin",
    "Ethereum",
    "Tether",
    "Binance",
    "Tron",
    "Litecoin",
    "Solana",
    "DogeCoin",
    "Shiba",
    "Vector",
    "Vector_1",
  ];

  return (
    <section className="text-white w-full justify-center flex">
      <div
        data-aos="zoom-in"
        className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-16 flex flex-col justify-center items-center"
      >
        <h1 className="lg:text-4xl text-3xl font-bold mb-2 w-full text-center">
          Build Your Crypto Portfolio
        </h1>
        <h4 className="mb-2 w-full text-center">
          Over <span className="font-extrabold">562 million people</span>{" "}
          worldwide own cryptocurrency, reflecting the growing global acceptance
          and adoption of digital assets.
          <a href="https://my.iteller.app/en/auth/sign-up" target="_blank" rel="noopener noreferrer">
            <span className="text-i_orange font-extrabold ml-1">
              Join them!
            </span>
          </a>
        </h4>
        <div className="w-full flex items-center  justify-center ">
          <div className="w-[200%] h-[20vh] overflow-hidden relative">
            <div className="w-[200%] flex md:gap-x-3 items-center h-32 justify-around max-lg:gap-5 absolute left-0 animate-scroll hover:pause">
              {images.map((i, index) => {
                return (
                  <img
                    key={index + 1}
                    className=" bg-[#FFFFFF1F] p-6 rounded-[35px] w-[100px]"
                    src={`/BuySell/${i}.png`}
                  />
                );
              })}
              {images.map((i, index) => {
                return (
                  <img
                    key={index + 1}
                    className=" bg-[#FFFFFF1F] p-6 rounded-[35px] w-[100px]"
                    src={`/BuySell/${i}.png`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Link to="https://my.iteller.app/en/auth/sign-up">
          <button className="bg-i_orange mt-5 hover:bg-i_orange/80 hover:scale-90 border-0 py-3 w-[250px]  duration-300 rounded font-medium text-sm md:text-base text-center">
            Buy Crypto
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeatureSec1;
