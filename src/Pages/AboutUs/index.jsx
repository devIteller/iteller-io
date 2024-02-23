import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Header />
      <span className="md:w-1/3 w-full blur-[170px] z-10 absolute md:left-[-110px] top-[-20px]">
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
        <div className="flex flex-col gap-y-6 lg:max-w-[1440px] z-50 w-[90%] px-5 md:px-10 py-10 items-center relative mt-28 lg:mt-24 text-[#EEEEEE]">
          <h1 className="text-3xl mb-2 font-bold float-left w-full">
            About iTeller Pty Ltd
          </h1>
          <div className="p-5 bg-[#101949] flex flex-col lg:flex-row justify-between gap-4 ">
            <div className="flex h-fit gap-4 flex-col justify-between ">
              <h3 className="self-start text-2xl font-bold">
                Navigating the New Era of Finance
              </h3>
              <h5 className="text-sm lg:mt-16">
                At iTeller Pty Ltd, we stand at the forefront of financial
                innovation, offering effortless Over-the-Counter (OTC)
                transactions that bridge the gap between traditional finance and
                the digital world. Our commitment is to unite financial worlds,
                providing our clients with a robust platform that ensures
                seamless liquidity and secure exchanges.
              </h5>
            </div>
            <img
              src="/About-us/revenue-operations-collage.png"
              loading="lazy"
              alt="revenue operations collage"
              className="w-full sm:h-72 lg:mt-7"
            />
          </div>
          <div className="p-5 bg-[#101949] flex flex-col items-center gap-y-4">
            <div className="space-y-3">
              <h3 className="self-start text-2xl font-bold">
                Regulated and Compliant
              </h3>
              <p>
                Operating within a regulated framework, iTeller Pty Ltd
                maintains registrations and licenses across multiple
                jurisdictions, including Australia, the UK, and Dubai. This
                multi-faceted compliance structure ensures adherence to
                international financial standards, reflecting our dedication to
                security and regulated service.
              </p>
            </div>
            <div className="flex max-lg:flex-col gap-8">
              <div className="space-y-3 w-full">
                <img
                  src="/About-us/building-2.png"
                  loading="lazy"
                  alt="building"
                  className="w-full sm:h-[320px]"
                />
                <p>
                  In Australia, we are proudly registered with
                  <span className="text-[#CD7B00]"> AUSTRAC</span> under
                  registration number
                  <span className="text-[#CD7B00]"> 100791220</span> and adhere
                  to the regulatory standards set by ASIC.
                </p>
              </div>
              <div className="space-y-3 w-full">
                <img
                  src="/About-us/building-3.png"
                  loading="lazy"
                  alt="building"
                  className="w-full sm:h-[320px]"
                />
                <p>
                  Our UK presence is marked by our financial brokerage license,
                  number <span className="text-[#CD7B00]"> 13756061</span> ,
                  allowing us to serve a diverse clientele with integrity.
                </p>
              </div>
              <div className="space-y-3 w-full">
                <img
                  src="/About-us/building-4.png"
                  loading="lazy"
                  alt="building"
                  className="w-full sm:h-[320px]"
                />
                <p>
                  In the UAE, our license number
                  <span className="text-[#CD7B00]"> 1130113</span> is a
                  testament to our commitment to providing regulated financial
                  services globally.
                </p>
              </div>
            </div>
          </div>
          <div className="float-left w-full max-lg:mt-8 lg:relative lg:top-8">
            <h1 className="text-3xl">
              <strong>A Global Footprint</strong>
            </h1>
            <h3>Our services are underpinned by a global perspective:</h3>
          </div>
          <div className="flex items-start lg:gap-5 max-lg:flex-wrap w-full">
            <div className="flex flex-col h-full justify-center items-center w-full">
              <img
                src="/About-us/Australia.png"
                loading="lazy"
                alt="Australia"
                className="rounded-full relative top-9"
              />
              <div className="bg-[#101949] h-[160px] w-full text-center pt-12 pb-6">
                <h3 className="text-3xl mb-1">Australia</h3>
                <h5>ACN 650 348 842</h5>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src="/About-us/UK.png"
                loading="lazy"
                alt="UK"
                className="rounded-full relative top-9"
              />
              <div className="bg-[#101949] h-[160px] w-full text-center pt-12 pb-6">
                <h3 className="text-3xl mb-1">UK</h3>
                <p>License No: 13756061, </p>
                <p>London, England, NW1 1EN</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <img
                src="/About-us/UAE.png"
                loading="lazy"
                alt="UAE"
                className="rounded-full relative top-9"
              />
              <div className="bg-[#101949] w-full h-[160px] text-center pt-12 pb-6">
                <h3 className="text-3xl mb-1">UAE</h3>
                <p>License No: 1130113, Al </p>
                <p>Owais Business Tower</p>
              </div>
            </div>
          </div>
          <div className="float-left w-full">
            <h1 className="text-3xl mb-2">
              <strong>Investment Approach</strong>
            </h1>
            <h3 className="text-sm">
              We provide our clients with an extensive suite of services that
              cater to the evolving landscape of digital assets:
            </h3>
          </div>
          <img
            src="/About-us/Investment-1.png"
            loading="lazy"
            alt="Investment"
            className="w-full sm:h-[320px] lg:hidden"
          />
          <div className="lg:grid grid-cols-3 gap-x-7">
            <div className="flex flex-col max-lg:gap-y-6 justify-between w-full col-span-1">
              <div>
                <Link to="/Crypto-OTC-Trading-Platform">
                  <div className="text-xl mb-1 font-bold">
                    Crypto OTC Trading Platform
                  </div>
                </Link>
                <p className="text-sm">
                  A bespoke trading experience tailored to the needs of our
                  clients.
                </p>
              </div>
              <div>
                <Link to="/Crypto-ATM-Machine">
                  <h3
                    to="/Crypto-ATM-Machine"
                    className="text-xl mb-1 font-bold"
                  >
                    Crypto ATM Machine
                  </h3>
                </Link>
                <p className="text-sm">
                  Accessibility meets innovation with our user-friendly Crypto
                  ATMs.
                </p>
              </div>
              <div>
                <Link
                // to="/Assured-APY"
                >
                  <h3 className="text-xl mb-1 font-bold">
                    Assured APY Returns - Liquidity Investment:
                  </h3>
                </Link>
                <p className="text-sm">
                  Discover investment opportunities with assured returns,
                  designed to optimize your liquidity.
                </p>
              </div>
            </div>
            <img
              src="/About-us/Investment-1.png"
              loading="lazy"
              alt="Investment"
              className="w-full sm:h-[320px] col-span-2 hidden lg:block"
            />
          </div>
          <div className="p-5 bg-[#101949] flex flex-col gap-y-4 mt-5">
            <h3 className="text-2xl font-bold">Our Expertise</h3>
            <h5 className="text-sm">
              With a specialized focus on OTC Exchange platforms, along with
              comprehensive on-ramp and off-ramp solutions, iTeller is poised to
              accommodate the diverse financial needs and preferences of our
              extensive client base.
            </h5>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col gap-y-4">
            <h3 className="text-2xl font-bold">Disclaimer</h3>
            <h5 className="text-sm">
              Please note that all content on this website is for illustrative
              purposes and general information only. iTeller Pty Ltd does not
              provide financial advice, nor do we consider your investment
              objectives, financial situation, or specific needs. The decision
              to acquire or dispose of any digital asset should be made with
              consideration of your personal objectives, financial situation,
              and needs. Investing in digital assets involves inherent risks,
              and there is the potential for loss. Past performance of digital
              assets is not indicative of future results.
            </h5>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col w-full gap-y-4">
            <h3 className="text-2xl font-bold">Join Our Journey</h3>
            <h5 className="text-sm">
              Embark on a journey with iTeller Pty Ltd and experience the
              pinnacle of digital asset trading. With us, your financial future
              is in secure, capable hands.
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
