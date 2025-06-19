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
      changeSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const changeSlide = (newSlideIndex: number | ((prev: number) => number)) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const nextIndex = typeof newSlideIndex === 'function' ? newSlideIndex(currentSlide) : newSlideIndex;
    
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    changeSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    changeSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-white">
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
      <div className="relative z-10 h-full flex items-center">
        <div className={`container transition-all duration-500 ease-out ${
          isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        }`}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - Technical Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Project Number */}
                <div className="space-y-2">
                  <div className="technical-label">Проект</div>
                  <div className="font-mono text-sm text-primary transition-all duration-300">
                    {slides[currentSlide].technical}
                  </div>
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <div className="technical-label">Год</div>
                  <div className="font-mono text-sm text-primary transition-all duration-300">
                    {slides[currentSlide].year}
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <div className="technical-label">Локация</div>
                  <div className="font-mono text-sm text-primary transition-all duration-300">
                    {slides[currentSlide].location}
                  </div>
                </div>

                {/* Main Stat */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="technical-label">Опыт работы</div>
                  <div className="flex items-baseline space-x-2">
                    <div className="font-technical text-2xl font-medium text-accent transition-all duration-300">
                      {slides[currentSlide].stats.value}
                    </div>
                    <div className="blueprint-text transition-all duration-300">
                      {slides[currentSlide].stats.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Content - Main Title */}
            <div className="lg:col-span-6 text-center">
              <div className="space-y-6">
                {/* Company Label */}
                <div className="technical-label">
                  МЕГАХАУС ИНВЕСТ
                </div>
                
                {/* Main Title */}
                <div className="space-y-2">
                  <h1 className="text-fluid-xl font-technical font-medium leading-none text-balance">
                    <span className="block text-primary transition-all duration-500 transform">
                      {slides[currentSlide].title}
                    </span>
                    <span className="block text-accent transition-all duration-500 transform">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-fluid-base text-primary-light max-w-lg mx-auto leading-relaxed font-technical transition-all duration-500">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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

            {/* Right Content - Technical Specs */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {/* Technical Specifications */}
                <div className="space-y-4">
                  <div className="technical-label">Технические характеристики</div>
                  <div className="space-y-3">
                    {slides[currentSlide].specs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 transition-all duration-300">
                        <div className="blueprint-text">{spec.label}</div>
                        <div className="font-mono text-sm font-medium text-accent">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drawing Area Placeholder */}
                <div className="relative">
                  <div className="aspect-square bg-muted rounded-lg border-2 border-dashed border-border/50 flex items-center justify-center transition-all duration-300 hover:border-accent/30">
                    <div className="text-center space-y-2">
                      <svg className="w-16 h-16 text-primary/20 mx-auto transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div className="technical-label">Превью чертежа</div>
                    </div>
                  </div>
                  
                  {/* Technical Note */}
                  <div className="absolute -bottom-2 -right-2 glass p-3 rounded-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="font-mono text-xs font-medium text-success">СЕРТИФИКАТ</div>
                      <div className="technical-label">эко-дружелюбно</div>
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
        <div className="flex items-center space-x-6">
          {/* Slide Counter */}
          <div className="font-mono text-xs text-primary-light transition-all duration-300">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-8 h-0.5 transition-all duration-500 focus-visible ${
                  index === currentSlide
                    ? 'bg-accent scale-110'
                    : 'bg-primary-light/40 hover:bg-primary-light hover:scale-105'
                } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 border border-border rounded-full flex items-center justify-center transition-all duration-300 focus-visible ${
          isTransitioning 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-muted hover:border-accent hover:scale-110'
        }`}
      >
        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 border border-border rounded-full flex items-center justify-center transition-all duration-300 focus-visible ${
          isTransitioning 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-muted hover:border-accent hover:scale-110'
        }`}
      >
        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
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