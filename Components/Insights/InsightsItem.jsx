import PropTypes from "prop-types";

const InsightsItem = ({ title, desc, ctg, src }) => {
  InsightsItem.propTypes = {
    title: PropTypes.any,
    desc: PropTypes.string,
    ctg: PropTypes.string,
    src: PropTypes.string,
  };
  return (
    <div
      data-aos="zoom-in"
      className="flex min-h-[420px] flex-col text-white relative bg-[#1A297A] rounded-xl overflow-hidden w-[300px]"
    >
      <img
        className="h-52 w-full object-cover object-center"
        src={`/Insights/${src}.png`}
        alt="blog"
        loading="lazy"
      />
      <h2 className="tracking-widest relative top-[-15px] w-fit h-fit left-3 bg-[#0328EE] rounded-full px-7 py-2 text-xs title-font font-medium uppercase mb-1">
        {ctg}
      </h2>
      <div className="px-4 text-start flex flex-col  h-full justify-between mb-3">
        <div className="flex items-center min-h-[66px]">
          <h1
            className="title-font text-lg font-medium mb-3
          line-clamp-2
          "
          >
            {title}
          </h1>
        </div>
        <div className="w-full">
          <p className="leading-relaxed text-[14px] mb-8 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
      <div className="absolute bottom-3 w-full px-6">
        <a
          href="#"
          className="text-[#4764FF] border-b border-[#4764FF] float-right text-[11px] inline-flex items-center lg:my-2"
        >
          Read More
        </a>
        <hr className="w-full self-end border-white/10" />
      </div>
    </div>
  );
};

export default InsightsItem;
