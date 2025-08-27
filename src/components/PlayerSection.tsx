'use client'

import Image from 'next/image';
import React from 'react'

export default function PlayerSection() {
  return (
	<div className="relative h-screen w-full overflow-hidden">
		{/* Фоновое изображение */}
		<Image 
			src="/house-bg.jpg"
			alt="House"
			fill
			className="object-cover z-0 brightness-60"
		/>
		
		{/* Градиентный оверлей для читаемости текста */}
		<div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
		
		{/* Контент поверх фото */}
		<div className="relative z-20 flex flex-col items-center justify-center h-full px-4 pt-20">
			<h1 className="text-4xl md:text-6xl font-bold text-primary text-white text-center mb-2 drop-shadow-lg">
				Современный дом под ключ
			</h1>
			<p className="text-lg md:text-xl text-white text-center max-w-2xl mb-8 drop-shadow-md">
				Строительная компания полного цикла. Строим дома с гарантией качества.
			</p>
			<div className="hidden lg:block">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  scrollTo({
                    top: contactSection.offsetTop - 60,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn btn-accent px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Оставить заявку
            </button>
          </div>
		</div>
	</div>
  )
}
