import React, { useEffect } from "react";
import { useParams } from "react-router";

const ScrollToTop = () => {
  const pathname = useParams().pathname;
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    handleScrollToTop();
  }, [pathname]);
  return null;
};

export default ScrollToTop;
