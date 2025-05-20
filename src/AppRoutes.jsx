import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, ScrollToTop } from "./components";
import { Home, Raxbariyat, RaxbarlarHaqida } from "./screens";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raxbariyat" element={<Raxbariyat />} />
        <Route path="/hodim/:id" element={<RaxbarlarHaqida />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
