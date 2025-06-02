import React from "react";
import { qabul_qiluvchilar } from "../util/constants";
import { styles } from "../util/styles";
import { Navbar } from "../components";

const Murojatlar = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Fuqarolarning murojatlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className={`${styles.fCol} gap-8`}>
          {qabul_qiluvchilar.map((item) => (
            <div key={item.id} className={`${styles.fBetween} gap-5 w-full`}>
              <div className={`${styles.fBetween} gap-3 w-[40%]`}>
                <div className="w-[30%]">
                  <img
                    className="w-full h-44 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="w-[47%]">
                  <h2 className={`${styles.heading2} !capitalize`}>
                    {item.title}
                  </h2>
                  <p className="text-xl font-extralight">{item.info}</p>
                </div>
              </div>
              <p className="text-xl font-extralight">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Murojatlar;
