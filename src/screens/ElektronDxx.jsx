import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";

const ElektronDxx = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div>
          <h2 className={`${styles.heading2}`}>Elektron davlat xizmatlari</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="p-5 flex items-center justify-center">
            hello
        </div>
      </div>
    </>
  );
};

export default ElektronDxx;
