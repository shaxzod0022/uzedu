import React from "react";
import logo from "../assets/logoSecondaryDark.svg";
import Button from "./Button";
import { Headset, MailOpen } from "lucide-react";
import { styles } from "../util/styles";
const Content = () => {
  return (
    <div
      className={`max-w-[1640px] mx-auto p-4 sm:px-6 xl:py-16 py-8 lg:px-8 xxl:w-full sm:w-[80%] w-full ${styles.fBetween} sm:flex-row flex-col gap-4`}
    >
      <img
        src={logo}
        className="xl:w-[20%] md:w-[30%] sm:w-[40%] w-[80%]"
        alt="logo"
      />
      <a
        href="/"
        className={`${styles.fBetween} rounded-lg bg-yellow-300 hover:bg-myGreen hover:text-yellow-300 transition-all duration-100 text-myGreen p-4 text-md xl:text-2xl sm:text-lg font-semibold !flex-nowrap gap-3`}
      >
        <MailOpen className="w-10 h-10" />
        <span>
          Maktabgacha va maktab ta’limi vaziriga <br /> murojaat va
          takliflaringizni yuboring!
        </span>
      </a>
      <div className={`${styles.fBetween} gap-1`}>
        <div>
          <p className="font-bold text-xl">Ishonch telefoni</p>
          <p className="mb-2 text-lg">(71) 202 09 09</p>
          <Button title={"Baholash"} className={"!py-1 !px-5 !font-normal"} />
        </div>
        <Headset size={55} className="text-myGreen" />
      </div>
    </div>
  );
};

export default Content;
