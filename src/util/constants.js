import {
  Phone,
  Mail,
  Facebook,
  Send,
  Instagram,
  Youtube,
  MessageSquare,
  Database,
  LocateFixed,
} from "lucide-react";

// import image
import student from "../assets/student.jpg";
import femily from "../assets/family.jpg";
import teacher from "../assets/teacher.jpg";
import school from "../assets/school.jpg";
import mainIcon1 from "../assets/mainIcon1.svg";
import mainIcon2 from "../assets/mainIcon2.svg";
import mainIcon3 from "../assets/mainIcon3.svg";
import ochiqAxborotlarProtali from "../assets/1SO_XkcIAlylxxP3frNdOk3Zi-InN7i2.jpg";
import gerb from "../assets/HtHyhPqDo4iM8wByOjzbFdsRieQLuBnv.jpg";
import taraqiyot from "../assets/mEPUPAMz2RMOw1DCqY-AlFV03hPzTgeV.jpg";
import qonunHujatlari from "../assets/tDoD07ZpAtOMsYNJAQdrDlZ7OsHUygKC.jpg";
import davlatAktivlari from "../assets/he_2F_zDKDSjGMFaSrGQ--Y_Rh2Ujrq7.jpg";
import hukumatPortal from "../assets/ahrolQvWUhkWxys9o4VZXRE3NMelkb5h.jpg";
import mygov from "../assets/ja31-w3afFEFnRsPI3Yea6k9tSNIK-xH.jpg";
import bolalarKutubxonasi from "../assets/cXc8OOZLrpuhFYRXvNWJQ5GoYOeM88E6.jpg";

export const footerLinks = {
  title: "Bog'lanish",
  links: [
    {
      url: "",
      // linkTitle: telegram,
      title: "Telegram",
    },
    {
      url: "",
      // linkTitle: instagram,
      title: "Instagram",
    },
    {
      url: "",
      // linkTitle: whatsapp,
      title: "Whatsapp",
    },
    {
      url: "",
      // linkTitle: youtube,
      title: "You Tube",
    },
  ],
};

export const navTopLinks = [
  {
    id: 1,
    title: "O'qituvchi ish o'rinlari",
    url: "https://uzedu.uz/uz/page/job-form",
  },
  {
    id: 2,
    title: "Hujjatlar",
    url: "https://uzedu.uz/uz/documents/categories",
  },
  {
    id: 3,
    title: "Loyihalar",
    url: "https://uzedu.uz/uz/projects/index",
  },
  {
    id: 4,
    title: "Ko'p beriladigan savollar",
    url: "https://uzedu.uz/uz/faq",
  },
  {
    id: 5,
    title: "Davlat ramzlari",
    url: "/davlat-ramzlari",
  },
  {
    id: 6,
    title: "Fuqarolar murojati",
    url: "/murojatlar",
  },
];

