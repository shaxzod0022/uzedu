import React from 'react'

// swiper
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'

function SwiperStatistika({ data, title }) {
  return (
    <div className="py-10 px-4 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-myGreen text-center mb-8 relative z-10 Title__aft">
        {title}
      </h1>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {data.map((item,index) => (
          <SwiperSlide key={index}>
            <div className="h-48 flex flex-col items-center justify-center text-center 
 sm:border-r-2 sm:border-r-black py-1.5 px-5">
              <h2 className="text-4xl font-bold text-myGreen mb-2.5">
                {item.value.toLocaleString()}
              </h2>
              <span className="text-base font-light text-myGreen">{item.title}</span>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  )
}

export default SwiperStatistika
