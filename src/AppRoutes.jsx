import React from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components";
import { Home } from "./screens";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
