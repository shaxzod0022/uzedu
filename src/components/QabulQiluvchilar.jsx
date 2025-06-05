import React from "react";
import { styles } from "../util/styles";
import { qabul_qiluvchilar } from "../util/constants";

const QabulQiluvchilar = () => {
  return (
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
              <h2 className={`${styles.heading2} !capitalize`}>{item.title}</h2>
              <p className="text-xl font-extralight">{item.info}</p>
            </div>
          </div>
          <p className="text-xl font-extralight">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default QabulQiluvchilar;
