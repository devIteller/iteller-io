import PropTypes from "prop-types";

const Input = ({ placeholder, value, onChange, type, className }) => {
  Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
  };
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={` w-full placeholder:text-gray-400 rounded duration-300 focus:shadow-md focus:shadow-i_blue text-base outline-none  capitalize  py-2 md:py-3 px-3 ${
        className ? className : ""
      }`}
    />
  );
};

export default Input;
