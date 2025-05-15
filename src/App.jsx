import React from "react";
import style from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-primary w-full  overflow-hidden lg:px-32">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}><Navbar/></div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* -------------------------------- */}

      <div className={`bg-primary ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
