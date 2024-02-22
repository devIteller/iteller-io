import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Index";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CustomerAgreement from "./Pages/CustomerAgreement";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import CryptoOTCTradingPlatform from "./Pages/CryptoOTCTradingPlatform";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Customer-Agreement" element={<CustomerAgreement />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route
          path="/Crypto-OTC-Trading-Platform"
          element={<CryptoOTCTradingPlatform />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
