import React from "react";
import { styles } from "../util/styles";
import nootebok from "../assets/notebook.png";

const About = () => {
  return (
    <div
      className={`max-w-[1640px] mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full ${styles.fBetween}`}
    >
      <div className={`f-full md:w-[45%]`}>
        <h2 className="text-3xl font-bold text-myGreen mb-4">
          Agar siz maktabga bora olmasangiz, maktab sizning uyingizga kelishi
          mumkin.
        </h2>
        <p className="text-lg text-myGreen font-light mb-10">
          Maktab.uz - bu xalqaro standartlarga javob beradigan va maktab
          o'quvchilari uchun yuqori sifatli uzluksiz masofaviy ta'limni
          ta'minlaydigan ilg'or raqamli ta'lim texnologiyasi. Platforma
          o'qituvchilarga ham, ota -onalarga ham o'quvchilarning rivojlanish
          darajasini kuzatish va mavzular mazmuni bilan tanishish uchun keng
          imkoniyatlar beradi.
        </p>
        <a
          href="https://maktab.uz/"
          className={`${styles.button} !py-4 !px-10 uppercase !text-sm`}
        >
          Batafsil
        </a>
      </div>
      <div className={`f-full md:w-[45%]`}>
        <img className="w-full" src={nootebok} alt="" />
      </div>
    </div>
  );
};

export default About;
