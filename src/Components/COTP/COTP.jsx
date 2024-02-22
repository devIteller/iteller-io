import PropTypes from 'prop-types';

const COTP = ({ title, desc, src }) => {

  COTP.propTypes = {
    title: PropTypes.string,
    desc : PropTypes.string,
    src : PropTypes.string,
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
      <div className="flex flex-col gap-10 lg:w-1/2">
        <h1 className="underline underline-offset-[14px] w-fit text-xl">
          {title}
        </h1>
        <p className="hidden lg:block">{desc}</p>
      </div>
      <div className="flex flex-col md:flex-col-reverse gap-3 lg:w-1/2">
        <img src={`/SliderSec/${src}.png`} className="" alt={src} />
        <p className="lg:hidden"> {desc}</p>
      </div>
    </div>
  );
};

export default COTP;
