import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PPC from "./PPC/PPC";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [accordion, setAccordion] = useState("");

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 items-center relative mt-28 text-white">
          {PPC.map((pp, index) => {
            return (
              <div
                key={index}
                className={`" w-full z-50 odd:bg-[#0C1237] even:bg-[#101949] p-5 ${
                  accordion === pp.title ? "space-y-4" : ""
                }`}
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full text-xl font-bold rounded-t-xl  gap-3"
                  onClick={() =>
                    accordion === pp.title
                      ? setAccordion("")
                      : setAccordion(pp.title)
                  }
                >
                  <span className="self-start text-start">{pp.title}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 duration-500 ${
                      accordion === pp.title ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <h3
                  className={`"text-[#E8EAF2] text-sm duration-700 overflow-hidden ${
                    accordion === pp.title ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  {pp.desc}
                </h3>
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
