import React, { useState } from "react";
import { murojatlarBtn, qabul_qiluvchilar } from "../util/constants";
import { styles } from "../util/styles";
import {
  ElektronMurojat,
  HuquqiyAsos,
  KuribChiqish,
  Navbar,
  QabulQiluvchilar,
} from "../components";

const Murojatlar = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Fuqarolarning murojatlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className={`${styles.fBetween} mb-10 gap-2`}>
          {murojatlarBtn.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveBtn(item.id)}
              className={`shadow-md hover:scale-105 transition-all duration-200 py-3 px-8 ${
                activeBtn === item.id ? "bg-yellow-300" : "bg-myGreen"
              }  rounded-lg font-semibold text-lg text-white md:w-[23%] sm:w-[47%] w-full active:scale-95`}
            >
              {item.title}
            </button>
          ))}
        </div>
        {activeBtn === 1 ? (
          <QabulQiluvchilar />
        ) : activeBtn === 2 ? (
          <KuribChiqish />
        ) : activeBtn === 3 ? (
          <ElektronMurojat />
        ) : (
          <HuquqiyAsos />
        )}
      </div>
    </>
  );
};

export default Murojatlar;
