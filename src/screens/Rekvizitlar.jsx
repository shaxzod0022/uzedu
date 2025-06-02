import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";

const Rekvizitlar = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-4">
          <h2 className={`${styles.heading2}`}>Rekvizitlar</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div>
          <h3 className={`${styles.heading3} mb-3`}>
            Samarqand viloyati Maktabgacha va maktab ta'limi boshqarmasi
          </h3>
          <p className={`${styles.paragraph} mb-3`}>
            Tashkilot manzili: Samarqand shahar Xasan Obidinov ko'chasi 7-uy
          </p>
          <p className={`${styles.paragraph} mb-3`}>INN: 201213194</p>
          <p className={`${styles.paragraph} mb-3`}>
            Tashkilot bank MFO: 00014
          </p>
          <p className={`${styles.paragraph} mb-3`}>
            Bank nomi: Markaziy bank Toshkent shahar bosh boshqarmasi
            hisob-kitob kassa markazi
          </p>
          <p className={`${styles.paragraph} mb-3`}>
            Hisob: 100021860184017092100072001
          </p>
        </div>
      </div>
    </>
  );
};

export default Rekvizitlar;
