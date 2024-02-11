import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PPC from "./PPC/PPC";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300);
  }, []);
  return (
    <>
      <Header />
      <span className="w-1/3 blur-[170px] z-10 absolute md:left-[-110px] top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50]"
        ></svg>
      </span>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-6 lg:max-w-[1440px] w-[90%] md:px-10 py-10 items-center relative mt-28 text-white">
          {PPC.map((pp, index) => {
            return (
              <div key={index} className=" w-full z-50 odd:bg-[#0C1237] even:bg-[#101949] p-5 space-y-4">
                <h1 className="text-xl font-bold">{pp.title}</h1>
                <h3 className="text-[#E8EAF2] text-sm">{pp.desc}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
