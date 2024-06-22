const FeatureItem = ({ title, price, icon, changes }) => {
  return (
    <>
      <div
        // data-aos="zoom-in"
        className="flex justify-between px-3 lg:px-10 items-center  border border-t-[#FFFFFF94] max-sm:text-xs border-x-0 border-b-[#FFFFFF30] rounded-xl py-6 bg-CryptoG"
      >
        <div className="flex justify-start md:justify-center gap-2 items-center  ">
          <img
            className="w-7 md:w-10 h-7 md:h-10"
            src={`/Feature/${icon}`}
            alt={icon}
          />
          <div className="">
            <h3 className="font-bold">{title}</h3>
            {/* <h5 className="text-[#CACACA]">Fetch.ai</h5> */}
          </div>
        </div>
        <span className="text-center lg:col-span-2">${price}</span>
        <span className="text-red-500 text-center">{changes}</span>
        {/* <button className="bg-[#5FCADE] hover:bg-[#5FCADE]/80 text-black hover:scale-90 border-0 py-2 md:py-2 md:place-self-center duration-300 rounded-lg font-medium text-center w-full md:w-fit md:px-7">
          GET
        </button> */}
      </div>
    </>
  );
};

export default FeatureItem;
