import { useState } from "react";
import { MiniFAQ } from "./MiniFAQ";

export const LocalFAQ = () => {
  const [accordion, setAccordion] = useState("");

  return (
    <section className="text-white w-full flex justify-center  ">
      <div
        data-aos="zoom-in"
        className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-12 lg:py-10 flex flex-col justify-center items-center space-y-2"
      >
        <MiniFAQ />
      </div>
    </section>
  );
};
