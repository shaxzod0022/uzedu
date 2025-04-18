import { Menu } from "lucide-react";
import { styles } from "../util/styles";
import { navBottomLinks, navTopLinks } from "../util/constants";
import { useState } from "react";
import logo from "../assets/logoDark.svg";

const Navbar = () => {
  const [hover, setHover] = useState(null);
  const [lang, setLang] = useState("o'z");
  return (
    <div
      className={`max-w-[1640px] mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full ${styles.fBetween}`}
    >
      <button
        className={`border xl:hidden block p-4 transition-all duration-200 text-white hover:bg-yellow-300 hover:text-myGreen`}
      >
        <Menu />
      </button>
      <a href="/" className="bg-yellow-300 2xl:p-8 p-5 xl:block hidden">
        <img src={logo} alt="logo" className="2xl:w-32 w-24" />
      </a>
      <div className={`flex items-center`}>
        <div className="xl:block hidden">
          <ul
            className={`flex !z-50 justify-center flex-wrap items-center gap-6 xl:text-md text-[12px] px-10`}
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
          <ul
            className={`flex justify-center flex-wrap items-center gap-7 text-md px-10`}
          >
            {navBottomLinks.map((link, idx) => (
              <li
                key={idx}
                className={`relative`}
                onMouseOver={() => setHover(link.id)}
                onMouseOut={() => setHover(null)}
              >
                <span
                  className={`cursor-pointer text-white hover:text-yellow-300`}
                >
                  {link.title}
                </span>
                <ul
                  className={`border ${
                    hover === link.id ? "block" : "hidden"
                  } border-yellow-300 w-[170px] top-6 -left-6 bg-myGreen absolute px-3`}
                >
                  {link.links.map((link2, idx2) => (
                    <li
                      key={idx2}
                      className={`border-b-2 border-yellow-300 py-2 w-full`}
                    >
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
        <button
          onClick={() => setLang((i) => (i === "o'z" ? "ru" : "o'z"))}
          className={`border transition-all duration-200 p-4 text-white hover:bg-yellow-300 hover:text-myGreen font-semibold uppercase`}
        >
          {lang}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
