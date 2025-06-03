import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, ScrollToTop, SocialNetworksBar } from "./components";
import {
  About,
  Anjuman,
  BarkamolA,
  BoshqarmaTuzilmasi,
  DavlatRamzlari,
  ElektronDxx,
  Home,
  HududiyBoshqarma,
  Hujjatlar,
  MarkaziyApparat,
  Murojatlar,
  News,
  Raxbariyat,
  RaxbarlarHaqida,
  Rekvizitlar,
  Statistika,
  Terminlar,
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
        <Route path="/murojatlar" element={<Murojatlar />} />
        <Route path="/statistiks" element={<Statistika />} />
        <Route path="/anjuman" element={<Anjuman />} />
        <Route path="/hujjatlar" element={<Hujjatlar />} />
        <Route path="/terminlar" element={<Terminlar />} />
        <Route path="/barkamol_avlod" element={<BarkamolA />} />
        <Route path="/news/:id" element={<News />} />
      </Routes>
      <Footer />
      <SocialNetworksBar />
    </>
  );
};

export default AppRoutes;
