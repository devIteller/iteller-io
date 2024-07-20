import React, { useState } from "react";

export const ReferralFAQ = () => {
  const [accordion, setAccordion] = useState("");
  const FAQ = [
    {
      title: "Who can join the referral program?",
      desc: `Anyone with an iTeller account can join and start earning rewards.`,
    },
    {
      title: "How do I track my referrals?",
      desc: `Track your referrals and earnings in the Referral Program section of your account.`,
    },
    {
      title: "When will I receive my rewards?",
      desc: `Rewards are credited to your account once your referral completes their first trade of at least $100 worth of cryptocurrency`,
    },
    {
      title: "Is there a limit to how many people I can refer?",
      desc: `No, there is no limit. The more you refer, the more you can earn`,
    },
  ];
  return (
    <>
      <h1 className="text-xl md:text-3xl mb-3 font-bold text-center md:text-start w-full">
        FAQ
      </h1>
      {FAQ.map((pp, index) => {
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
