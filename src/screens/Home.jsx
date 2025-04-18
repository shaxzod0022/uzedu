import React from "react";
import { Content, FirstCards, Footer, Head } from "../components";
import SocialNetworksBar from "../components/SocialNetworksBar";
import EducationSuggestions from "../components/EducationSuggestions";

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
