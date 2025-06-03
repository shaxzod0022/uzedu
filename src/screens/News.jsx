import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";
import { useParams } from "react-router";
import { news } from "../util/constants";

const News = () => {
  const { id: newsId } = useParams();
  const data = news.find((i) => i.id === Number(newsId));

  return (
    <div>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div className="mb-5">
          <h2 className={`${styles.heading2}`}>Yangiliklar</h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div>
          <div className="mb-3">
            <img src={data.img} alt="" />
          </div>
          <h2 className={`${styles.heading3} mb-2`}>{data.title}</h2>
          <p className="text-lg">{data.info}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
