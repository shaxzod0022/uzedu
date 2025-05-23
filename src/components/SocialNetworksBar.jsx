import React from "react";
import { Link } from "react-router-dom";

import { networkList } from "../util/constants";

function SocialNetworksBar() {
  return (
    <div className="w-[50px] fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
      {networkList
        .filter((i) => i.id !== 1)
        .map((item, index) => (
          <div key={item.id} className="h-11 group">
            <Link
              to={item.link}
              target="_blank"
              className={`text-primary bg-myGreen opacity-80 py-2.5 pr-4 pl-1.5 absolute flex items-center transition-all duration-200 ease-linear hover:text-myGreen hover:bg-primary hover:opacity-100 
                            ${index === 0 ? "rounded-tr-lg" : ""}
                            ${index === 4 ? "rounded-br-lg" : ""}
              `}
            >
              <span className="mr-2.5 w-0 group-hover:w-full  transition-all duration-200 ease-linear overflow-hidden">
                {item.title}
              </span>
              <span className="text-2xl">{item.icon}</span>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SocialNetworksBar;
