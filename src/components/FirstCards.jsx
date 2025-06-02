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
        <p className="text-white text-xl md:text-left text-center">
          O‘quvchilarni umumta’lim maktablariga onlayn <br /> qabul qilish va
          boshqa maktabga o‘tkazish tizim
        </p>
        <a
          href="https://my.maktab.uz/"
          target="_blank"
          className={`${styles.button} bg-yellow-300 hover:!bg-green-900 text-myGreen hover:text-yellow-300 text-center`}
        >
          RO'YXATDAN <br /> O'TISH
        </a>
      </div>
      <ul
        className={`${styles.fArround} md:gap-4 gap-6 w-full max-w-[1640px] mx-auto px-4 lg:py-0 p-16 sm:px-6 lg:px-36 xl:px-14 `}
      >
        {firstCard.map((item, idx) => (
          <li
            key={idx}
            className={`w-full h-fit sm:w-[45%] sm:h-[430px] md:h-[480px] xl:w-full max-w-[350px]`}
          >
            <a
              href={item.url}
              onMouseOver={() => setHover(item.url)}
              onMouseOut={() => setHover(null)}
              className={`${styles.fCol} w-full h-full items-center justify-between text-center bg-white rounded-3xl shadow-2xl xl:p-16 md:p-12 p-8`}
            >
              <div className={`${styles.fCol} items-center gap-2 mb-3`}>
                <img src={item.img} alt="logo" />
                <h3 className={`font-bold text-xl uppercase`}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <Button
                title={"Batafsil"}
                className={`w-full uppercase ${
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
