import React from "react";
import { Boshliq, Hodimlar, Navbar } from "../components";

const Raxbariyat = () => {
  return (
    <div>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <Boshliq />
      <Hodimlar />
    </div>
  );
};

export default Raxbariyat;
