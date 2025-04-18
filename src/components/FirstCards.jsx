import React from "react";
import miniBanner from "../assets/miniBanner1.png";
import { styles } from "../util/styles";
const FirstCards = () => {
  return (
    <div className="p-5">
      <div
        className={`max-w-[1640px] mx-auto my-8 px-4 lg:py-0 p-16 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full ${styles.fBetween} sm:flex-row flex-col gap-4 bg-myGreen rounded-2xl`}
      >
        <img src={miniBanner} className="w-[35%] lg:block hidden" alt="" />
        <p className="text-white text-xl">
          Процесс онлайн-приема детей в 1 класс <br /> общеобразовательных школ
          начнется <br /> c 20 июня 2024 года в 12:00
        </p>
        <a
          href="https://my.maktab.uz/"
          target="_blank"
          className={`${styles.button} bg-yellow-300 hover:!bg-green-900 text-myGreen hover:text-yellow-300 text-center`}
        >
          RO'YXATDAN <br /> O'TISH
        </a>
      </div>
    </div>
  );
};

export default FirstCards;
