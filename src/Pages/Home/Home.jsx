import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Feature from "../../components/Feature/Feature";
import chat from "../../assets/icon-chat.png";
import money from "../../assets/icon-money.png";
import security from "../../assets/icon-security.png";
import "./home.scss";
import "../../utils/reset.scss";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="features">
        <Feature
          logo={chat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          logo={money}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be! "
        />
        <Feature
          logo={security}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe. "
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