export const navBottomLinks = [
  {
    id: 1,
    title: "Boshqarma",
    links: [
      {
        linkTitle:
          "Samarqand vil. maktabgacha va maktab ta'limi boshqarmasi haqida",
        url: "/about",
      },
      {
        linkTitle: "Raxbariyat",
        url: "/raxbariyat",
      },
      {
        linkTitle: "Boshqarma apparati",
        url: "/markaziy-aparat",
      },
      {
        linkTitle: "Hududiy bo'limlar",
        url: "/boshqarma-hodimlari",
      },
      {
        linkTitle: "Boshqarma tuzilmasi",
        url: "/boshqarma_tuilmasi",
      },
      {
        linkTitle: "Rekvizitlar",
        url: "rekvizitlar",
      },
      {
        linkTitle: "Bo'g'lanish",
        // url: "https://uzedu.uz/static/contacts",
        url: "#footer",
      },
    ],
  },
  {
    id: 2,
    title: "Ta'lim",
    links: [
      {
        linkTitle: "Statistika",
        url: "/statistics",
      },
      {
        linkTitle: "Ta'limga doir terminlar",
        url: "/talimga-doir-terminlar",
      },
      {
        linkTitle: "Elektron kutubxona",
        url: "https://kitob.uz",
      },
      {
        linkTitle: "'Barkamol avlod' Bolalar maktablari",
        // url: "https://uzedu.uz/page/barkamol_avlod",
        url: "",
      },
      {
        linkTitle: "Imkoniyati cheklanganlarga",
        // url: "https://uzedu.uz/page/organicennymi-vozmoznostami",
        url: "",
      },
    ],
  },
  {
    id: 3,
    title: "Faoliyat",
    links: [
      {
        linkTitle: "Страница Конституции",
        // url: "https://uzedu.uz/page/konstitutsiya_sahifasi",
        url: "",
      },
      {
        linkTitle: "Elektron davlat xizmatlari reestri",
        url: "/elektron-dxx",
      },
      {
        linkTitle: "Harakatlar strategiyasi va Davlat dasturlari ",
        // url: "https://uzedu.uz/page/davlat_dasturlari",
        url: "",
      },
      {
        linkTitle: "Gender tenglik",
        // url: "https://uzedu.uz/lists/2",
        url: "",
      },
      {
        linkTitle: "Tenderlar",
        // url: "https://uzedu.uz/lists/3",
        url: "",
      },
      {
        linkTitle: "Ish reja",
        // url: "https://uzedu.uz/page/ish-reja",
        url: "",
      },
      {
        linkTitle: "Umumta'lim tashkilotlari faoliyatini tekshirish",
        // url: "https://uzedu.uz/page/qaror-va-ijro",
        url: "",
      },
      {
        linkTitle: "Hisobotlar",
        // url: "https://uzedu.uz/lists/4",
        url: "",
      },
      {
        linkTitle: "Jismoniy va yuridik shaxslarning murojaati bilan ishlash",
        // url: "https://uzedu.uz/page/grafik",
        url: "",
      },
    ],
  },
  {
    id: 4,
    title: "Axborot xizmati",
    links: [
      {
        linkTitle: "Yangiliklari",
        // url: "https://uzedu.uz/news/index",
        url: "",
      },
      {
        linkTitle: "Press-relizlar",
        // url: "https://uzedu.uz/page/press-relis",
        url: "",
      },
      {
        linkTitle: "OAV biz haqimizda",
        // url: "https://uzedu.uz/lists/9",
        url: "",
      },
      {
        linkTitle: "Ma'ruzalar ",
        // url: "https://uzedu.uz/lists/5",
        url: "",
      },
      {
        linkTitle: "Galereya",
        // url: "https://uzedu.uz/gallery",
        url: "",
      },
      {
        linkTitle: "Videogalereya",
        // url: "https://uzedu.uz/gallery/video",
        url: "",
      },
      {
        linkTitle: "Matbuot anjumanlari",
        url: "",
      },
      {
        linkTitle: "Tanlovlar",
        // url: "https://uzedu.uz/page/help",
        url: "",
      },
      {
        linkTitle: "Boshqarma faoliyatining ochiqligi",
        // url: "https://uzedu.uz/page/openness",
        url: "",
      },
      {
        linkTitle: "Infografika",
        // url: "https://uzedu.uz/page/infographics",
        url: "",
      },
      {
        linkTitle: "Bayonotlar",
        // url: "https://uzedu.uz/lists/8",
        url: "",
      },
    ],
  },
  {
    id: 5,
    title: "Ochiq ma'lumotlar",
    links: [
      {
        linkTitle: "Ochiq ma'lumotlar (PF-6247)",
        // url: "https://uzedu.uz/page/6247",
        url: "",
      },
      {
        linkTitle: "Ochiq ma'lumotlar to'plami",
        // url: "https://uzedu.uz/documents/open-data",
        url: "",
      },
    ],
  },
  {
    id: 6,
    title: "Korrupsiyaga qarshi kurash",
    links: [
      {
        linkTitle: "Korrupsiyaga oid targibot materialllari",
        // url: "https://uzedu.uz/lists/12",
        url: "",
      },
      {
        linkTitle:
          "Xodimlar xatti-harakatiga oid korrupsiyani oldini olish boʻyicha murojaat",
        // url: "https://uzedu.uz/page/korrupsiyaga-qarshi-kurashish",
        url: "",
      },
      {
        linkTitle: "Korrupsiyaga qarshi kurashish bo‘yicha idoraviy hujjatlar",
        // url: "https://uzedu.uz/page/some-page-test",
        url: "",
      },
    ],
  },
];

export const headSlide = [
  { id: 1, title: "Maktablar", number: "1 286" },
  { id: 2, title: "O'quvchilar", number: "782 903" },
  {
    id: 3,
    title: "Barkamol avlod maktablari",
    number: "17",
  },
  {
    id: 4,
    title: "Barkamol avlod maktablari o'quvchilari",
    number: "44 472",
  },
  { id: 5, title: "Barcha MTTlar", number: "4 100" },
  {
    id: 6,
    title: "Qamrab olingan 3-7 yoshli bolalar",
    number: "275 719",
  },
];

// network list
export const networkList = [
  {
    id: 1,
    icon: <Phone />,
    title: "(55) 704 74 00",
    link: "tel:557047400",
  },
  // {
  //   id: 2,
  //   icon: <Mail />,
  //   title: "sam.info@uzedu.uz",
  //   link: "sam_MMT07@exat.uz",
  // },
  {
    id: 3,
    icon: <Facebook />,
    title: "@sam.uzedu",
    link: "https://www.facebook.com/SamarqandMMTB",
  },
  {
    id: 4,
    icon: <Send />,
    title: "@sam.uzedu",
    link: "https://t.me/samarqandvxtb",
  },
  {
    id: 5,
    icon: <Youtube />,
    title: "sam.uzedu",
    link: "https://youtube.com/@samarqandmmtb?si=g4gzrVdEdzPY9TEi",
  },
];

// Legal list
export const vebSiteLegal = [
  {
    id: 1,
    title: "Cookie siyosati",
    link: "https://uzedu.uz/uz/page/cookie",
  },
  {
    id: 2,
    title: "Xavfsizlik siyosati",
    link: "https://uzedu.uz/uz/page/privacy",
  },
  {
    id: 3,
    title: "Foydalanish shartlari",
    link: "https://uzedu.uz/uz/page/terms",
  },
  {
    id: 4,
    title: "Veb-saytdan foydalanish bo'yicha qo'llanma",
    link: "/uz/download/file?guid=b48aa9f7-ca92-c524-de6e-ed669577ea3f",
  },
];

