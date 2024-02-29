import { useEffect, useRef, useState } from "react";
import CryptoATMMachineBox from "../../Components/CryptoATMMachine/CryptoATMMachine";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const CryptoATMMachine = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  const data = [
    {
      title: "User-Friendly Interface: ",
      desc: ` The ATM features a large, touch-sensitive screen with an intuitive interface, ensuring transactions are straightforward and accessible for all users. Whether you're buying or selling cryptocurrencies, the process is designed for simplicity and ease of use.`,
    },
    {
      title: "Instant Transactions:",
      desc: `The iTeller provides real-time transactions, enabling users to buy or sell cryptocurrencies instantly. This efficiency ensures that users can take advantage of market conditions as they occur.`,
    },
    {
      title: "Multiple Cryptocurrency Support:",
      desc: `Catering to a diverse range of needs, the iTeller supports multiple cryptocurrencies, including Bitcoin, Ethereum, and other popular tokens. This flexibility allows users to transact in their preferred digital currency.`,
    },
    {
      title: "Accessibility: ",
      desc: `iTeller Crypto ATMs are easily accessible, making it convenient for users to perform transactions without the need for a traditional bank or online exchange.`,
    },
    {
      title: "Secure Transactions:",
      desc: `Security is a paramount concern, and the iTeller Crypto ATM employs advanced security measures to protect user transactions. With end-to-end encryption and compliance with the latest security standards, users can transact with confidence.`,
    },
    {
      title: "Support & Maintenance:",
      desc: `Equipped with remote monitoring and support, the iTeller ensures maximum uptime and reliability. Regular software updates and maintenance are conducted to keep the ATM operating smoothly and securely.`,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };
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
        <div className="flex flex-col gap-y-6 z-50 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 items-center relative mt-28 text-white">
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-start w-full mb-3">
              iTeller Crypto ATM:
            </h1>
            <p>
              The iTeller Crypto ATM offers a seamless and secure gateway for
              the exchange of cryptocurrencies and fiat currencies, catering to
              both novice and experienced users. Designed with a sleek, modern
              aesthetic, it integrates smoothly into various retail
              environments, from shopping centers to convenience stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <h1 className="text-3xl font-bold text-start w-full col-span-full">
              Features & Benefits:
            </h1>
            {data.map((item, index) => {
              return (
                <CryptoATMMachineBox
                  key={index}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
          <div className="relative w-full">
            <video
              onPlay={handlePlay}
              onPause={handlePause}
              ref={videoRef}
              controls
              className="w-full"
            >
              <source src="/AtmMachine/video.mp4" type="video/mp4" />
            </video>
            {!isPlaying && (
              <div
                onClick={handlePlay}
                className="absolute top-1/2 cursor-pointer left-1/2 transform bg-[#1A297A]/60 rounded-full p-7 -translate-x-1/2 -translate-y-1/2"
              >
                <svg
                  viewBox="0 0 24 25"
                  fill="none"
                  className="w-[30px] lg:w-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.068 13.2198C20.1657 13.0681 20.2316 12.8986 20.2618 12.7213C20.2921 12.544 20.286 12.3625 20.2439 12.1876C20.2018 12.0127 20.1247 11.8479 20.017 11.703C19.9093 11.5581 19.7732 11.436 19.6169 11.3441L5.80376 3.04297C5.57914 2.90856 5.32152 2.83764 5.05895 2.83792C4.27933 2.83792 3.64867 3.44757 3.64867 4.20033V20.7984C3.64867 21.053 3.72246 21.3021 3.86168 21.5181C4.27376 22.1567 5.14248 22.3521 5.80376 21.9544L19.6169 13.6546C19.7993 13.5446 19.9552 13.3946 20.0694 13.2184L20.068 13.2198ZM21.1066 15.968L7.29478 24.2677C5.31093 25.4608 2.7006 24.8732 1.46713 22.959C1.05011 22.3137 0.828391 21.5641 0.828125 20.7984L0.828125 4.20171C0.828125 1.94341 2.72148 0.114471 5.06034 0.114471C5.8497 0.114471 6.62375 0.327778 7.29478 0.730998L21.1066 9.03208C23.0904 10.2238 23.6988 12.7422 22.4639 14.6579C22.1215 15.1891 21.6565 15.6377 21.1066 15.968V15.968Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
          <h1 className="pl-7 font-bold text-xl py-3 bg-[#CD7B00] text-start w-full">
            Highlights include:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CryptoATMMachineBox
              title={"Inclusive Design:"}
              desc={`The ATM interface will be designed for ease of use, with clear instructions, responsive touchscreens, and accessibility options for those with disabilities.`}
            />{" "}
            <CryptoATMMachineBox
              title={"Educational Support:"}
              desc={`For those new to cryptocurrencies, iTeller ATMs will provide on-screen guidance and tips, demystifying the process of buying and selling digital currencies.`}
            />{" "}
            <CryptoATMMachineBox
              title={"Community Engagement:"}
              desc={`Prior to launch, we aim to engage with communities and potential users through educational initiatives, providing insights into the benefits and functionalities of using iTeller Crypto ATMs.`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CryptoATMMachine;
