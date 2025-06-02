import React from "react";
import { statistika } from "../assets/hodimlar2";
import { Navbar } from "../components";
import { styles } from "../util/styles";

const Statistika = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Fuqarolarning murojatlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="flex justify-center p-5">
          <img src={statistika} alt="statistika" />
        </div>
      </div>
    </>
  );
};

export default Statistika;
