import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Index";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CustomerAgreement from "./Pages/CustomerAgreement";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import CryptoOTCTradingPlatform from "./Pages/CryptoOTCTradingPlatform";
import AssuredAPYClick from "./Pages/AssuredAPYClick";
import CryptoATMMachine from "./Pages/CryptoATMMachine";
import AssuredAPY from "./Pages/AssuredAPY";
import { useState } from "react";
import AssuredAPYForm from "./Pages/AssuredAPYForm";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/Customer-Agreement" element={<CustomerAgreement />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Crypto-ATM-Machine" element={<CryptoATMMachine />} />
          <Route path="/Assured-APY-Click" element={<AssuredAPYClick />} />
          <Route path="/Assured-APY" element={<AssuredAPY />} />
          <Route path="/Assured-APY-Form" element={<AssuredAPYForm />} />
          <Route
            path="/Crypto-OTC-Trading-Platform"
            element={<CryptoOTCTradingPlatform />}
          />
        </Routes>
      </BrowserRouter>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-[999999] lg:hover:scale-90 duration-300 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 512"
          width="50px"
          height="50px"
          fill="#162B9A"
        >
          <path
            fillRule="nonzero"
            d="M256 512c70.684 0 134.695-28.658 181.019-74.981C483.342 390.695 512 326.691 512 256s-28.658-134.695-74.981-181.019C390.695 28.658 326.691 0 256 0S121.305 28.658 74.981 74.981C28.658 121.305 0 185.309 0 256s28.658 134.695 74.981 181.019C121.305 483.342 185.309 512 256 512zm-79.003-200.641c-30.983 17.861-46.316-6.963-29.012-25.063l88.741-101.046c16.129-16.136 22.426-16.136 38.563 0l88.741 101.046c17.18 18.187 2.203 42.867-29.02 25.063l-79.003-46.932-79.01 46.932z"
          />
        </svg>

        <span className="sr-only">Back to Top</span>
      </button>
    </>
  );
};
export default App;
