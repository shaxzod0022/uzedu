import React from "react";
import {
  About,
  Content,
  EducationSuggestions,
  FirstCards,
  Head,
  SocialNetworksBar,
  SwiperStatistika,
  ContactOptions,
  UsefulLinks,
  News,
} from "../components";

import {
  statisticsAppeals,
  surveyStatistics,
  ContactOptionsData,
} from "../util/constants";

const Home = () => {
  return (
    <div>
      <Head />
      <div className="bg_shape1 max-w-[3000px] mx-auto">
        <Content />
        <FirstCards />
      </div>
      <About />
      <News />
      <div>
        <EducationSuggestions />
        {/* murojatkar statistikasi */}
        <SwiperStatistika
          data={statisticsAppeals}
          title="Murojaatlar statistikasi"
        />
        {/* contact optins */}
        <ContactOptions data={ContactOptionsData} />
        {/* so'rovlar statistikasi */}
        <SwiperStatistika
          data={surveyStatistics}
          title="So'rovlarni ko'rib chiqish statistikasi"
        />
        <UsefulLinks />
      </div>
      <SocialNetworksBar />
    </div>
  );
};

export default Home;
