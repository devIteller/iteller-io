import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";

import InsightsItem from "./InsightsItem";
import { Autoplay } from "swiper/modules";

const Insights = () => {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 1200 ? (window.innerWidth > 640 ? 2 : 1) : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(
        window.innerWidth < 1200 ? (window.innerWidth > 640 ? 2 : 1) : 3
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <div
        className="bg-[#1A297A] rounded-full z-50 ml-3 px-[18px] py-[15px]"
        onClick={() => swiper.slideNext()}
      >
        <img src="/icons/right.svg" alt="right" loading="lazy" />
      </div>
    );
  };
  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <div
        className="bg-[#1A297A] rounded-full mr-3 px-[18px] py-[15px] z-50"
        onClick={() => swiper.slidePrev()}
      >
        <img src="/icons/left.svg" alt="left" loading="lazy" />
      </div>
    );
  };
  return (
    <section className="text-white flex flex-col pt-10 lg:pb-10 body-font  relative justify-center items-center">
      <div className="flex flex-col lg:max-w-[1440px] w-[90%]  md:px-10">
        <h1 className="text-2xl font-bold mb-2 w-full lg:text-center ">
          Insights
        </h1>
        <h3 className="text-md lg:hidden font-bold mb-2 w-full">
          Unique research and views on the market
        </h3>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper my-5 z-50 lg:max-w-[1440px] w-[90%] lg:w-[60%]"
      >
        <SwiperSlide className="h-full flex justify-center w-full">
          <InsightsItem
            src="one"
            ctg="event"
            title="iTeller's Innovative Leap"
            desc="iTeller's Innovative Leap: Revolutionizing Crypto Payments at the DMCC-Bybit Event "
          />
        </SwiperSlide>
        <SwiperSlide className="w-fit h-full flex justify-center ">
          <InsightsItem
            src="two"
            ctg="tv"
            title="Crypto Risks: iTeller CEO Speaks on Aldhafra TV"
            desc="MohammadTaher Khayami, the iTeller CEO, discussed the risks of investing in cryptocurrencies on"
          />
        </SwiperSlide>
        <SwiperSlide className="w-fit h-full flex justify-center ">
          <InsightsItem
            src="three"
            ctg="event"
            title="The Future of Decentralized Finance"
            desc="Introducing iTeller: Transforming digital transactions with our advanced crypto ATM for secure, easy, and"
          />
        </SwiperSlide>
        <SwiperSlide className="w-fit h-full flex justify-center ">
          <InsightsItem
            src="four"
            ctg="event"
            title="CNBC Arabia Exclusive: CEO Mohammad Taher Khayami lorem ipsum"
            desc="Recently, CEO Mohammad Taher Khayami had an insightful TV interview with CNBC Arabia, where lorem ipsum TV interview with CNBC Arabia, where  "
          />
        </SwiperSlide>
        <div className="flex w-full justify-center  mt-5 items-center ">
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
      <span className="w-1/3 blur-[190px] absolute left-[-60px] -z-0 bottom-[-455px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50]"
        ></svg>
      </span>
    </section>
  );
};

export default Insights;
