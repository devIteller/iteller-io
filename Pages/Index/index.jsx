import { useEffect } from "react";
import ContentSec from "../../Components/ContentSec/ContentSec";
import Feature from "../../Components/Feature/Feature";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Insights from "../../Components/Insights/Insights";
import ReceiveInsights from "../../Components/ReceiveInsights/ReceiveInsights";
import SliderSec from "../../Components/SliderSec/SliderSec";

export default function Landing() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 300);
  }, []);
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
