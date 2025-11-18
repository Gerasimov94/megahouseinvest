'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PROJECTS_BASE_URL } from '@/lib/constants';

interface ProjectCarouselProps {
  projectTitle: string;
  id: string;
}

export default function ProjectCarousel({ projectTitle, id }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
        className="rounded-2xl shadow-2xl"
      >
        {Array.from({ length: 4 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/9] bg-neutral-100">
              <Image
                src={`${PROJECTS_BASE_URL}/${id}/${index + 1}.webp`}
                alt={`${projectTitle} - фото ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1536px) 100vw, 1536px"
                priority={index === 0}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
          <>
            <button
              className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Предыдущее фото"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Следующее фото"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {activeIndex + 1} / 4
            </div>
          </>
      </Swiper>

      {/* Custom Swiper Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 16px !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #F59E0B;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
