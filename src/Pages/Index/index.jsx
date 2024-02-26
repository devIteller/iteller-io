import { useEffect } from "react";
import ContentSec from "../../Components/ContentSec/ContentSec";
import Feature from "../../Components/Feature/Feature";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Insights from "../../Components/Insights/Insights";
import ReceiveInsights from "../../Components/ReceiveInsights/ReceiveInsights";
import SliderSec from "../../Components/SliderSec/SliderSec";
import { useLocation } from "react-router-dom";

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#insights") {
      const insightsElement = document.getElementById("insights");
      if (insightsElement) {
        insightsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <>
      <Header />
      <Hero />
      <ContentSec />
      <Feature />
      <Insights />
      <ReceiveInsights />
      <SliderSec />
      <Footer />
    
    </>
  );
}