export const hotlineRating = [
  {
    id: 1,
    ball: "1 bal",
    number: 0,
    people: "foydalanuvchi",
  },
  {
    id: 2,
    ball: "2 bal",
    number: 0,
    people: "foydalanuvchi",
  },
  {
    id: 3,
    ball: "3 bal",
    number: 0,
    people: "foydalanuvchi",
  },
  {
    id: 4,
    ball: "4 bal",
    number: 0,
    people: "foydalanuvchi",
  },
  {
    id: 5,
    ball: "5 bal",
    number: 0,
    people: "foydalanuvchi",
  },
];

export const footerContentLinks = [
  {
    id: 1,
    icon: <MessageSquare />,
    title: "Fuqarolarning murojaatlari",
    url: "/murojatlar",
  },
  {
    id: 2,
    icon: <Database />,
    title: "Ochiq ma'lumotlar",
    // link: "https://uzedu.uz/uz/documents/open-data",
    url: "",
  },
];

// viloyatlar
export const regions = [
  {
    id: 1,
    title: "Qoraqalpog'iston Respublikasi",
    value: 6,
    tumanlar: [
      { id: 101, sub__title: "Amudaryo tumani", value: 76 },
      { id: 102, sub__title: "Beruniy tumani", value: 77 },
      { id: 109, sub__title: "Qanlikul tumani", value: 78 },
      { id: 115, sub__title: "Karauzyak tumani", value: 79 },
      { id: 106, sub__title: "Kegeyli tumani", value: 80 },
      { id: 110, sub__title: "Qo‘ng‘irot tumani", value: 81 },
      { id: 107, sub__title: "Mo‘ynak tumani", value: 82 },
      { id: 108, sub__title: "Nukus tumani", value: 83 },
      { id: 112, sub__title: "Taxtako‘pir tumani", value: 84 },
      { id: 113, sub__title: "To‘rtko‘l tumani", value: 85 },
      { id: 114, sub__title: "Ho‘jayli tumani", value: 86 },
      { id: 104, sub__title: "Chimboy tumani", value: 87 },
      { id: 111, sub__title: "Shumanay tumani", value: 88 },
      { id: 105, sub__title: "Ellikqal'a tumani", value: 89 },
      { id: 116, sub__title: "Nukus shahri", value: 90 },
      { id: 117, sub__title: "Taxiatosh shahri", value: 91 },
      { id: 118, sub__title: "Taxiatosh tumani", value: 200 },
      { id: 103, sub__title: "Bo‘zotov tumani", value: 204 },
    ],
  },
  {
    id: 2,
    title: "Andijon viloyati",
    value: 3,
    tumanlar: [
      { id: 216, sub__title: "Andijon shahri", value: 33 },
      { id: 201, sub__title: "Andijon tumani", value: 1 },
      { id: 202, sub__title: "Asaka tumani", value: "asaka" },
      { id: 203, sub__title: "Asaka shahri", value: "asaka__shahri" },
      { id: 204, sub__title: "Baliqchi tumani", value: "baliqchi" },
      { id: 205, sub__title: "Bo‘z tumani", value: "boz" },
      { id: 206, sub__title: "Buloqboshi tumani", value: "buloqboshi" },
      { id: 207, sub__title: "Izboskan tumani", value: "izboskan" },
      { id: 208, sub__title: "Jalaquduq tumani", value: "jalaquduq" },
      { id: 209, sub__title: "Marhamat tumani", value: "marhamat" },
      { id: 210, sub__title: "Oltinko‘l tumani", value: "oltinkol" },
      { id: 211, sub__title: "Paxtaobod tumani", value: "paxtaobod" },
      { id: 212, sub__title: "Qo‘rg‘ontepa tumani", value: "qorgontepa" },
      { id: 213, sub__title: "Shahrixon tumani", value: "shahrixon" },
      { id: 214, sub__title: "Ulug‘nor tumani", value: "ulugnor" },
      { id: 215, sub__title: "Xo‘jaobod tumani", value: "xojaobod" },
      { id: 217, sub__title: "Oltinko`l tumani", value: "oltinkol" },
    ],
  },
  {
    id: 3,
    title: "Buxoro viloyati",
    value: "buxoro",
    tumanlar: [
      { id: 301, sub__title: "Buxoro tumani", value: "buxoro_t" },
      { id: 302, sub__title: "Vobkent tumani", value: "vobkent" },
      { id: 303, sub__title: "G‘ijduvon tumani", value: "gijduvon" },
      { id: 304, sub__title: "Jondor tumani", value: "jondor" },
      { id: 305, sub__title: "Kogon tumani", value: "kogon" },
      { id: 306, sub__title: "Olot tumani", value: "olot" },
      { id: 307, sub__title: "Peshku tumani", value: "peshku" },
      { id: 308, sub__title: "Qorako‘l tumani", value: "qorakol" },
      { id: 309, sub__title: "Qorovulbozor tumani", value: "qorovulbozor" },
      { id: 310, sub__title: "Romitan tumani", value: "romitan" },
      { id: 311, sub__title: "Shofirkon tumani", value: "shofirkon" },
      { id: 312, sub__title: "Buxoro shahri", value: "buxoro_sh" },
      { id: 313, sub__title: "Kogon shahri", value: "kogon_sh" },
    ],
  },
  {
    id: 4,
    title: "Farg‘ona viloyati",
    value: "fargona",
    tumanlar: [
      { id: 401, sub__title: "Bag‘dod tumani", value: "bagdod" },
      { id: 402, sub__title: "Beshariq tumani", value: "beshariq" },
      { id: 403, sub__title: "Buvayda tumani", value: "buvayda" },
      { id: 404, sub__title: "Dang‘ara tumani", value: "dangara" },
      { id: 405, sub__title: "Farg‘ona tumani", value: "fargona_t" },
      { id: 406, sub__title: "Furqat tumani", value: "furqat" },
      { id: 407, sub__title: "Qo‘shtepa tumani", value: "qoshtepa" },
      { id: 408, sub__title: "Oltiariq tumani", value: "oltiariq" },
      { id: 409, sub__title: "Rishton tumani", value: "rishton" },
      { id: 410, sub__title: "So‘x tumani", value: "sox" },
      { id: 411, sub__title: "Toshloq tumani", value: "toshloq" },
      { id: 412, sub__title: "Uchko‘prik tumani", value: "uchkoprik" },
      { id: 413, sub__title: "Yozyovon tumani", value: "yozyovon" },
      { id: 414, sub__title: "Farg‘ona shahri", value: "fargona_sh" },
      { id: 415, sub__title: "Marg‘ilon shahri", value: "margilon" },
      { id: 416, sub__title: "Qo‘qon shahri", value: "qoqon" },
    ],
  },
  {
    id: 5,
    title: "Jizzax viloyati",
    value: "jizzax",
    tumanlar: [
      { id: 501, sub__title: "Arnasoy tumani", value: "arnasoy" },
      { id: 502, sub__title: "Baxmal tumani", value: "baxmal" },
      { id: 503, sub__title: "Do‘stlik tumani", value: "dostlik" },
      { id: 504, sub__title: "Forish tumani", value: "forish" },
      { id: 505, sub__title: "G‘allaorol tumani", value: "gallaorol" },
      {
        id: 506,
        sub__title: "Sharof Rashidov tumani",
        value: "sharof_rashidov",
      },
      { id: 507, sub__title: "Mirzacho‘l tumani", value: "mirzachol" },
      { id: 508, sub__title: "Paxtakor tumani", value: "paxtakor" },
      { id: 509, sub__title: "Yangiobod tumani", value: "yangiobod" },
      { id: 510, sub__title: "Zarbdor tumani", value: "zarbdor" },
      { id: 511, sub__title: "Zafarobod tumani", value: "zafarobod" },
      { id: 512, sub__title: "Zomin tumani", value: "zomin" },
      { id: 513, sub__title: "Jizzax shahri", value: "jizzax_sh" },
    ],
  },
  {
    id: 6,
    title: "Navoiy viloyati",
    value: "navoiy",
    tumanlar: [
      { id: 601, sub__title: "Navoiy tumani", value: "navoiy" },
      { id: 602, sub__title: "Beyneu tumani", value: "beyneu" },
      { id: 603, sub__title: "G‘ozg‘on tumani", value: "gozgon" },
      { id: 604, sub__title: "Karmana tumani", value: "karmana" },
      { id: 605, sub__title: "Konimex tumani", value: "konimex" },
      { id: 606, sub__title: "Navbahor tumani", value: "navbahor" },
      { id: 607, sub__title: "Nurota tumani", value: "nurota" },
      { id: 608, sub__title: "Tomdi tumani", value: "tomdi" },
      { id: 609, sub__title: "Uchkuduk tumani", value: "uchkuduk" },
      { id: 610, sub__title: "Zafarabad tumani", value: "zafarabad" },
      { id: 611, sub__title: "Navoiy shahri", value: "navoiy_sh" },
    ],
  },
  {
    id: 7,
    title: "Namangan viloyati",
    value: "namangan",
    tumanlar: [
      { id: 701, sub__title: "Namangan tumani", value: "namangan" },
      { id: 702, sub__title: "Chortoq tumani", value: "chortoq" },
      { id: 703, sub__title: "Davlatabad tumani", value: "davlatabad" },
      { id: 704, sub__title: "Kampirabad tumani", value: "kampirabad" },
      { id: 705, sub__title: "Kosonsoy tumani", value: "kosonsoy" },
      { id: 706, sub__title: "Mingbuloq tumani", value: "mingbuloq" },
      { id: 707, sub__title: "Pop tumani", value: "pop" },
      { id: 708, sub__title: "Chust tumani", value: "chust" },
      { id: 709, sub__title: "Uychi tumani", value: "uychi" },
      { id: 710, sub__title: "To‘raqo‘rg‘on tumani", value: "torakorgon" },
      { id: 711, sub__title: "Namangan shahri", value: "namangan_sh" },
    ],
  },
];

