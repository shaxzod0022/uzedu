import React from "react";
import { Content, FirstCards, Footer, Head, SocialNetworksBar, EducationSuggestions } from "../components";

const Home = () => {
  return (
    <div>
      <Head />
      <div className="bg_shape1">
        <Content />
        <FirstCards />
      </div>
      <div>
        <EducationSuggestions />
      </div>
      <Footer />
      <SocialNetworksBar />
    </div>
  );
};

export default Home;
