import React from "react";
import { Navbar } from "../components";
import { styles } from "../util/styles";
import { davlat_xizmatlari } from "../util/constants";

const ElektronDxx = () => {
  return (
    <>
      <Navbar newClass={"bg-myGreen w-full lg:!px-36 sm:w-full"} />
      <div className="mx-auto p-4 sm:px-6 lg:px-8 xxl:w-full sm:w-[80%] w-full">
        <div>
          <h2 className={`${styles.heading2}`}>
            Elektron davlat xizmatlari reesti
          </h2>
          <p className="bg-yellow-300 w-[80px] h-[5px]"></p>
        </div>
        <div className="p-5 flex items-center justify-center">
          <table class="min-w-full border border-gray-300 text-sm text-left">
            <thead class="bg-gray-100">
              <tr>
                <th class="border px-4 py-2">№</th>
                <th class="border px-4 py-2">Davlat xizmatining nomi</th>
                <th class="border px-4 py-2">
                  Davlat xizmati ko‘rsatilayotgan ariza beruvchilar toifalari
                </th>
                <th class="border px-4 py-2">
                  Davlat xizmati ko‘rsatish shakli (an'anaviy va elektron)
                </th>
                <th class="border px-4 py-2">To‘lov turi va miqdori</th>
                <th class="border px-4 py-2">
                  Davlat xizmati ko‘rsatish muddati
                </th>
                <th class="border px-4 py-2">
                  Havola orqali <br /> web-sahifaga o‘tish
                </th>
              </tr>
            </thead>
            <tbody>
              {davlat_xizmatlari.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2 font-semibold">{item.dxNomi}</td>
                  <td className="border px-4 py-2">
                    {item.arizachilarToifasi}
                  </td>
                  <td className="border px-4 py-2">{item.xizmatShakli}</td>
                  <td className="border px-4 py-2">{item.tulovTuriMiqdori}</td>
                  <td className="border px-4 py-2">
                    {item.dxKorsatishMuddati}
                  </td>
                  <td class="border px-4 py-2 text-center">
                    <a href={item.url}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                        alt="link"
                        class="h-6 w-6 mx-auto"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ElektronDxx;
