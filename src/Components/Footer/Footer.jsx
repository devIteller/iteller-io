import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center py-10">
        <div className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 flex flex-col gap-5 justify-between items-center">
          <img
            src="/Footer/logo-footer.png"
            className="w-[600px] hidden lg:block"
            alt="logo footer"
            loading="lazy"
          />
          <img
            src="/Footer/logo-footer_2.png"
            className="max-w-[250px] block lg:hidden"
            alt="logo footer"
            loading="lazy"
          />
        </div>
      </div>
      <footer className="text-white bg-black pb-5 pt-10 body-font flex justify-center">
        <div className="lg:max-w-[1440px] w-[90%] px-3 md:px-10 flex flex-col gap-5 justify-between">
          <div className="flex justify-center lg:justify-between">
            <Link
              to="/"
              className="flex max-lg:w-full justify-center lg:justify-start lg:items-center "
            >
              <img
                loading="lazy"
                src="/Logo/logo_2.png"
                className="w-40 lg:w-auto"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="pt-10 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center flex-wrap text-left gap-10 lg:gap-5 w-full">
              <div className="flex flex-col gap-y-1 max-sm:w-full">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  Company
                </h2>
                <Link className="font-light text-sm" to="/company/about">
                  About Us
                </Link>
                <Link className="font-light text-sm" to="/legal">
                  Legal
                </Link>
                {/* <a className="font-light text-sm" href="#">
                  Sitemap
                </a> */}
              </div>
              <div className="flex flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  Services
                </h2>
                <Link
                  className="font-light text-sm"
                  to="/services/buy-sell-crypto"
                >
                  Buy & Sell Crypto
                </Link>
                {/* <Link to="/Crypto-ATM-Machine">Crypto ATM Machine</Link> */}
                <Link className="font-light text-sm" to="/services/earn">
                  Earn
                </Link>
              </div>
              {/* <div className="flex flex-col max-sm:w-full gap-y-1">
                <Link to="/learn">
                  <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                    Learn
                  </h2>
                </Link>
                <a className="font-light text-sm" href="#insights">
                  Insights
                </a>
                {/* <Link to="/Crypto-ATM-Machine">Crypto ATM Machine</Link> */}
              {/* 
              </div>  */}
              <div className="flex flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  Support
                </h2>
                <Link className="font-light text-sm" to="/support/contact-us">
                  Contact Us
                </Link>
                <Link className="font-light text-sm" to="/support/faq">
                  FAQ
                </Link>
                <Link className="font-light text-sm" to="/learn/guide">
                  iTeller Guide
                </Link>
                {/* <Link className="font-light text-sm" to="#">
                  Submit a Ticket
                </Link> */}
              </div>
              <div className="flex flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  User Account
                </h2>
                <a
                  className="font-light text-sm"
                  href="https://my.iteller.app/en/auth/sign-up"
                >
                  Sign Up
                </a>
                <a className="font-light text-sm" href="https://my.iteller.app">
                  Login
                </a>
              </div>
              <div className="flex flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  Email
                </h2>
                <a href="mailto:Hello@iTeller.io"><h3>Hello@iTeller.io</h3></a>
              </div>

              <div className="flex col-span-2 lg:col-span-4 flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium  uppercase border-b md:w-fit border-white text-lg mb-3">
                  Contact us:
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 ">
                  <div>
                    <h3>Australia</h3>
                    <h5>ACN 650 348 842</h5>
                  </div>
                  <div>
                    <h3>UAE</h3>
                    <h3>Lisence No :1130113</h3>
                    <h5>Al owais Business Tower</h5>
                  </div>
                  <div className="col-span-2">
                    <h3>UK</h3>
                    <h3>Lisence No : 13756061</h3>
                    <h5>
                      29 Walker House Phoenix Road, London, England, NW1 1EN
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-between sm:flex-row-reverse items-center max-sm:flex-col">
            <div className="w-full sm:max-w-[250px] my-7 lg:my-2">
              <a href="https://apps.apple.com/us/app/iteller/id6477462194">
                <button className="bg-black border py-3 duration-300 hover:scale-90 text-xs rounded-lg flex justify-center items-center gap-2 w-full sm:max-w-[250px]">
                  <img
                    src="/Footer/app_store.png"
                    className="w-[125px]"
                    alt="app_store"
                  />
                  <p className="sr-only">download from app store</p>
                </button>
              </a>
            </div>
            <span className="flex flex-wrap">
              <a
                href="https://www.instagram.com/iteller.ex?igsh=ZG9lMzQxZ3BrajZt"
                className=" text-white h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className=" w-10 h-10 p-1"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61556337135041"
                className="text-white ml-3 h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className=" w-10 h-10 p-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/itellerau/"
                className="ml-3 h-fit text-white bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className=" w-10 h-10 p-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
          <p className="text-gray-300 spa w-full pt-5 border-t border-white/50 text-center text-sm">
            This site is protected by reCAPTCHA and the Google
            <Link to="/legal/privacy-policy" className="border-b mx-1">
              Privacy Policy
            </Link>
            and
            <Link to="#" className="border-b mx-1">
              Terms of Service
            </Link>
            apply.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
