import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, ScrollToTop, SocialNetworksBar } from "./components";
import {
  About,
  BoshqarmaTuzilmasi,
  DavlatRamzlari,
  ElektronDxx,
  Home,
  HududiyBoshqarma,
  MarkaziyApparat,
  Raxbariyat,
  RaxbarlarHaqida,
  Rekvizitlar,
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
        <Route path="/elektron-dxx" element={<ElektronDxx />} />
        <Route path="/davlat-ramzlari" element={<DavlatRamzlari />} />
        <Route path="/rekvizitlar" element={<Rekvizitlar />} />
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
