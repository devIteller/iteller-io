import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DrawerItem = ({ title, active, isDropDown, dropDownItems,href, children }) => {
  DrawerItem.propTypes = {
    title: PropTypes.any,
    active: PropTypes.bool,
    isDropDown: PropTypes.bool,
    dropDownItems: PropTypes.node,
    children: PropTypes.node,
    href : PropTypes.string
  };

  const [isDDopen, setisDDopen] = useState(false);
  return (
    <li onClick={() => setisDDopen(!isDDopen)}>
      {href != undefined ? <Link
        to={href}
        className={`flex justify-between items-center px-2 p-2.5 text-gray-500 rounded-lg ${
          active ? "bg-[#EEEEEE]" : ""
        }`}
      >
        <div className="flex">
          {children}
          {console.log(href)}
         <span className="ms-1 text-sm">{title}</span>
        </div>
        {isDropDown && (
          <svg
            width={10}
            height={10}
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isDDopen ? "rotate-180" : "rotate-0"} duration-300`}
          >
            <path
              d="M17.0747 1.31348L10.5547 7.83348C9.78474 8.60348 8.52474 8.60348 7.75474 7.83348L1.23474 1.31348"
              stroke="#646464"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link> : <div
        className={`flex justify-between items-center px-2 p-2.5 text-gray-500 rounded-lg ${
          active ? "bg-[#EEEEEE]" : ""
        }`}
      >
        <div className="flex">
          {children}
          {console.log(href)}
         <span className="ms-1 text-sm">{title}</span>
        </div>
        {isDropDown && (
          <svg
            width={10}
            height={10}
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isDDopen ? "rotate-180" : "rotate-0"} duration-300`}
          >
            <path
              d="M17.0747 1.31348L10.5547 7.83348C9.78474 8.60348 8.52474 8.60348 7.75474 7.83348L1.23474 1.31348"
              stroke="#646464"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>}
   

      {dropDownItems && isDDopen && dropDownItems}
    </li>
  );
};

export default DrawerItem;
