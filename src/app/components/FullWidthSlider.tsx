// components/FullWidthSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const FullWidthSlider = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={1200}
            slidesPerView={1}
            loop={true}
            style={{ width: '100%', height: '100%' }}
        >
            <SwiperSlide> <Image
                src="/slide.png"
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            /></SwiperSlide>
            <SwiperSlide> <Image
                src="/slide3.jpg"
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            /></SwiperSlide>
            <SwiperSlide> <Image
                src="/slide2.jpg"
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            /></SwiperSlide>
        </Swiper>
    );
};

export default FullWidthSlider;