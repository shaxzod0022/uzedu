import React from "react";
import { styles } from "../util/styles";

const HuquqiyAsos = () => {
  return (
    <div className={`${styles.fCol} gap-3 mb-5`}>
      <a
        className="hover:text-yellow-300 transition-all duration-200"
        href="https://lex.uz/docs/-3336169"
      >
        “Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida”gi
        O‘zbekiston Respublikasi Qonuniga o‘zgartish va qo‘shimchalar kiritish
        haqida
      </a>
      <a
        className="hover:text-yellow-300 transition-all duration-200"
        href="https://old.uzedu.uz/uploads/2022/04/123-ilova.pdf"
      >
        Xalq taʼlimi vazirligi hamda tizimdagi tashkilot va muassasalarda
        jismoniy va yuridik shaxslarning murojaatlari bilan ishlash tartibi
        to‘g‘risida namunaviy nizom
      </a>

      <a className="hover:text-yellow-300 transition-all duration-200" href="">
        "Ustoz ovozi"
      </a>
    </div>
  );
};

export default HuquqiyAsos;
