import React, { useState } from "react";
import { news } from "../util/constants";
import { ArrowRight } from "lucide-react";
import { styles } from "../util/styles";

const News = () => {
  const [hover, setHover] = useState(null);
  return (
    <div
      id="news"
      className={`${styles.fBetween} gap-7 w-full max-w-[1640px] mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%]`}
    >
      {news.map((item, idx) => (
        <a
          href={item.url}
          key={idx}
          className={`shadow-lg bg-white w-full sm:w-[45%] xl:w-full max-w-[350px] hover:scale-105 transition-all rounded-md duration-200`}
          onMouseOver={() => setHover(item.url)}
          onMouseOut={() => setHover(null)}
        >
          <img
            className="w-full object-cover rounded-t-md"
            src={item.img}
            alt=""
          />
          <div className={`p-4`}>
            <p className="text-center text-xl font-extralight mb-6">
              {item.title.slice(0, 100)}...
            </p>
            <div className={`${styles.fBetween}`}>
              <span className="text-md text-slate-400">{item.date}</span>
              <span>
                <ArrowRight
                  size={40}
                  className={`${
                    hover === item.url ? "text-myGreen" : "text-yellow-300"
                  } font-bold`}
                />
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
