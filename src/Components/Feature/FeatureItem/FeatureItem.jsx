import PropTypes from 'prop-types';



const FeatureItem = ({ title, desc, icon,aos }) => {
 FeatureItem.propTypes = {
  title: PropTypes.any,
  desc: PropTypes.string,
  icon:PropTypes.any,
  aos: PropTypes.any,
};
  return (
    <>
      <div 
      data-aos={aos}
      className="flex flex-col w-full text-start items-start">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 inline-flex items-center justify-center rounded-xl bg-[#162B9A]">
            <img src={`/icons/${icon}.png`} loading="lazy" alt={icon} />
          </div>
          <h2 className="text-[18px] md:text-[22px] lg:text-2xl">{title}</h2>
        </div>
        <div>
          <p className="text-[14px] md:text-[16.8px] text-gray-300">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
