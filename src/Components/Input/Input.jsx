const Input = ({ placeholder, value, onChange, type, className }) => {
  Input.propTypes = {
    placeholder,
    value,
    onChange,
    type,
    className,
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={` w-full  placeholder:text-gray-400 rounded-lg duration-300 focus:shadow-md focus:shadow-i_blue text-base outline-none text-gray-700 py-2 md:py-4 px-3 ${
        className ? className : ""
      }`}
    />
  );
};

export default Input;
