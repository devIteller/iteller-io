import { useState } from "react";

const DrawerItem = ({ title, active, isDropDown, dropDownItems, children }) => {
  DrawerItem.propTypes = {
    title,
    active,
    isDropDown,
    dropDownItems,
    children,
  };

  const [isDDopen, setisDDopen] = useState(false);
  return (
    <li onClick={() => setisDDopen(!isDDopen)}>
      <a
        href="#"
        className={`flex justify-between items-center px-2 p-2.5 text-gray-500 rounded-lg ${
          active ? "bg-[#EEEEEE]" : ""
        }`}
      >
        <div className="flex">
          {children}
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
      </a>

      {dropDownItems && isDDopen && dropDownItems}
    </li>
  );
};

export default DrawerItem;
