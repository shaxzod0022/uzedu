import React from "react";
import { Link } from "react-router-dom";

// logo
import logoSecondary from "../assets/logoSecondary.svg";
import logoSecondaryDark from "../assets/logoSecondaryDark.svg";

// icons import
import { Phone, Mail, Facebook, Send, Instagram, Youtube } from "lucide-react";

function Footer() {
  // network list
  const networkList = [
    {
      id: 1,
      icon: <Phone />,
      title: "(71) 202 09 09",
      link: "#",
    },
    {
      id: 2,
      icon: <Mail />,
      title: "info@uzedu.uz",
      link: "#",
    },
    {
      id: 3,
      icon: <Facebook />,
      title: "@uzedu",
      link: "#",
    },
    {
      id: 4,
      icon: <Send />,
      title: "@uzedu",
      link: "#",
    },
    {
      id: 5,
      icon: <Instagram />,
      title: "/uzedu",
      link: "#",
    },
    {
      id: 6,
      icon: <Youtube />,
      title: "/uzedu",
      link: "#",
    },
  ];

  return (
    <footer className="min-h-[600px] h-full relative overflow-hidden pb-[30px] text-white">
      <div className="relative flex pt-[188px] bg-myPurple z-10">
        <div className="w-[418px] pr-[100px] ml-[125px] border-r border-r-white">
          <img src={logoSecondary} alt="logo" className="w-full mb-7" />
          <h1 className="text-xl font-bold mb-9">
            O‘zbekiston Respublikasi maktabgacha va maktab ta'limi vazirligi
          </h1>
          <h2 className="mb-12 text-xl font-thin">
            100011, O‘zbekiston, Toshkent, Shayxontohur tumani, Navoiy ko‘chasi,
            2A-uy
          </h2>
          <div>
            <ul>
              {networkList.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="text-lg text-white">
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
