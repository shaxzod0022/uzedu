import React from 'react'

// Import Swiper 
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

import { UsefulLinksData } from '../util/constants';

function UsefulLinks() {
    return (
        <div className='max-w-[540px] md:max-w-[720px] lg:max-w-[960px] mx-auto'>
            <h1 className="text-3xl md:text-4xl font-bold text-myGreen text-center mb-8 relative z-10 Title__aft">
                Foydali havolalar
            </h1>
            <div className='my-12 lg:px-24 w-full'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {
                        UsefulLinksData.map(item => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className='w-[146px]'
                                >
                                    <a
                                        href={item.link}
                                        target='_blank'
                                        className='block px-5 text-center'
                                    >
                                        <div className='flex flex-col items-center justify-center'>
                                            <div className='size-[110px] border border-[#bbb] rounded-[50%] flex items-center justify-center overflow-hidden my-2.5 p-1.5 bg-white transition-all duration-200 ease-linear hover:border-[#4c4083] hover:shadow-[0_0_0_10px_rgba(76,_64,_131,_0.5)]'
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt={`icon ${item.id}`}
                                                    className='w-full block'
                                                />
                                            </div>
                                            <span className='text-[#595959] text-sm'>{item.title}</span>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default UsefulLinks