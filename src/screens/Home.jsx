import React from "react";
<<<<<<< HEAD
import { Content, FirstCards, Footer, Head } from "../components";
import SocialNetworksBar from "../components/SocialNetworksBar";
import EducationSuggestions from "../components/EducationSuggestions";
=======
import {
  Content,
  FirstCards,
  Footer,
  Head,
  SocialNetworksBar,
} from "../components";
>>>>>>> 00bd80e213d7aa6f0304acee278e2411041512ef

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
