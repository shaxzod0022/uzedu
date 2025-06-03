import React from "react";
import { navBottomLinks, navTopLinks } from "../util/constants";

const SaidBar = ({ newClass }) => {
  return (
    <div
      className={`${
        newClass ? "-left-[130%] top-28" : "top-28 left-0"
      } bg-myGreen transition-all duration-200 ease-in-out xl:hidden block absolute  z-50 w-full`}
    >
      <ul
        className={`flex flex-col !z-50 items-center gap-6 xl:text-md text-[12px] p-5`}
      >
        {navTopLinks.map((link, idx) => (
          <li key={idx}>
            <a
              className={`text-white py-3 hover:text-yellow-300`}
              href={link.url}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <hr className="w-full h-[2px] bg-white rounded-md my-3" />
      <ul className={`flex flex-col items-center gap-7 text-md px-10`}>
        {navBottomLinks.map((link, idx) => (
          <li key={idx} className="w-[300px]">
            <ul className={`px-3 flex flex-col items-center w-full`}>
              {link.links.map((link2, idx2) => (
                <li key={idx2} className={`w-full mb-3 text-center`}>
                  <a
                    href={link2.url}
                    className={`text-white w-full hover:text-yellow-300`}
                  >
                    {link2.linkTitle}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaidBar;
