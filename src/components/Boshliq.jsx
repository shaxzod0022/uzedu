import React, { useState } from "react";
import { styles } from "../util/styles";
import boshliq from "../assets/samvilmttbosh.jpg";
import { useNavigate } from "react-router";

const Boshliq = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full`}>
      <div>
        <h2 className={`${styles.heading2} mb-3`}>Rahbariyat</h2>
        <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
      </div>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`${styles.fArround} p-12 cursor-pointer`}
      >
        <div className={`sm:w-[47%] w-full flex items-center justify-center`}>
          <img
            className={`lg:w-[50%] w-[80%] border-[10px] ${
              hover ? "border-myGreen" : "border-transparent"
            } transition-all duration-200`}
            src={boshliq}
            alt="Samarqand viloyati Maktabgacha va maktab ta’limi boshqarmasi boshlig‘i"
          />
        </div>
        <div className={`sm:w-[47%] w-full relative`}>
          <h2
            className={`${styles.heading2} font-extralight lg:mb-40 sm:mb-16 mb-5`}
          >
            Xamdamov <br /> Muzaffar <br /> Yazdonqulovich
          </h2>
          <p className="bg-yellow-300 absolute -z-10 sm:-left-40 left-0 sm:w-[140%] w-full h-[3px]"></p>
          <div>
            <p className={`${styles.paragraph}`}>
              Samarqand viloyati Maktabgacha va maktab ta’limi boshqarmasi
              boshlig‘i
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boshliq;
