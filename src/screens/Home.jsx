import React from "react";
import {
  Content,
  FirstCards,
  Footer,
  Head,
  SocialNetworksBar,
} from "../components";

const Home = () => {
  return (
    <div>
      <Head />
      <div className="bg_shape1">
        <Content />
        <FirstCards />
      </div>
      <Footer />
      <SocialNetworksBar />
    </div>
  );
};

export default Home;
