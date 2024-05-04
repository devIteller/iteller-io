import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Input from "../../Components/Input/Input";

const AssuredAPYForm = () => {
  const [FullName, setFullName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [AmountInvest, setAmountInvest] = useState("");
  const [WalletAddress, setWalletAddress] = useState("");
  const [BankTransfer, setBankTransfer] = useState(false);
  const [CryptoWalletTransfer, setCryptoWalletTransfer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  function sendEmail() {
    var templateParams = {
      from_name: `${FullName}`,
      name: `name : ${FullName}`,
      "Contact Number": `${ContactNumber}`,
      email: emailAddress,
      Country: Country,
      "Amount Invest": AmountInvest,
      "Wallet Address": WalletAddress,
      "Bank Transfer": BankTransfer ? "yes" : "no",
      "Crypto Wallet Transfer": CryptoWalletTransfer ? "yes" : "no",
    };

    emailjs
      .send(
        "service_w6vzglh",
        "template_j3434zi",
        templateParams,
        "2VGjtHH_RGI1bz-z7"
      )
      .then((e) => {
        e.status === 200 &&
          Swal.fire({
            icon: "success",
            text: "Your information has been successfully sent!",
            confirmButtonText: "ok",
            backdrop: `
      rgb(0 0 0 / 50%)
    `,
          });
        setFullName("");
        setContactNumber("");
        setEmailAddress("");
        setWalletAddress("");
        setAmountInvest("");
        setCountry("USA");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error; Please Try Later",
        });
      });
  }

  const AssuredAPYData = [
    {
      mainTitle: "Personal Information :",
      title: "",
      desc: (
        <>
          <form className="w-full space-y-2 text-lg lg:text-lg">
            <div className="space-y-2">
              <h1 className="text-sm lg:text-base">Full Name : </h1>
              <Input
                type="text"
                value={FullName}
                onChange={(e) => setFullName(e.currentTarget.value)}
                placeholder="Input your full name in here"
                className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm lg:text-base">Contact Number : </h1>
              <Input
                type="text"
                value={ContactNumber}
                onChange={(e) => setContactNumber(e.currentTarget.value)}
                placeholder="Input your Contact Number in here"
                className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm lg:text-base">Email Address : </h1>
              <Input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.currentTarget.value)}
                placeholder="Input Your Email Address In Here"
                className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm lg:text-base">Country of Residence: </h1>
              <Input
                type="text"
                value={Country}
                onChange={(e) => setCountry(e.currentTarget.value)}
                placeholder="Input Your Country In Here"
                className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
              />
            </div>
          </form>
        </>
      ),
    },
    {
      mainTitle: "Investment Details :",
      title: "Desired Investment Tier:",
      desc: (
        <div className="space-y-3">
          <h1 className=" font-bold text-lg lg:text-lg">Tier 1:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 lg:text-lg">
            <h3 className="bg-[#141F5C] px-4 py-3">
              <span className="font-bold">Investment Range:</span> 5,000 to
              25,000 USDT
            </h3>
            <h3 className="bg-[#B8BDD6] text-black px-6 py-3 font-bold">
              APY: 10% to 13%
            </h3>
          </div>
          <h1 className=" font-bold text-lg lg:text-lg">Tier 2:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 lg:text-lg">
            <h3 className="bg-[#141F5C] px-4 py-3">
              <span className="font-bold">Investment Range:</span> 25,000 to
              50,000 USDT
            </h3>
            <h3 className="bg-[#B8BDD6] text-black px-6 py-3 font-bold">
              APY: 13% to 15%
            </h3>
          </div>
          <h1 className=" font-bold text-lg lg:text-lg">Tier 3:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 lg:text-lg">
            <h3 className="bg-[#141F5C] px-4 py-3">
              <span className="font-bold">Investment Range:</span> 50,000 to
              100,000 USDT
            </h3>
            <h3 className="bg-[#B8BDD6] text-black px-6 py-3 font-bold">
              APY: 15% to 18%
            </h3>
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-base">Amount to Invest (USDT) : </h1>
            <Input
              type="text"
              value={AmountInvest}
              onChange={(e) => setAmountInvest(e.currentTarget.value)}
              placeholder="Enter the desired amount"
              className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
            />
          </div>
        </div>
      ),
    },
    {
      mainTitle: "Payment Information :",
      title: "Preferred Payment Method:",
      desc: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-20">
            <div className="flex gap-x-2 items-center">
              <svg
                width={25}
                height={25}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4927 2.86683L28.4927 7.6668C28.9593 7.85347 29.3327 8.41346 29.3327 8.90679V13.3335C29.3327 14.0668 28.7327 14.6668 27.9993 14.6668H3.99935C3.26602 14.6668 2.66602 14.0668 2.66602 13.3335V8.90679C2.66602 8.41346 3.03936 7.85347 3.50602 7.6668L15.506 2.86683C15.7727 2.76017 16.226 2.76017 16.4927 2.86683Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3327 29.3335H2.66602V25.3335C2.66602 24.6001 3.26602 24.0001 3.99935 24.0001H27.9993C28.7327 24.0001 29.3327 24.6001 29.3327 25.3335V29.3335Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.33398 24.0001V14.6668"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.666 24.0001V14.6668"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24.0001V14.6668"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.334 24.0001V14.6668"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.666 24.0001V14.6668"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33398 29.3335H30.6673"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.3335C17.1046 11.3335 18 10.438 18 9.33347C18 8.2289 17.1046 7.33347 16 7.33347C14.8954 7.33347 14 8.2289 14 9.33347C14 10.438 14.8954 11.3335 16 11.3335Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input type="checkbox" className="hidden" />
              <span className="font-bold">Bank Transfer</span>
              <div
                onClick={() => setBankTransfer(!BankTransfer)}
                className="inline-flex items-center cursor-pointer"
              >
                <span
                  className={`w-5 ${
                    BankTransfer ? "bg-[#CD7B00]" : "border-2"
                  } h-5 flex items-center justify-center rounded-[4px] transition-colors`}
                >
                  {BankTransfer && (
                    <svg className="w-3 h-3 fill-current " viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <svg
                width={25}
                height={25}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6673 21.2934C30.6673 26.4534 26.494 30.6268 21.334 30.6268L22.734 28.2934"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.33398 10.6268C1.33398 5.46676 5.50732 1.29343 10.6673 1.29343L9.26732 3.62676"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.82617 17.4268H12.5728C13.3995 17.4268 14.0795 18.1735 14.0795 18.9335C14.0795 19.7601 13.4128 20.4401 12.5728 20.4401H8.82617V17.4268Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.82617 20.4402H13.1195C14.0662 20.4402 14.8395 21.1068 14.8395 21.9468C14.8395 22.7735 14.0662 23.4535 13.1195 23.4535H8.82617V20.4402Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.2266 23.4402V24.9335"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.2266 15.9335V17.4268"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.799 20.4402C19.799 24.9868 16.119 28.6668 11.5724 28.6668C7.02571 28.6668 3.3457 24.9868 3.3457 20.4402C3.3457 15.8935 7.02571 12.2134 11.5724 12.2134C11.7857 12.2134 11.9857 12.2268 12.2124 12.2401C16.2524 12.5468 19.479 15.7735 19.7857 19.8135C19.7857 20.0135 19.799 20.2135 19.799 20.4402Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.6662 11.5601C28.6662 16.1068 24.9862 19.7868 20.4396 19.7868H19.7862C19.4796 15.7468 16.2529 12.5201 12.2129 12.2134V11.5601C12.2129 7.01344 15.8929 3.33347 20.4396 3.33347C24.9862 3.33347 28.6662 7.01344 28.6662 11.5601Z"
                  stroke="#E8EAF2"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input type="checkbox" className="hidden" />
              <span className="font-bold">Crypto Wallet Transfer</span>
              <div
                onClick={() => setCryptoWalletTransfer(!CryptoWalletTransfer)}
                className="inline-flex items-center cursor-pointer"
              >
                <span
                  className={`w-5 ${
                    CryptoWalletTransfer ? "bg-[#CD7B00]" : "border-2"
                  } h-5  flex items-center justify-center rounded-[4px] transition-colors`}
                >
                  {CryptoWalletTransfer && (
                    <svg className="w-3 h-3 fill-current " viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-base">
              <span className="font-bold">Crypto Wallet Address</span> (If
              Applicable) :
            </h1>
            <Input
              type="text"
              value={WalletAddress}
              onChange={(e) => setWalletAddress(e.currentTarget.value)}
              placeholder="Please enter your wallet address"
              className="mt-4 bg-[#B8BDD6] placeholder:text-gray-500 text-black"
            />
          </div>
        </div>
      ),
    },
    {
      mainTitle: "Acknowledgment :",
      title: "",
      desc: (
        <div className="lg:font-medium">
          <p>
            • I acknowledge that I have read and agree to the
            <span className="underline font-bold mx-1 text-[#CD7B00]">
              Terms and Conditions
            </span>
            of the liquidity investment program.
          </p>
          <p>
            • I understand that investments are subject to market risks and the
            APY rates are estimates based on current market conditions.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <span className="md:w-1/3 w-full blur-[170px] z-10 absolute md:left-[-110px]  top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50] w-full"
        ></svg>
      </span>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-4 z-50 lg:max-w-[1440px] w-[90%] px-3 md:px-10 py-10 items-center relative mt-28 text-[#E8EAF2]">
          <div className="space-y-2">
            <h1 className="text-xl lg:text-[22px] mb-2 font-bold float-left w-full">
              Liquidity Investment Program Application Form
            </h1>
            <p className="text-[15px]">
              Welcome to the first step in elevating your investment portfolio
              through our assured APY returns. Please complete the form below to
              apply for our liquidity investment program. Your information will
              be kept confidential and used solely for investment purposes.
            </p>
          </div>
          {AssuredAPYData.map((pp, index) => {
            return (
              <div key={index} className="flex flex-col gap-5 mt-3 w-full z-50">
                <h1 className="text-xl lg:text-[22px]  font-bold float-left w-full">
                  {pp.mainTitle}
                </h1>
                <div
                  className={`"  odd:bg-[#0C1237] even:bg-[#0C1237] p-5 lg:p-7 space-y-4 `}
                >
                  {pp.title && (
                    <div
                      type="button"
                      className="flex items-center justify-between w-full text-lg lg:text-lg font-bold rounded-t-xl  gap-3"
                    >
                      <span className="self-start text-lg lg:text-lg text-start text-[#CD7B00] ">
                        {pp.title}
                      </span>
                    </div>
                  )}
                  <h3
                    className={`"text-[#E8EAF2] duration-700 overflow-hidden`}
                  >
                    {pp.desc}
                  </h3>
                </div>
              </div>
            );
          })}
          <button
            onClick={sendEmail}
            className="bg-[#CD7B00] hover:bg-[#CD7B00]/80  border-0 py-4 w-full  duration-300 rounded mt-3 font-medium text-sm md:text-base text-center"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssuredAPYForm;
