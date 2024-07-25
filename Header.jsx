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
      node.current?.contains(e.target) ||
      DrawerNode.current?.contains(e.target)
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
          className={`flex justify-center z-[70] w-full duration-200 border-b absolute border-[#1A297A] lg:fixed py-5 text-white md:gap-y-5 ${
            isScrolled
              ? "lg:bg-[#050f1f]/60 lg:backdrop-blur-md   "
              : ""
          }`}
        >
          <nav className=" flex gap-x-2 gap-y-2 justify-between xl:flex-wrap  px-4 md:px-10 md:max-w-[1440px] w-full  md:flex-row items-center">
            <Link
              to="/"
              className="lg:flex w-20 md:w-36  justify-start lg:items-center hidden "
            >
              <img
                loading="lazy"
                src="/Logo/Logo.png"
                className="md:w-36 object-contain"
                alt="Logo"
              />
            </Link>
            <div ref={DrawerNode}>
              <Drawer
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
            <ul className="gap-14 hidden relative lg:flex ">
            
              <Link to="/business">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3">
                  <span>Business</span>
                </li>
              </Link>
              <Link to="/services/buy-sell-crypto">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3">
                  <span>Buy & Sell</span>
                </li>
              </Link>
              <Link to="/account/dashboard/referral-program">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3">
                  <span>Referral</span>
                </li>
              </Link>
              <Link to="/services/earn">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3 ">
                  <span>Earn</span>
                </li>
              </Link>
              {/* <Link to="/learn">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3 ">
                  <span>Learn</span>
                </li>
              </Link> */}
              <Link to="/company/about">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3 ">
                  <span>About</span>
                </li>
              </Link>

              <Link to="/support/contact-us">
                <li className="inline-flex justify-center gap-1 items-center rounded-xl text-base mt-4 md:mt-0 whitespace-nowrap py-3 ">
                  <span>Support</span>
                </li>
              </Link>
            </ul>
            <div
              className={`flex justify-between gap-x-3 max-lg:w-full duration-300 lg:pr-10 ${
                isScrolled
                  ? " max-lg:bg-[#050f1f]/60 max-lg:backdrop-blur-lg max-lg:fixed  max-lg:top-0 max-lg:left-0 max-lg:py-4 max-lg:px-5"
                  : "bg-transparent"
              }`}
            >
              <Link
                to="/"
                className={` w-20 md:w-36  justify-start lg:hidden ${
                  isScrolled ? "hidden" : "flex"
                }`}
              >
                <img
                  loading="lazy"
                  src="/Logo/Logo.png"
                  className="md:w-36 object-contain"
                  alt="Logo"
                />
              </Link>
              <a
                href="https://apps.apple.com/us/app/iteller/id6477462194"
                className={` w-20 md:w-36 flex  justify-start lg:items-center ${
                  isScrolled ? "flex" : "hidden"
                }`}
              >
                <img
                  loading="lazy"
                  src="/icons/apple.svg"
                  className="w-8 object-contain"
                  alt="Logo"
                />
              </a>

              <div className="flex gap-x-3">
                <a
                  href="https://my.iteller.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center gap-1 duration-300 hover:scale-90 items-center border-btn border px-3 py-2 md:px-7 rounded-xl text-xs md:text-base md:mt-0"
                >
                  <img loading="lazy" src="/icons/login.svg" alt="in" />
                  <span>Login</span>
                </a>
                <a
                  href="https://my.iteller.app/en/auth/sign-up"
                  className="inline-flex bg-btn duration-300 hover:scale-90  items-center border-btn   rounded-xl md:mt-0"
                >
                  <button className="inline-flex justify-center gap-1  items-center border-btn border px-2 md:px-7 text-xs md:text-base">
                    <img
                      loading="lazy"
                      src="/icons/user-add.svg"
                      className=" w-4 md:w-5"
                      alt="user"
                    />
                    <span>Sign Up</span>
                  </button>
                </a>
                <div>
                  <img
                    loading="lazy"
                    src="/Hero/menu.png"
                    className="w-8 h-8 md:mt-2 lg:hidden z-[9999]"
                    alt="menu"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                  <span className="sr-only">Close menu</span>
                </div>
              </div>
            </div>
     
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
