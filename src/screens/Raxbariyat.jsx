import React from "react";
import { Boshliq, Hodimlar, Navbar } from "../components";

const Raxbariyat = () => {
  return (
    <div>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <Boshliq />
      <Hodimlar initialBrack={0} brack={4} />
    </div>
  );
};

export default Raxbariyat;
