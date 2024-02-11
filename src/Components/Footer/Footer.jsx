import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#010D50] py-10 body-font flex justify-center border-t-4 border-[#001272]">
        <div className="lg:max-w-[1440px] w-[90%]  md:px-10 flex flex-col gap-5 justify-between">
          <div className="flex justify-center lg:justify-between">
            <a
              href="#"
              className="flex max-lg:w-full justify-center lg:justify-start lg:items-center "
            >
              <img
                loading="lazy"
                src="/Logo/logo_2.png"
                className="w-40 lg:w-auto"
                alt="Logo"
              />
            </a>
            <span className="sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start hidden lg:inline-flex">
              <a
                href="#"
                className="ml-3 h-fit text-white bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white h-fit ml-3 bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a
                href="#"
                className="ml-3 text-white h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
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
          <div className="pt-10 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center flex-wrap text-left lg:gap-24 gap-7 w-full">
              <div className="flex flex-col max-sm:w-full">
                <h2 className="font-bold uppercase border-b md:w-fit border-white text-lg mb-3">
                  Locations
                </h2>
                <div className="flex flex-col gap-5">
                  <div>
                    <h3>Australia</h3>
                    <h5>ACN 650 348 842</h5>
                  </div>
                  <div>
                    <h3>UK</h3>
                    <h3>Lisence No : 13756061</h3>
                    <h5>London, England, NW1 1EN</h5>
                  </div>
                  <div>
                    <h3>UAE</h3>
                    <h3>Lisence No :1130113</h3>
                    <h5>Al owais Business Tower</h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <h2 className="font-bold uppercase border-b md:w-fit border-white text-lg mb-3">
                  Services
                </h2>
                <h5>Crypto OTC Trading Platform</h5>
                <h5>Crypto ATM Machine</h5>
                <h5>Assured APY Returns - Liquidity Investment</h5>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <h2 className="font-bold uppercase border-b md:w-fit border-white text-lg mb-3">
                  Company
                </h2>
                <h5>About</h5>
                <a href="/Download/Letter_of_Advice.pdf" download>
                  Letter of Advice
                </a>
                <h5>Privacy Policy</h5>
                <a href="/Download/AMLCTF_FINANCIAL_PROGRAM.pdf" download>
                  AML-CTF Program
                </a>
                <a href="/Download/RISK_ASSESSMENT_AND_MANAGEMENT.pdf" download>
                  Risk Assessment And Management
                </a>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <h2 className="font-bold uppercase border-b md:w-fit border-white text-lg mb-3">
                  Contact us:
                </h2>
                <div>
                  <div className="flex w-full justify-between">
                    <a href="mailto:Hello@iTeller.io">Hello@iTeller.io</a>
                    <span className="flex sm:w-fit md:hidden">
                      <a
                        href="#"
                        className=" text-white h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="sm:w-5 w-3 sm:h-5 h-3"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width={20}
                            height={20}
                            x={2}
                            y={2}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-white ml-3 h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
                      >
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="sm:w-5 w-3 sm:h-5 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>

                      <a
                        href="#"
                        className="ml-3 h-fit text-white bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          className="sm:w-5 w-3 sm:h-5 h-3"
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
                  <div className=" max-sm:w-full mt-10">
                    <h4>Ready to sign up?</h4>
                    <button className="bg-[#0328EE] py-4 w-full duration-300 hover:bg-[#0f03ee97] mt-2  uppercase text-xs  rounded-lg">
                      Create an Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="hidden md:flex lg:hidden">
            <a
              href="#"
              className=" text-white h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-5 w-3 sm:h-5 h-3"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white ml-3 h-fit bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="sm:w-5 w-3 sm:h-5 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="ml-3 h-fit text-white bg-[#162B9A] p-3 rounded-full duration-300 hover:bg-[#162B9A]/70 hover:scale-90 cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="sm:w-5 w-3 sm:h-5 h-3"
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
      </footer>
      <div className="w-full flex justify-center py-6">
        <div className="lg:max-w-[1440px] w-[90%] md:px-10 flex flex-col gap-5 justify-between items-center">
          <img
            src="/Footer/logo-footer.png"
            className="w-[500px] hidden lg:block"
            alt="logo footer"
            loading="lazy"
          />
          <img
            src="/Footer/logo-footer_2.png"
            className="max-w-[300px] block lg:hidden"
            alt="logo footer"
            loading="lazy"
          />
          <div className="grid grid-cols-1 text-sm justify-center lg:grid-cols-2 gap-8 text-white">
            <p>
              iTeller Pty Ltd operates within a regulated framework, maintaining
              registrations and licenses across multiple jurisdictions to ensure
              compliance with international financial standards. In Australia,
              we are registered with AUSTRAC under registration number 100791220
              and adhere to regulatory standards set by ASIC. Additionally,
              iTeller Pty Ltd is licensed as a financial broker in the UK and
              Dubai, reflecting our commitment to providing secure and regulated
              financial services to our clients globally.
            </p>
            <p>
              All content on this website is provided for illustrative purposes
              and general information only, and should not be construed as
              financial advice. iTeller Pty Ltd does not consider your
              investment objectives, financial situation, or specific needs.
              Before making any decisions regarding the acquisition or disposal
              of any digital asset, you should assess the information provided
              in relation to your personal objectives, financial situation, and
              needs. Investing in digital assets involves risks, and there is
              the potential to lose your investment. Past performance of digital
              assets is not a reliable indicator of their future performance
            </p>
          </div>
          <p className="text-gray-300 spa w-full pt-5 border-t border-white/50 text-center text-xs">
            This site is protected by reCAPTCHA and the Google
            <Link to="/Privacy-Policy" className="border-b mx-1">
              Privacy Policy
            </Link>
            and
            <Link to="#" className="border-b mx-1">
              Terms of Service
            </Link>
            apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
