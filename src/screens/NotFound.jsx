import React from "react";
import { styles } from "../util/styles";
import { Navbar } from "../components";

const NotFound = () => {
  return (
    <div>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}></h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <h2 className={`${styles.heading2} text-center py-10`}>Ma'lumotlar tayyorlanmoqda</h2>
      </div>
    </div>
  );
};

export default NotFound;
