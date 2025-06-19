'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "УСТОЙЧИВАЯ",
    subtitle: "АРХИТЕКТУРА",
    description: "Проектируем и строим энергоэффективные здания с минимальным воздействием на окружающую среду",
    technical: "ПРОЕКТ_001",
    year: "2024",
    location: "РОСТОВСКАЯ ОБЛ, РФ",
    stats: { label: "лет опыта", value: "15" },
    specs: [
      { label: "СНИЖЕНИЕ CO₂", value: "85%" },
      { label: "ЭНЕРГОКЛАСС", value: "А+" },
      { label: "ЭКО МАТЕРИАЛЫ", value: "100%" }
    ]
  },
  {
    id: 2,
    title: "ИННОВАЦИОННЫЕ",
    subtitle: "РЕШЕНИЯ",
    description: "Интегрируем передовые технологии умного дома и возобновляемые источники энергии",
    technical: "ПРОЕКТ_002",
    year: "2024",
    location: "КРАСНОДАРСКИЙ КРАЙ, РФ",
    stats: { label: "проектов", value: "200+" },
    specs: [
      { label: "УМНЫЕ СИСТЕМЫ", value: "IOT" },
      { label: "СОЛН. ПАНЕЛИ", value: "25КВТ" },
      { label: "АВТОМАТИЗАЦИЯ", value: "ПОЛНАЯ" }
    ]
  },
  {
    id: 3,
    title: "СОЗДАЙТЕ ВАШ",
    subtitle: "ДОМ БУДУЩЕГО",
    description: "От архитектурного проекта до ключей — полный цикл создания вашего идеального дома",
    technical: "ПРОЕКТ_003",
    year: "2024",
    location: "МОСКВА, РФ",
    stats: { label: "удовлетворённость", value: "100%" },
    specs: [
      { label: "ГАРАНТИЯ", value: "5 ЛЕТ" },
      { label: "СРОКИ", value: "6-12 МЕС" },
      { label: "ПОДДЕРЖКА", value: "24/7" }
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        const nextIndex = (currentSlide + 1) % slides.length;
        handleSlideChange(nextIndex);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, isTransitioning]);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    
    setIsTransitioning(true);
    
    // Запускаем анимацию исчезновения (500ms как в CSS)
    setTimeout(() => {
      setCurrentSlide(newIndex);
      // Даем время на появление (200ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 500);
  };

  const goToSlide = (index: number) => {
    handleSlideChange(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative md:h-[640px] l:h-screen overflow-hidden bg-white">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(45, 55, 72, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 55, 72, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-start lg:items-center">
        <div className="container pt-10 md:pt-16 lg:pt-0 pb-32 md:pb-40 lg:pb-0">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 md:mt-0 mt-[60px] items-start lg:items-center w-full">
            {/* Left Content - Technical Info - скрыто на мобильных */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative min-h-[200px]">
                <div className={`absolute inset-0 space-y-6 transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {/* Project Number */}
                  <div className="space-y-2">
                    <div className="technical-label">Проект</div>
                    <div className="font-mono text-sm text-primary">
                      {slides[currentSlide].technical}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <div className="technical-label">Год</div>
                    <div className="font-mono text-sm text-primary">
                      {slides[currentSlide].year}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <div className="technical-label">Локация</div>
                    <div className="font-mono text-sm text-primary">
                      {slides[currentSlide].location}
                    </div>
                  </div>

                  {/* Main Stat */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="technical-label">Опыт работы</div>
                    <div className="flex items-baseline space-x-2">
                      <div className="font-technical text-2xl font-medium text-accent">
                        {slides[currentSlide].stats.value}
                      </div>
                      <div className="blueprint-text">
                        {slides[currentSlide].stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content - Main Title */}
            <div className="col-span-full lg:col-span-6 text-center">
              <div className="space-y-4 mt-0 md:mt-8 md:space-y-6 lg:space-y-6">
                {/* Company Label - всегда статичный */}
                <div className="technical-label">
                  МЕГАХАУС ИНВЕСТ
                </div>
                
                {/* Анимируемый контент с crossfade */}
                <div className="relative min-h-[180px] md:min-h-[220px] lg:min-h-[300px] flex flex-col justify-center">
                  {/* Main Title */}
                  <div className={`transition-opacity duration-500 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">
                      <div className="space-y-2">
                        <h1 className="text-fluid-xl font-technical font-medium leading-none text-balance">
                          <span className="block text-primary">
                            {slides[currentSlide].title}
                          </span>
                          <span className="block text-accent">
                            {slides[currentSlide].subtitle}
                          </span>
                        </h1>
                      </div>

                      {/* Description */}
                      <p className="text-fluid-base text-primary-light max-w-lg mx-auto leading-relaxed font-technical">
                        {slides[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons - всегда статичные */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-5 lg:pt-6">
                  <Link 
                    href="/#contact" 
                    className="btn btn-primary px-6 py-3 text-sm focus-visible transform transition-all duration-200 hover:scale-105"
                  >
                    НАЧАТЬ ПРОЕКТ
                  </Link>
                  
                  <Link 
                    href="/#portfolio" 
                    className="btn btn-secondary px-6 py-3 text-sm focus-visible transform transition-all duration-200 hover:scale-105"
                  >
                    НАШИ РАБОТЫ
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Technical Specs - всегда видимы */}
            <div className="col-span-full lg:col-span-4 order-3 px-10 lg:px-0">
              <div className="space-y-6 lg:space-y-8">
                {/* Technical Specifications */}
                <div className={`space-y-3 lg:space-y-4 transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="technical-label">Технические характеристики</div>
                  <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-3 md:gap-0 lg:gap-0 md:space-y-3 lg:space-y-3">
                    {slides[currentSlide].specs.map((spec, index) => (
                      <div key={index} className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-center lg:items-center py-2 md:border-b lg:border-b md:border-border/50 lg:border-border/50">
                        <div className="blueprint-text text-xs md:text-sm lg:text-sm">{spec.label}</div>
                        <div className="font-mono text-sm font-medium text-accent">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawing Area Placeholder - скрыто на мобильной и планшетной версиях */}
                <div className="relative mt-8 lg:mt-0 hidden lg:block">
                  <div className="aspect-square max-w-sm mx-auto lg:max-w-none lg:mx-0 bg-muted rounded-lg border-2 border-dashed border-border/50 flex items-center justify-center hover:border-accent/30 transition-colors">
                    <div className="text-center space-y-2">
                      <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-16 lg:h-16 text-primary/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div className="technical-label">Превью чертежа</div>
                    </div>
                  </div>
                  
                  {/* Technical Note */}
                  <div className="absolute -bottom-2 -right-2 glass p-2 md:p-3 lg:p-3 rounded-lg">
                    <div className="text-center">
                      <div className="font-mono text-xs font-medium text-success">СЕРТИФИКАТ</div>
                      <div className="technical-label text-xs">эко-дружелюбно</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-8 h-0.5 transition-all duration-300 focus-visible ${
                  index === currentSlide
                    ? 'bg-accent scale-110'
                    : 'bg-primary-light/40 hover:bg-primary-light hover:scale-105'
                } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
              />
            ))}
          </div>
          
          {/* Slide Counter */}
          <div className="font-mono text-xs text-primary-light">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - только для десктопа */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex items-center space-x-2">
          <div className="technical-label">прокрутка</div>
          <div className="w-4 h-6 border border-primary-light rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-primary-light rounded-full mt-1 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 