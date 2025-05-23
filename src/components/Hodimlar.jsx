import React, { useState } from "react";
import { styles } from "../util/styles";
import { useNavigate } from "react-router";
import { hodimlar } from "../util/constants";

const Hodimlar = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();
  return (
    <div
      className={`mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full ${styles.fBetween} !items-start gap-2`}
    >
      {hodimlar.map((item) => (
        <div
          key={item.id}
          onMouseOver={() => setHover(item.id)}
          onMouseOut={() => setHover(null)}
          onClick={() => navigate(`/hodim/${item.id}`)}
          className={`${styles.fCol} p-12 cursor-pointer md:w-[30%] sm:w-[47%] w-full`}
        >
          <div className={`w-full`}>
            <img
              className={`w-full border-[10px] ${
                hover === item.id ? "border-myGreen" : "border-transparent"
              } transition-all duration-200 object-cover h-72`}
              src={item.image}
              alt={item.title}
            />
          </div>
          <>
            <h2
              className={`${styles.heading2} mb-5 capitalize font-extralight sm:h-40`}
            >
              {item.title}
            </h2>
            <p
              className={`${styles.paragraph} border-t-[2px] border-yellow-300 pt-4`}
            >
              {item.info}
            </p>
          </>
        </div>
      ))}
    </div>
  );
};

export default Hodimlar;