export const directions = [
  {
    id: 1,
    title: "Maktabgacha ta'lim",
    value: 3,
  },
  {
    id: 2,
    title: "Maktab ta'lim",
    value: 2,
  },
];

// statistics of appeals
export const statisticsAppeals = [
  {
    id: 1,
    title: "Murojaatlar ko'rib chiqildi",
    value: 0,
  },
  {
    id: 2,
    title: "Ko'rib chiqilmoqda",
    value: 0,
  },
  {
    id: 3,
    title: "Rad etilgan arizalar",
    value: 0,
  },
  {
    id: 4,
    title: "Fiqarolarning murojatlari",
    value: 0,
  },
  {
    id: 5,
    title: "Murojaatlar ko'rib chiqildi",
    value: 0,
  },
  {
    id: 6,
    title: "Murojaatlar ko'rib chiqildi",
    value: 0,
  },
  {
    id: 7,
    title: "Ko'rib chiqilmoqda",
    value: 0,
  },
  {
    id: 8,
    title: "Rad etilgan arizalar",
    value: 0,
  },
  {
    id: 9,
    title: "Fuqarolar murojatlari",
    value: 0,
  },
  {
    id: 10,
    title: "Murojaatlar ko'rib chiqildi",
    value: 0,
  },
];

// survey statistics
export const surveyStatistics = [
  {
    id: 1,
    title: "Ko'rib chiqilgan so'rovlar",
    value: 97,
  },
  {
    id: 2,
    title: "Ko'rib chiqilmoqda",
    value: 0,
  },
  {
    id: 3,
    title: "Kelib tushgan so'rovlar soni (2024-yil 3-chorak)",
    value: 0,
  },
  {
    id: 4,
    title: "Ko'rib chiqilgan so'rovlar",
    value: 0,
  },
  {
    id: 5,
    title: "Ko'rib chiqilmoqda",
    value: 0,
  },
  {
    id: 6,
    title: "Kelib tushgan so'rovlar soni (2024-yil 3-chorak)",
    value: 0,
  },
  {
    id: 7,
    title: "Ko'rib chiqilgan so'rovlar",
    value: 0,
  },
];

