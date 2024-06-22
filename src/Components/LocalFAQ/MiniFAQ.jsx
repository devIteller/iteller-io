import React, { useState } from "react";
import publicFAQ from "../../Pages/BuySell/BuySell/BuySell_Content";

export const MiniFAQ = () => {
  const [accordion, setAccordion] = useState("");
  return (
    <>
      <h1 className="text-xl md:text-3xl mb-3 font-bold text-center md:text-start w-full">
        FAQ
      </h1>
      {publicFAQ.map((pp, index) => {
        return (
          <div
            onClick={() =>
              accordion === pp.title ? setAccordion("") : setAccordion(pp.title)
            }
            key={index}
            className={`cursor-pointer w-full bg-[#0C1237] p-5 ${
              accordion === pp.title ? "space-y-4" : ""
            }`}
          >
            <button
              type="button"
              className="flex items-center justify-between w-full text-xl font-bold rounded-t-xl  gap-3"
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
    </>
  );
};
