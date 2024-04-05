import { useEffect, useRef, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const node = useRef();
  const DrawerNode = useRef();

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      DrawerNode.current.contains(e.target)
    ) {
      return;
    }
    isMenuOpen && setisMenuOpen(false);
    isDrawerOpen && setIsDrawerOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen || isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isDrawerOpen]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="text-gray-600 body-font relative ">
        <div
          className={`flex justify-center z-[70] w-full duration-300 absolute lg:fixed py-5 text-white md:gap-y-5 border-b border-[#1A297A] ${
            isScrolled ? "lg:bg-[#050f1f]/60 lg:backdrop-blur-md" : ""
          }`}
        >
          <div className=" flex gap-y-2 justify-between xl:flex-wrap flex-col px-8 md:px-10 md:max-w-[1440px] w-full  md:flex-row items-center">
            <div className="flex w-full  lg:w-fit  justify-between">
              <Link
                to="/"
                className="flex w-20 md:w-36 justify-start lg:items-center "
              >
                <img
                  loading="lazy"
                  src="/Logo/Logo.png"
                  className="md:w-36 object-contain"
                  alt="Logo"
                />
              </Link>
              <div className="z-[9999]">
                <img
                  loading="lazy"
                  src="/Hero/menu.png"
                  className="w-8 h-8 md:hidden z-[9999]"
                  alt="menu"
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                />
                <span className="sr-only">Close menu</span>
              </div>
            </div>
            <div ref={DrawerNode}>
              <Drawer
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
            <div className="gap-3 hidden relative lg:flex ">
              <div ref={node}>
                <button
                  onClick={() => setisMenuOpen(!isMenuOpen)}
                  className="inline-flex justify-center gap-1 items-center px-7 rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3 "
                >
                  <span>Services</span>
                  <img
                    src="/icons/Vector.png"
                    className={`${
                      isMenuOpen ? "rotate-180" : "rotate-0"
                    } duration-300`}
                    loading="lazy"
                    alt="arrow"
                  />
                </button>
                {isMenuOpen && (
                  <div
                    className={` duration-300 absolute flex flex-col gap-2 delay-500 items-start left-0 top-12 bg-[#1A297A] p-4 rounded-xl whitespace-nowrap`}
                  >
                    <img
                      src="/icons/Polygon.png"
                      alt="Polygon"
                      className="absolute top-[-9px] left-[90px]"
                      loading="lazy"
                    />
                    <Link
                      to="/Crypto-OTC-Trading-Platform"
                      className="py-3 px-4 rounded-md text-start bg-[#152162] hover:bg-[#101949] duration-300 w-full"
                      rel="noopener noreferrer"
                    >
                      Crypto OTC Trading Platform
                    </Link>
                    <Link
                      to="/Crypto-ATM-Machine"
                      className="py-3 px-4 rounded-md text-start bg-[#152162] hover:bg-[#101949] duration-300 w-full"
                      rel="noopener noreferrer"
                    >
                      Crypto ATM Machine
                    </Link>
                    <Link
                      to="/Assured-APY"
                      className="py-3 px-4 rounded-md text-start bg-[#152162] hover:bg-[#101949] duration-300 w-full"
                      rel="noopener noreferrer"
                    >
                      Assured APY Returns - Liquidity Investment
                    </Link>
                  </div>
                )}
              </div>
              <a
                href="/#insights"
                className="inline-flex justify-center gap-1 items-center px-7 rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3"
              >
                <span>Insights</span>
              </a>
              <button className="inline-flex justify-center gap-1 items-center px-7 rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3">
                <Link to="/About-Us">About</Link>
              </button>
            </div>
            <div
              className={`flex justify-between max-lg:w-full duration-300 gap-3 lg:pr-10 ${
                isScrolled
                  ? " max-lg:bg-[#050f1f]/60 max-lg:backdrop-blur-lg max-lg:fixed  max-lg:top-0 max-lg:left-0 max-lg:py-4 max-lg:px-5"
                  : "bg-transparent"
              }`}
            >
              <a
                href="https://my.iteller.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center gap-1 duration-300 hover:scale-90 items-center border-btn border px-5 md:px-7 rounded-xl text-xs md:text-base md:mt-0"
              >
                <img loading="lazy" src="/icons/login.svg" alt="in" />
                <span>Login</span>
              </a>
              <a
                href="https://my.iteller.app/en/auth/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center gap-1 duration-300 hover:scale-90 items-center border-btn border  px-5 md:px-7 rounded-xl text-xs md:text-base  md:mt-0 whitespace-nowrap py-3"
              >
                <img loading="lazy" src="/icons/user-add.svg" alt="user" />
                <span>Sign Up</span>
              </a>
              <Link
                to="/Contact-Us"
                className="inline-flex bg-btn duration-300 hover:scale-90 items-center border-btn  rounded-xl md:mt-0"
              >
                <button className="inline-flex justify-center gap-1  items-center border-btn border px-5 md:px-7 text-xs md:text-base">
                  <img
                    loading="lazy"
                    src="/icons/call-calling.svg"
                    alt="call-calling"
                  />
                  <span>Contact</span>
                </button>
              </Link>
            </div>
            <div className="ml-8 w-20 hidden md:flex lg:hidden">
              <img
                loading="lazy"
                src="/Hero/menu.png"
                className="w-8 h-8 "
                alt="menu"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
              <span className="sr-only">Close menu</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