// contact options
export const ContactOptionsData = [
  {
    id: 1,
    title: "Murojaatlar",
    img: mainIcon1,
    disp: "Maktabgacha va maktab ta'limi vazirligiga ariza, taklif yoki shikoyat bilan murojaat qilishingiz mumkin",
    link: "https://uzedu.uz/uz/static/request",
  },
  {
    id: 2,
    title: "G'oya yuborish",
    img: mainIcon2,
    disp: "Maktabgacha va maktab ta'limi tizimini rivojlantirish uchun g'oya yoki taklif yuborishingiz mumkin",
    link: "https://idea.uzedu.uz/uz",
  },
  {
    id: 3,
    title: "Qabul grafigi",
    img: mainIcon3,
    disp: "Jismoniy va yuridik shaxslarni qabul qilish jadvali",
    link: "https://uzedu.uz/uz/staff/reception",
  },
];

// Useful links
export const UsefulLinksData = [
  {
    id: 1,
    icon: ochiqAxborotlarProtali,
    title: "O'zbekiston Respublikasi ochiq axborot portali",
    link: "http://data.gov.uz/",
  },
  {
    id: 2,
    icon: gerb,
    title: "O'zbekiston Respublikasi Konstitutsiyasi",
    link: "https://constitution.uz/oz",
  },
  {
    id: 3,
    icon: taraqiyot,
    title: `"Taraqqiyot strategiyasi" markazi`,
    link: "https://strategy.uz/",
  },
  {
    id: 4,
    icon: qonunHujatlari,
    title:
      "O'zbekiston Respublikasi qonun hujjatlari ma'lumotlari milliy bazasi",
    link: "https://lex.uz/uz/",
  },
  {
    id: 5,
    icon: davlatAktivlari,
    title: "Davlat aktivlarini boshqarish agentligi",
    link: "https://davaktiv.uz/ru/",
  },
  {
    id: 6,
    icon: gerb,
    title: "O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti",
    link: "https://president.uz/uz",
  },
  {
    id: 7,
    icon: gerb,
    title: "O'zbekiston Respublikasi Prezidentining virtual qabulxonasi",
    link: "https://pm.gov.uz/uz",
  },
  {
    id: 8,
    icon: hukumatPortal,
    title: "O'zbekiston Respublikasi hukumat portali",
    link: "https://gov.uz/oz",
  },
  {
    id: 9,
    icon: mygov,
    title: "Yagona Interaktiv davlat xizmatlari portali",
    link: "https://my.gov.uz/uz",
  },
  {
    id: 10,
    icon: bolalarKutubxonasi,
    title: "Respublika bolalar kutubxonasi",
    link: "https://kitob.uz/",
  },
];

