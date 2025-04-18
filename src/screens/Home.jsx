import React from "react";
import { Content, FirstCards, Footer, Head } from "../components";

const Home = () => {
  return (
    <div>
      <Head />
      <div className="bg_shape1">
        <Content />
        <FirstCards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
