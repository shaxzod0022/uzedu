import React, { useState } from "react";
import miniBanner from "../assets/miniBanner1.png";
import { styles } from "../util/styles";
import { firstCard } from "../util/constants";
import Button from "./Button";
const FirstCards = () => {
  const [hover, setHover] = useState(null);
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
      <ul className={`${styles.fArround} gap-8 w-full`}>
        {firstCard.map((item, idx) => (
          <li
            key={idx}
            className={`w-full h-[560px] sm:w-[45%] md:w-[30%] xl:w-[24%]`}
          >
            <a
              href={item.url}
              onMouseOver={() => setHover(item.url)}
              onMouseOut={() => setHover(null)}
              className={`${styles.fCol} w-full h-full items-center justify-between text-center bg-white rounded-3xl shadow-2xl xl:p-20 p `}
            >
              <div className={`${styles.fCol} items-center gap-2`}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.description.split(",")}</p>
              </div>
              <Button
                title={"Batafsil"}
                className={`w-full ${
                  hover === item.url && "bg-yellow-300 !text-myGreen"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstCards;
