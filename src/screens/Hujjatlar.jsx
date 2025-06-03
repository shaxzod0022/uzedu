import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";
import { hujjatlar } from "../util/constants";

const Hujjatlar = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Rasmiy hujjatlar toifalari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className={`${styles.fCol} gap-8 w-full py-8`}>
          {hujjatlar.map((item) => (
            <a
              href={item.url}
              target="_blank"
              key={item.id}
              className={`${styles.fStart} p-8 text-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              <span className="px-5 border-r-2 text-gray-400 border-gray-400">{item.id}</span>
              <span className="px-5">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hujjatlar;
