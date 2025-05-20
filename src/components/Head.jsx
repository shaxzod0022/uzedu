import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { styles } from "../util/styles";
import logoWhite from "../assets/samvillogofull.jpg";
import { headSlide } from "../util/constants";
import { ChevronRight } from "lucide-react";
import bottomWhiteImg from "../assets/mainHeaderBottomShape.svg";

const Head = () => {
  const cardWidth = 200;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headSlide.length);
  };

  const extendedSlides = [...headSlide, ...headSlide];
  return (
    <div className="relative pb-32 bg__image">
      <Navbar />
      <div
        className={`flex xl:justify-between xl:flex-row flex-col items-center max-w-[1640px] mx-auto px-8 xl:my-10 sm:px-10 lg:px-24 xxl:w-full sm:w-[80%] w-full`}
      >
        <div className="xl:backdrop-blur-sm xl:bg-myGreen/30 xl:py-[70px] xl:px-[50px] xl:w-[40%] w-32 xl:border xl:border-white xl:mr-32 bef__aft z-10">
          <img src={logoWhite} className="w-full" alt="" />
        </div>
        <div>
          <h1
            className={`${styles.heading1} text-white xl:text-left text-center xl:my-0 my-8 xl:mb-16`}
          >
            Samarqand viloyati maktabgacha va maktab ta'limi vazirligi
          </h1>
          <div className={`flex flex-col xl:text-left text-right`}>
            <i className={`xl:text-lg text-sm text-white`}>
              Ta’lim va tarbiyaning asosi, poydevori bu – maktab. Maktabni
              maktab qiladigan kuch esa o‘qituvchilardir
            </i>
            <br />
            <i className="font-bold text-white underline xl:text-lg text-md">
              Shavkat Mirziyoyev
            </i>
          </div>
        </div>
      </div>
      <div className="max-w-[650px] xl:w-full w-[80%] overflow-hidden mx-auto btn__aft mt-10">
        <div className="relative w-full">
          <ul
            className="flex gap-4 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + 16)}px)`,
              width: `${extendedSlides.length * (cardWidth + 16)}px`,
            }}
          >
            {extendedSlides.map((slid, idx) => (
              <li
                key={idx}
                className={`${styles.fCol} !z-30 items-center justify-center w-[200px] gap-2 text-white md:border-r border-white h-40 flex-shrink-0`}
              >
                <span className="text-2xl font-extrabold">{slid.number}</span>
                <span className="text-lg text-center">{slid.title}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            className="absolute px-4 py-1 text-white -translate-y-1/2 rounded-full top-1/2 -right-6"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <img
        className="absolute bottom-0 z-0 xl:left-[25%]"
        src={bottomWhiteImg}
        alt="uzeduuz"
      />
    </div>
  );
};

export default Head;
