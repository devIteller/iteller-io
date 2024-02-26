// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const SliderSec = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="  ' + className + '"></span>';
    },
  };

  return (
    <div className="relative border-b-4 border-[#162B9A] flex w-full py-7 justify-center items-center text-white">
      <div
        data-aos="fade-in"
        className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 flex lg:flex-col items-start max-lg:flex-wrap gap-5 justify-between"
      >
        <div>
          <h2 className="md:text-3xl lg:text-4xl text-2xl font-bold z-[99999] lg:mb-5 h-fit">
            Market-Leading Trading Portal to Manage Your Digital Assets
          </h2>
        </div>
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={false}
          className="mySwiper w-full text-white"
        >
          <SwiperSlide className="flex gap-x-3 max-lg:pb-24 justify-center !h-fit items-center flex-col lg:flex-row-reverse">
            <img
              src="/SliderSec/slide-one.png"
              className="lg:w-1/2 w-full"
              alt="slider"
              loading="lazy"
            />
            <div className="mt-7 ">
              <div className="flex items-start gap-x-4">
                <span className="w-5 h-5 mt-2 bg-[#1A297A]"></span>
                <h3 className="lg:text-xl text-[20px] font-bold text-start w-[93%]">
                  Your Comprehensive Financial Overview
                </h3>
              </div>
              <h3 className="text-[16px] mt-5 text-start mmd:w-[90%]">
                Effortlessly manage your finances with a personalized dashboard
                that provides a clear, real-time view of your assets.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-x-3 justify-center !h-fit items-center flex-col lg:flex-row-reverse">
            <img
              src="/SliderSec/slide-four.png"
              className="lg:w-1/2 w-full"
              alt="slider"
              loading="lazy"
            />
            <div className="mt-7 ">
              <div className="flex items-start gap-x-4">
                <span className="w-5 h-5 mt-2 bg-[#1A297A]"></span>
                <h3 className="lg:text-xl text-[20px] font-bold text-start w-[93%]">
                  Your Financial Landscape, Clear and Current – Balances
                  Overview
                </h3>
              </div>
              <h3 className="text-[16px] mt-5 text-start mmd:w-[90%]">
                Dive into the details of your financial portfolio with the
                iTeller Balances section. Our intuitive interface makes it
                simple to monitor and manage your wealth
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-x-3 justify-center !h-fit items-center flex-col lg:flex-row-reverse">
            <img
              src="/SliderSec/slide-two.png"
              className="lg:w-1/2 w-full"
              alt="slider"
              loading="lazy"
            />
            <div className="mt-7 ">
              <div className="flex items-start gap-x-4">
                <span className="w-5 h-5 mt-2 bg-[#1A297A]"></span>
                <h3 className="lg:text-xl text-[20px] font-bold text-start w-[93%]">
                  Seamless Currency Exchange – Instant and Accurate
                </h3>
              </div>
              <h3 className="text-[16px] mt-5 text-start mmd:w-[90%]">
                Navigate the global economy with ease using the iTeller Exchange
                feature. Convert currencies in real-time with competitive
                exchange rates and immediate transaction execution.
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-x-3 justify-center !h-fit items-center flex-col lg:flex-row-reverse">
            <img
              src="/SliderSec/slide-three.png"
              className="lg:w-1/2 w-full"
              alt="slider"
              loading="lazy"
            />
            <div className="mt-7 ">
              <div className="flex items-start gap-x-4">
                <span className="w-5 h-5 mt-2 bg-[#1A297A]"></span>
                <h3 className="lg:text-xl text-[20px] font-bold text-start w-[93%]">
                  Fund Your Account with Ease – Deposit Interface
                </h3>
              </div>
              <h3 className="text-[16px] mt-5 text-start mmd:w-[90%]">
                Elevate your asset management with iTeller straightforward
                deposit process, designed for convenience and security.
              </h3>
            </div>
          </SwiperSlide>
          {/* <SwiperButtonNext /> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSec;
