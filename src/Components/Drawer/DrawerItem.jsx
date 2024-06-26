﻿import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const DrawerItem = ({
  title,
  isDropDown,
  dropDownItems,
  href,
  children,
}) => {
  DrawerItem.propTypes = {
    title: PropTypes.any,
    active: PropTypes.bool,
    isDropDown: PropTypes.bool,
    dropDownItems: PropTypes.node,
    children: PropTypes.node,
    href: PropTypes.string,
    Actived: PropTypes.string,
    setActived: PropTypes.func,
  };
  const [isDDopen, setisDDopen] = useState(false);
  const location = useLocation();

  const handleMenuClick = () => {
    setisDDopen(!isDDopen);
  };

  return !href ? (
    <li className="cursor-pointer" onClick={handleMenuClick}>
      <div
        className={`flex justify-between items-center px-2 p-2.5 text-gray-500 rounded-lg ${
          title != "Exit" ? (location.pathname === href ? "bg-[#EEEEEE]" : "") : ""
        }`}
      >
        <div className="flex">
          {children}
          <span className="ms-2 text-sm">{title}</span>
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
      </div>

      {dropDownItems && isDDopen && dropDownItems}
    </li>
  ) : (
    <Link to={href}>
      <li className="cursor-pointer" onClick={handleMenuClick}>
        <div
          className={`flex justify-between items-center px-2 p-2.5 text-gray-500 rounded-lg ${
            title != "Exit" ? (location.pathname === href ? "bg-[#EEEEEE]" : "") : ""
          }`}
        >
          <div className="flex">
            {children}
            <span className="ms-2 text-sm">{title}</span>
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
        </div>

        {dropDownItems && isDDopen && dropDownItems}
      </li>
    </Link>
  );
};

export default DrawerItem;
