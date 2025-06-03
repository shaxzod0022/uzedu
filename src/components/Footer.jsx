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
          {/* <div className="w-full sm:w-[324px] py-8 sm:py-12 px-10 mb-8 sm:mb-0">
            <ul className="relative lg:footer-ul__aft text-center sm:text-left">
              {vebSiteLegal.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="py-4 font-bold hover:text-[#f0f220] legal-link"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
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
        </div>
        <div className="relative z-20 pt-12 max-w-[960px] mx-auto text-center">
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.creativecommons.org/l/by/4.0/80x15.png"
              alt="Creative Commons License"
              className="inline-block"
            />
          </a>
          <br />
          <span>
            Saytdagi barcha materiallardan quyidagi lisenziya bo‘yicha
            foydalanish mumkin:
          </span>
          <Link
            to="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 transition-colors hover:text-primary"
          >
            Creative Commons Attribution 4.0 International
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
