import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";

const About = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div
        className={`mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full`}
      >
        <div className="mb-4">
          <h2 className={`${styles.heading2} mb-3`}>
            Samarqand viloyati maktabgacha va maktab ta'limi boshqarmasi haqida
          </h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <ul className="list-disc pl-5 py-5">
          <li>
            umumiy o‘rta va maktabdan tashqari ta’lim sohasida o‘quvchilarning
            ma’naviy-axloqiy, intellektual va jismoniy rivojlanishi darajasini
            yanada yuksaltirishga yo‘naltirilgan yagona davlat siyosatini ishlab
            chiqish va amalga oshirish;
          </li>
          <li>
            maktabdan tashqari ta’limga bo‘lgan umumiy o‘rta ta’lim davlat
            ta’lim standartlari va davlat talablariga muvofiq umumta’lim
            muassasalari faoliyatini metodik boshqarishni amalga oshirish;
          </li>
          <li>
            o‘qituvchi kasbining maqomi va obro‘sini ko‘tarish, umumta’lim
            muassasalari xodimlari, shuningdek, xalq ta’limi tizimi
            xodimlarining moddiy va ijtimoiy qo‘llab-quvvatlanishini ta’minlash,
            ularning samarali mehnat faoliyati uchun munosib sharoitlar
            yaratish;
          </li>
          <li>
            o‘quv-tarbiya jarayoniga ta’limning innovatsion shakllarini,
            zamonaviy pedagogik va axborot texnologiyalarini, kasbiy
            yo‘naltirishning samarali uslublarini, o‘quvchilarning o‘quv,
            psixologik va jismoniy yuklamalari optimallashuvini inobatga olgan
            holda o‘qitish va tarbiyalashni joriy qilish;
          </li>
          <li>
            umumta’lim muassasalarida chet tilini o‘qitishning samaradorligini
            ta’minlashga qaratilgan kompleks chora-tadbirlarni amalga oshirish;
          </li>
          <li>
            mazmun va sifat jihatidan xalqaro talablarga javob beradigan, yangi
            pedagogik va axborot-kommunikatsiya texnologiyalarini qo‘llagan
            holda yangilangan o‘quv rejalari va dasturlariga muvofiq ishlab
            chiqilgan o‘quv va o‘quv-metodik adabiyotlarning yangi avlodi
            yaratilishi va nashr etilishini tashkil qilish;
          </li>
          <li>
            nodavlat ta’lim xizmatlari sektorini yanada rivojlantirish, xalq
            ta’limi sohasida davlat-xususiy sheriklik uchun qulay sharoitlar
            yaratish; pedagogik kadrlarni tanlash, tayyorlash, qayta tayyorlash
            va ularning malakasini oshirish bo‘yicha ilg‘or va shaffof
            tashkiliy-huquqiy mexanizmlarni joriy etish;
          </li>
          <li>
            «Mehribonlik» uylari faoliyatini takomillashtirish, ota-onalar
            qarovisiz qolgan bolalarning ijtimoiy-psixologik reabilitatsiyasini
            va huquqiy himoya qilinishini ta’minlash, ularning ijtimoiy-mehnat
            ko‘nikmalarini hosil qilishiga va jamiyatga uyg‘unlashuviga
            ko‘maklashish;
          </li>
          <li>
            umumiy o‘rta va maktabdan tashqari ta’lim muassasalari tomonidan
            davlat ta’lim standartlari va talablarining bajarilishining tizimli
            monitoringini olib borish;
          </li>
          <li>
            umumta’lim muassasalarining 10-11-sinflari o‘quvchilariga kasb-hunar
            ta’limini ta’minlash bo‘yicha faoliyatni muvofiqlashtirish;
          </li>
          <li>
            xalq ta’limi tizimidagi muassasalarning moddiy-texnik bazasini
            mustahkamlash, ularning bino va inshootlaridan foydalanish bo‘yicha
            ishlar monitoringini olib borish va ushbu ishlarni
            muvofiqlashtirish.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
