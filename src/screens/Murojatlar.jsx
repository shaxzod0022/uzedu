import React from "react";

const Murojatlar = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div>
          <h2 className={`${styles.heading2}`}>
            Elektron davlat xizmatlari reesti
          </h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="p-5 flex items-center justify-center">
          Bu yerda jadval bo'ladi
        </div>
      </div>
    </>
  );
};

export default Murojatlar;