export const firstCard = [
  {
    img: student,
    title: "O'quvchilarga",
    description: "Darsliklar, Smartland, Videodarslik, To'garaklar",
    url: "https://uzedu.uz/uz/services/index/1",
  },
  {
    img: femily,
    title: "Ota-onalarga",
    description:
      "Umumiy o‘rta ta’lim muassasalarining ichki tartib va odob-axloq qoidalari, Uyda yakka tartibda taʼlim olish, Voyaga yetmagan bolalarni farzandlikka olish, Ixtisoslashgan maktablar",
    url: "https://uzedu.uz/uz/services/index/2",
  },
  {
    img: teacher,
    title: "O'qituvchilarga",
    description:
      "Vakant lavozimlar, Malaka oshirish, Videodarslik, O'qituvchi yuritadigan hujjatlar",
    url: "https://uzedu.uz/uz/services/index/3",
  },
  {
    img: school,
    title: "Maktablarga",
    description:
      "Xalqaro tan olingan va milliy baholash tizimida berilgan sertifikatlar (ularning kombinasiyasi) ro'yxati hamda har oylik ustama olish uchun ularning eng kam onlinedu.uz, Ta'lim to'g'risidagi Qonun, Davlat ta'lim standartlari",
    url: "https://uzedu.uz/uz/services/index/4",
  },
];

import placeholder from "../assets/placeholder.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";
import new4 from "../assets/new4.jpg";
import new5 from "../assets/new5.jpg";
import new6 from "../assets/new5.jpg";
import new7 from "../assets/new6.jpg";
import new8 from "../assets/new8.jpg";
import {
  abdiyevaM,
  eshankulov,
  goziyevX,
  ibragimov,
  ishmuratov,
  jiyanovF,
  karshiyevB,
  kosimovB,
  mirzayevS,
  olimovA,
  qosimovF,
  turayevZ,
  usmanov,
  xolikulovI,
} from "../assets/hodimlar";
import {
  abulxayrov,
  bobokulov,
  boshqarma,
  daminov,
  daminova,
  fayziyev,
  isaev,
  jamilov,
  jangirov,
  jurayev_zayniddin,
  jusupova,
  karimov_latif,
  nomirov_salohiddin,
  nuriddinov,
  ochilov,
  orif_marupov,
  rasulov,
  saitmuratova,
  salimova_gulmira,
  saparova,
  sultanov,
  tayloqtumaniUsmanov,
  tursunov_abdunavi,
  xojamqulov,
  xursandov_akmal,
  xushbaqov,
  yakubov_murodullo,
  zoitov,
} from "../assets/hodimlar2";

export const news = [
  {
    img: placeholder,
    title:
      "Bitiruvchi sinf oʻquvchilarini yakuniy davlat attestatsiyasidan oʻtkazishga doir metodik tavsiya va materiallar tasdiqlandi",
    date: "10-aprel 2025-yil",
    url: "https://uzedu.uz/uz/news/1965",
  },
  {
    img: new2,
    title:
      "Inson resurslarini rejalashtirishning yangi tizimini bosqichma-bosqich joriy etish masalalariga bagʻishlangan seminar-trening",
    date: "19-mart 2025-yil",
    url: "https://uzedu.uz/uz/news/1962",
  },
  {
    img: new3,
    title:
      "Byudjet mablagʻlaridan samarali foydalanishda shaffoflikni taʼminlash uchun vazirlikda “Situatsion markaz” tashkil etildi",
    date: "11-mart 2025-yil",
    url: "https://uzedu.uz/uz/news/1947",
  },
  {
    img: new4,
    title:
      "Kelgusi yildan maktabgacha taʼlim tashkilotlari tarbiyachilari ham Vaziri jamgʻarmasidan ustama olishlari mumkin",
    date: "3-mart 2025-yil",
    url: "https://uzedu.uz/uz/news/1945",
  },
  {
    img: new5,
    title:
      "Joriy o‘quv yilida yakuniy davlat attestatsiyasini oʻtkazish tartibi belgilandi",
    date: "26-fevral 2025-yil",
    url: "https://uzedu.uz/uz/news/1944",
  },
  {
    img: new6,
    title:
      "​​​​​​​Vazir jamgʻarmasi ustamasi uchun dastlabki sinov jarayonlari 25-fevral kuni oʻtkaziladi",
    date: "19-fevral 2025-yil",
    url: "https://uzedu.uz/uz/news/1943",
  },
  {
    img: new7,
    title:
      '“Siz ekologiyaga oid qonunlarni bilasizmi?" koʻrik-tanlovining hududiy bosqichi boʻlib oʻtmoqda',
    date: "19-fevral 2025-yil",
    url: "https://uzedu.uz/uz/news/1939",
  },
  {
    img: new8,
    title:
      "O'QUVCHILARNI KASBGA YO‘NALTIRISH VA O‘QITISH BO‘YICHA AMALIY TADBIR TASHKIL ETILDI",
    date: "1-fevral 2025-yil",
    url: "https://uzedu.uz/uz/news/1937",
  },
];

