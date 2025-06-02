import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";

const Anjuman = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Matbuot anjumanlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="">
          <h2 className={`${styles.heading2} mb-5`}>
            ❗️JURNALIST VA BLOGЕRLAR DIQQATIGA!
          </h2>
          <p className={`${styles.paragraph} mb-4`}>
            Joriy yilning 4-iyun kuni soat 14:00 da Samarqand viloyati
            Maktabgacha va maktab ta’limi boshqarmasi tomonidan viloyat Matbuot
            uyida Prezident, ijod va sport maktablari hamda ixtisoslashtirilgan
            maktablarga qabul boshlanganligi munosabati bilan  matbuot  anjumani
            tashkil etiladi.
          </p>
          <p className={`${styles.paragraph} mb-4`}>
            🔗Bundan tashqari matbuot anjumanida viloyat Maktabgacha va maktab
            ta’limi boshqarmasi boshlig‘i M.Hamdamov tomonidan  tizimda amalga
            oshirilgan ishlar muammo va yutuqlar, shuningdek, "Dolzarb 90 kun"
            dasturi bo‘yicha  ma’lumotlar beriladi.
          </p>
          <p className={`${styles.paragraph}`}>
            🖌Samarqand viloyati Maktabgacha va maktab ta’limi boshqarmasi
            axborot xizmati  
          </p>
        </div>
      </div>
    </>
  );
};

export default Anjuman;
