import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, ScrollToTop, SocialNetworksBar } from "./components";
import {
  About,
  BoshqarmaTuzilmasi,
  ElektronDxx,
  Home,
  HududiyBoshqarma,
  MarkaziyApparat,
  Raxbariyat,
  RaxbarlarHaqida,
} from "./screens";

const AppRoutes = () => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raxbariyat" element={<Raxbariyat />} />
        <Route path="/about" element={<About />} />
        <Route path="/boshqarma_tuilmasi" element={<BoshqarmaTuzilmasi />} />
        <Route path="/ekektron-dxx" element={<ElektronDxx />} />
        <Route path="/hodim/:id" element={<RaxbarlarHaqida />} />
        <Route path="/boshqarma-hodimlari" element={<HududiyBoshqarma />} />
        <Route path="/markaziy-aparat" element={<MarkaziyApparat />} />
      </Routes>
      <Footer />
      <SocialNetworksBar />
    </>
  );
};

export default AppRoutes;