export const hodimlar = [
  {
    id: 1,
    image: boshqarma,
    title: "Носиров Анвар Худайбердиевич",
    info: "Бошкарма бошлиғининг биринчи ўринбосари в в б",
  },
  {
    id: 2,
    image: eshankulov,
    title: "ESHANKULOV SHAXZOD ESHKUVATOVICH",
    info: "бошлиқнинг ўринбосари ",
  },
  {
    id: 3,
    image: jurayev_zayniddin,
    title: "JURAYEV ZAYNITDIN TURSUNBOYEVICH",
    info: "бошлиқнинг ўринбосари",
  },
  {
    id: 4,
    image: bobokulov,
    title: "BOBOQULOV ASRORJON ABROR O‘G‘LI",
    info: "бошлиқнинг ўринбосари",
  },
  {
    id: 5,
    image: mirzayevS,
    title: "MIRZAYEV SOBIRJON AMINOVICH",
    info: "Инсон ресурсларини бошқариш ва ривожлантириш бўлими бошлиғи ",
  },
  {
    id: 6,
    image: tursunov_abdunavi,
    title: "TURSUNOV ABDUNABI ALIQULOVICH",
    info: "Юридик хизмат кўрсатиш шўъбаси бошлиғи ",
  },
  {
    id: 7,
    image: kosimovB,
    title: "KOSIMOV BEXZOD ABDIALIMOVICH",
    info: "Назорат-таҳлил, ижро интизоми ва мурожаатлар билан ишлаш шўъбаси бошлиғи ",
  },
  {
    id: 8,
    image: karshiyevB,
    title: "KARSHIYEVA BAXTIGUL DANAQULOVNA",
    info: "Матбуот котиби ",
  },
  {
    id: 9,
    image: fayziyev,
    title: "FAYZIYEV ROZIK MAJIDOVICH",
    info: "Умумий ўрта таълим ташкилотлари фаолиятини мувофиқлаштириш шўъбаси бошлиғи",
  },
  {
    id: 10,
    image: isaev,
    title: "Исаев Зокир",
    info: "Ўқув жараёнини методик таъминлаш ва дарсликлар бўлими бошлиғи",
  },
  {
    id: 11,
    image: salimova_gulmira,
    title: "SALIMOVA GULMIRA KURBANOVNA",
    info: "Ўқувчилар билимини баҳолаш  ва таҳлил қилиш шуъбаси бошлиғи ",
  },
  {
    id: 12,
    image: karimov_latif,
    title: "KARIMOV LATIF ABDUXAKIMOVICH",
    info: "Педагогларнинг билими ҳамда кўникмаларини  баҳолаш шўъбаси бош методисти ",
  },
  {
    id: 13,
    image: ibragimov,
    title: "IBRAGIMOV NURALI YAXSHIBOYEVICH",
    info: "Таълим ташкилотларини  аккредитациялашни ташкил этиш шўъбаси методисти ",
  },
  {
    id: 14,
    image: turayevZ,
    title: "TURAYEV ZAFARJON SHAKIROVICH",
    info: "Таълим ташкилотларини литсензиялашни ташкил етиш бўйича бош мутахассис ",
  },
  {
    id: 15,
    image: "",
    title: "Вакант ",
    info: "Хорижий тилларни ўрганишни оммалаштиришни шўъбаси бошлиғи",
  },
  {
    id: 16,
    image: orif_marupov,
    title: "MARUPOV ORIFJON KOMILJONOVICH",
    info: "Ихтисослаштирилган таълим муассасалари фаолиятини мувофиқлаштириш шўъбаси бошлиғи",
  },
  {
    id: 17,
    image: yakubov_murodullo,
    title: "YAKUBOV MURODILLO SHAVKAT O‘G‘LI",
    info: "АКТни жорий этиш ва рақамлаштириш шўъбаси бошлиғи",
  },
  {
    id: 18,
    image: jiyanovF,
    title: "JIYANOV FURQAT MUROTQOBULOVICH",
    info: "Мактабгача таълим ташкилотлари фаолиятини мувофиқлаштириш шуъбаси бошлиғи",
  },
  {
    id: 20,
    image: ishmuratov,
    title: "ISHMURATOV DJURABEK ASTANAKULOVICH",
    info: "Педагог кадрлар салоҳиятини оширишни  мувофиқлаштириш шўъбаси бошлиғи",
  },
  {
    id: 21,
    image: abdiyevaM,
    title: "ABDIYEVA MUZAFARA XXX",
    info: "Болаларни психологик қўллаб қувватлаш ва инкюзив таълим бўйича методисти ",
  },
  {
    id: 22,
    image: nomirov_salohiddin,
    title: "NOMIROV SOLOXIDIN NOSIROVICH",
    info: "Соғлом овқатлантиришни ташкил етиш ва тиббий хизмат кўрсатишни мувофиқлаштириш шўбаси бошлиғи",
  },
  {
    id: 24,
    image: qosimovF,
    title: "QOSIMOV FAYOZIDDIN ANARKULOVICH",
    info: "Давлат-хусусий шерикликни ривожлантириш  шўъба бошлиғи",
  },
  {
    id: 25,
    image: olimovA,
    title: "OLIMOV AKMAL AXMATOVICH",
    info: "Таълим ташкилотларида тарбиявий ишларни мувофиқлаштириш ва мактабдан ташқари таълимни ташкил етиш шўъбаси бошлиғи",
  },
  {
    id: 27,
    image: goziyevX,
    title: "G‘OZIYEV XURSHID NIYATQOBILOVICH",
    info: "Ўқувчиларни касбга йўналтириш ва психолог хизмат шўъбаси бошлиғи",
  },
  {
    id: 28,
    image: xolikulovI,
    title: "XOLIKULOV ILXOM ABDUMUMINOVICH",
    info: "Молия шўъбаси бошлиғи",
  },
  {
    id: 29,
    image: usmanov,
    title: "USMANOV ASLIDDIN ERGASHEVICH",
    info: "Бухгалтерия ҳисоби ва давлат харидлари шўъбаси в в б",
  },
  {
    id: 30,
    image: xursandov_akmal,
    title: "XURSANDOV AKMAL RUSTAMOVICH",
    info: "Таълим ташкилотлари инфратузилмасини ривожлантириш ва мулкидан самарали фойдаланиш бўлими бошлиғи",
  },
  {
    id: 31,
    image: nuriddinov,
    title: "НУРИДДИНОВ Зайниддин Мехриддинович",
    info: "Самарқанд шаҳар мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 32,
    image: daminov,
    title: "ДАМИНОВ Алишер Акбарович",
    info: "Каттақўрғон шаҳар мактабгача ва мактаб таълими бўлими бошлиғи в.б",
  },
  {
    id: 33,
    image: jangirov,
    title: "ЖАНГИРОВ Озод Жаниқулович",
    info: "Булунғур туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 34,
    image: jusupova,
    title: "ЮСУПОВА Зарифа Абдусаломовна",
    info: "Жомбой туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 35,
    image: saitmuratova,
    title: "САИДМУРАТОВА Гулчехра Ибрагимовна",
    info: "Иштихон туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 36,
    image: sultanov,
    title: "СУЛТАНОВ Шокир Қувонович",
    info: "Каттақўрғон тумани мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 37,
    image: xojamqulov,
    title: "ХЎЖАМҚУЛОВ Ўктам Муродимович",
    info: "Қўшработ туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 38,
    image: daminova,
    title: "ДАМИНОВА Зухра Рахматуллаевна",
    info: "Нарпай туман мактабгача ва мактаб таълими бўлими бошлиғи в.в.б",
  },
  {
    id: 39,
    image: xushbaqov,
    title: "Хушбақов Шавкат Уролович",
    info: "Нуробод туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 40,
    image: jamilov,
    title: "ЖАМИЛОВ Элёр Фарходович",
    info: "Оқдарё туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 41,
    image: ochilov,
    title: "ОЧИЛОВ Жасур Бахриддинович",
    info: "Паяриқ туман мактабгача ва мактаб таълими бўлими бошлиғив.в.б",
  },
  {
    id: 42,
    image: saparova,
    title: "САПАРОВА Нодира Холикуловна",
    info: "Пастдарғом туман мактабгача ва мактаб таълими бўлими бошлиғи в.в.б",
  },
  {
    id: 43,
    image: rasulov,
    title: "РАСУЛОВ Шохрух Норбутаевич",
    info: "Пахтачи тумани мактабгача ва мактаб таълими бўлими бошлиғи в.в.б",
  },
  {
    id: 44,
    image: abulxayrov,
    title: "АБУЛХАЙРОВ Шерзод Рустамович ",
    info: "Самарқанд тумани мактабгача ва мактаб таълими бўлими бошлиғи в.в.б",
  },
  {
    id: 45,
    image: tayloqtumaniUsmanov,
    title: "УСМОНОВ Ўлмас Облоқулович",
    info: "Тойлоқ туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
  {
    id: 46,
    image: zoitov,
    title: "ЗОИТОВ Жавлон Зокирович",
    info: "Ургут туман мактабгача ва мактаб таълими бўлими бошлиғи",
  },
];

import boshliqbu from "../assets/samvilmttbosh.jpg";

export const qabul_qiluvchilar = [
  {
    id: 1,
    image: boshliqbu,
    title: "Xamdamov Muzaffar Yazdonqulovich",
    info: "Samarqand viloyati Maktabgacha va maktab ta’limi boshqarmasi boshlig‘i",
    date: "Juma kuni soat 09:00 dan 11:00 gacha",
  },
  {
    id: 2,
    image: boshqarma,
    title: "Nosirov Anvar Xudayberdiyevich",
    info: "Boshqarma boshlig'ining birinchi o'rinbosari",
    date: "Payshanba kuni soat 09:00 dan 11:00 gacha",
  },
  {
    id: 4,
    image: jurayev_zayniddin,
    title: "JURAYEV ZAYNITDIN TURSUNBOYEVICH",
    info: "Boshliq o'rinbosari",
    date: "Chorshanba kuni soat 09:00 dan 11:00 gacha",
  },
  {
    id: 3,
    image: eshankulov,
    title: "ESHANKULOV SHAXZOD ESHKUVATOVICH",
    info: "Boshliq o'rinbosari",
    date: "Seshanba kuni soat 09:00 dan 11:00 gacha",
  },
  {
    id: 5,
    image: bobokulov,
    title: "BOBOQULOV ASRORJON ABROR O‘G‘LI",
    info: "Boshliq o'rinbosari",
    date: "Dushanbada kuni soat 09:00 dan 11:00 gacha",
  },
];
