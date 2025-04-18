import React, { useState } from "react";
import { Link } from "react-router-dom";

// logo
import logoSecondary from "../assets/logoSecondary.svg";
import logoSecondaryDark from "../assets/logoSecondaryDark.svg";

import { networkList, vebSiteLegal, hotlineRating, footerContentLinks } from '../util/constants'
import TotalStatistics from "./TotalStatistics";

function Footer() {
  const [isStatistics, setIsStatistics] = useState(false)

  return (
    <>
      <div className='relative 2xl-mid:max-w-full footer__top__image__bft -z-10'></div>
      <footer
        className='min-h-[600px] h-full relative overflow-hidden pb-[30px] text-white footer__bft flex flex-col items-center justify-center bg-myGreen'
      >
        <div className='relative flex items-center md:items-start pt-[188px] z-10 '>
          <div className='w-[418px] pr-[100px] ml-[125px] mr-16 md:border-r md:border-r-white '>
            <img
              src={logoSecondary}
              alt="logo"
              className='w-full mb-7' />
            <h1 className='text-xl font-bold mb-9'>
              O‘zbekiston Respublikasi maktabgacha va maktab ta'limi vazirligi
            </h1>
            <h2 className='mb-12 text-xl font-thin'>
              100011, O‘zbekiston, Toshkent, Shayxontohur tumani, Navoiy ko‘chasi, 2A-uy
            </h2>
            <div>
              <ul>
                {
                  networkList.map(item => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className='flex items-center gap-5 py-4 text-3xl hover:text-primary'
                      >
                        {item.icon}
                        <span className='text-lg'>{item.title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div
            className='hidden md:block w-[324px] py-52 px-10 max-xl:pl-0'
          >
            <ul className='relative footer-ul__aft'>
              {
                vebSiteLegal.map(item => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className='py-4 font-bold hover:text-primary legal-link'
                    >
                      {
                        item.title
                      }
                    </Link>
                  </li>
                ))
              }
            </ul>

            <br />
            <br />
            <a href="https://www.uz/ru/res/visitor/index?id=1316">
              <img
                src="https://cnt0.www.uz/counter/collect?id=1316&r=https%3A//uzedu.uz/y3&pg=https%3A//uzedu.uz/uz&c=Y&j=N&wh=1536x864&px=24&js=1.3&col=F7AE00&t=ffffff&p=0E418F"
                alt="Топ рейтинг www.uz"
                width={88}
                height={31}
              />
            </a>

            <br />
            <br />
            <ul className='relative footer-ul__aft'>
              <h5 className='mb-4 text-xl'>Ishonch telefoni reytingi</h5>
              {
                hotlineRating.map(item => (
                  <li
                    key={item.id}
                    className='flex flex-col mb-4'
                  >
                    <span>
                      {item.ball} - {item.number}
                    </span>
                    <span>
                      {item.people}
                    </span>
                  </li>
                ))
              }
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='p-1 m-4 text-base cursor-pointer rounded-md bg-[#007bff] text-white hover:bg-[#0062cc] hover:text-[#4c4083] duration-200 transition-all'
                  onClick={() => setIsStatistics(true)}
                >
                  Batafsil
                </button>
              </div>
            </ul>
          </div>
          <div className='hidden lg:block w-[324px] py-52 px-10 max-xl:pl-0 relative footer__bottom__image_aft'>
            <ul className='relative'>
              {
                footerContentLinks.map(item => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className='relative flex items-center gap-3 py-4 text-xl font-bold hover:text-primary'
                    >
                      {item.icon}
                      <span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="relative z-20 pt-12 max-lg:max-w-[960px] ml-24 mx-auto">
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
            Saytdagi barcha materiallardan quyidagi lisenziya bo‘yicha foydalanish mumkin:
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
      {
        isStatistics ? <TotalStatistics setIsStatistics={setIsStatistics} /> : ''
      }
    </>
  )
}

export default Footer;
