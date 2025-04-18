import React from "react";
import {
  About,
  Content,
  EducationSuggestions,
  FirstCards,
  Footer,
  Head,
  SocialNetworksBar,
} from "../components";

const Home = () => {
  return (
    <div>
      <Head />
      <div className="bg_shape1 max-w-[3000px] mx-auto">
        <Content />
        <FirstCards />
      </div>
      <About />
      <div>
        <EducationSuggestions />
      </div>
      <Footer />
      <SocialNetworksBar />
    </div>
  );
};

export default Home;
