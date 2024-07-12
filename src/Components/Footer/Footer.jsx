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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center flex-wrap text-left gap-10 lg:gap-5 w-full">
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
                <a href="mailto:Hello@iTeller.io">
                  <h3>Hello@iTeller.io</h3>
                </a>
              </div>
              <div className="flex flex-col max-sm:w-full gap-y-1">
                <h2 className="font-medium uppercase border-b md:w-fit border-white text-lg mb-3">
                  Telephone
                </h2>
                <div>
                  <h3>☎️ 800 (iTeller)</h3>
                </div>
              </div>
              <div className="flex col-span-2 md:col-span-3 lg:col-span-6 flex-col max-sm:w-full gap-1 mt-5">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  <div>
                    <h3>Australia</h3>
                    <h5>ACN 650 348 842</h5>
                  </div>
                  <div>
                    <h3>UAE</h3>
                    <h3>License No :1130113</h3>
                    <h5>Al owais Business Tower</h5>
                  </div>
                  <div className="col-span-2">
                    <h3>UK</h3>
                    <h3>License No : 13756061</h3>
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
                  className="w-5"
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
                  className="w-5"
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
                  className="w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              <a
                href="https://t.me/+eDQXA2m04QpjOTU0"
                className="ml-3 h-fit text-white bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  strokeWidth={2}
                  className="w-5 fill-white"
                  viewBox="0 0 30 30"
                >
                  <path d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/itellerex"
                className="text-white h-fit ml-3 bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-5 fill-white"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
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
