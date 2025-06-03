import React from "react";
import { Link } from "react-router-dom";

// logo
import logoSecondary from "../assets/samvillogofull.jpg";

import {
  networkList,
  vebSiteLegal,
  footerContentLinks,
} from "../util/constants";
import { Send } from "lucide-react";

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="min-h-[600px] h-full relative overflow-hidden pb-[30px] flex flex-col items-center justify-center text-white bg-myGreen footer__bft"
      >
        <div className="relative flex flex-wrap lg:flex-nowrap items-center lg:items-start justify-center lg:justify-between pt-[60px] mx-auto z-10 w-full px-4 sm:px-16">
          {/* 1st Column */}
          <div className="w-full sm:w-[418px] sm:pr-[100px] sm:ml-[125px] sm:mr-16 border-r border-r-white mb-8 sm:mb-0">
            <img
              src={logoSecondary}
              alt="logo"
              className="sm:w-1/2 w-full mb-7"
            />
            <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-9 text-center sm:text-left">
              Samarqand viloyati maktabgacha va maktab ta'limi boshqarmasi
            </h1>
            <h2 className="mb-8 sm:mb-12 text-xl font-thin text-center sm:text-left">
              Samarqand shaxar, X. Obiddinov ko'chasi 1-uy
            </h2>
          </div>
          {/* 2nd Column */}
          <div>
            <ul className="text-center sm:text-left">
              <Link
                target="_blank"
                to={"https://t.me/sammmtb_bot"}
                className="flex items-center justify-center sm:justify-start gap-5 py-3 text-2xl hover:text-[#f0f220]"
              >
                <Send />
                <span className="text-lg">Murojat uchun</span>
              </Link>
              {networkList.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    target="_blank"
                    className="flex items-center justify-center sm:justify-start gap-5 py-3 text-2xl hover:text-[#f0f220]"
                  >
                    {item.icon}
                    <span className="text-lg">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 3rd Column */}
          <div className="w-full sm:w-[324px] px-10">
            <ul className="relative">
              {footerContentLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="relative flex items-center gap-3 py-3 text-xl font-bold hover:text-[#f0f220] justify-center sm:justify-start"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2919.9343036855885!2d66.932172!3d39.65127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzA0LjYiTiA2NsKwNTUnNTUuOCJF!5e1!3m2!1suz!2s!4v1748932915074!5m2!1suz!2s"
              width="300"
              height="250"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="relative z-20 pt-12 max-w-[960px] mx-auto text-center"></div>
      </footer>
    </>
  );
}

export default Footer;
