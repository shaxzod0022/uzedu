import React from "react";
import { styles } from "../util/styles";
import { Hodimlar, Navbar } from "../components";
import { boshqarma_tuzilmasi } from "../assets/hodimlar2";

const BoshqarmaTuzilmasi = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div>
          <h2 className={`${styles.heading2}`}>Boshqarma tuzilmasi</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="p-5 flex items-center justify-center">
          <img
            className="w-full sm:w-[80%]"
            src={boshqarma_tuzilmasi}
            alt="boshqarma tuzilmasi rasmi"
          />
        </div>
      </div>
    </>
  );
};

export default BoshqarmaTuzilmasi;
