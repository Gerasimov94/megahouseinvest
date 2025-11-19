import AnimatedSection from './AnimatedSection';
import { COMPANY_CONTACTS } from '@/lib/constants';

export default function ServicesSection() {
  const services = [
    {
      title: 'Строительство',
      description: 'Полный цикл строительства от фундамента до крыши с использованием современных технологий',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Качественные материалы', 'Конструкции любой сложности', '5 лет гарантии']
    },
    {
      title: 'Проектирование',
      description: 'Индивидуальные и типовые проекты с учетом всех ваших пожеланий и современных стандартов',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Архитектурные проекты', 'Конструктивные решения', '3D визуализация']
    },
    {
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж всех инженерных коммуникаций для комфортного проживания',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['Электроснабжение', 'Отопление и вентиляция', 'Водоснабжение и канализация']
    },
    {
      title: 'Отделочные работы',
      description: 'Чистовая отделка интерьера и экстерьера с вниманием к каждой детали',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      ),
      features: ['Внутренняя отделка', 'Фасадные работы', 'Ландшафтный дизайн']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-neutral-950 relative overflow-hidden w-full">
      <div className="relative z-10 px-6 lg:px-16 xl:px-32">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <div className="space-y-6">
            <h2 className="text-fluid-lg font-technical font-medium text-white leading-tight max-w-4xl mx-auto">
              От мечты — к плану. <span className="text-accent">От плана — к дому.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Полный цикл строительства от проекта до ключей. Строим дома вашей мечты
              с гарантией качества и соблюдением сроков.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="group"
            >
              <div className="flex flex-col gap-4 justify-between bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                {/* Icon */}
                <div className="flex justify-start items-center gap-2">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-technical font-medium text-white">
                    {service.title}
                  </h3>
                </div>
               
                {/* Content */}
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-2xl font-technical font-medium text-white mb-4">
              Готовы начать свой проект?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и узнайте,
              как мы можем построить дом вашей мечты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-accent text-black px-8 py-4 rounded-lg font-technical font-medium hover:bg-accent/90 transition-colors"
              >
                Получить консультацию
              </a>
              <a
                href={COMPANY_CONTACTS.phone.href}
                className="bg-white/20 text-white px-8 py-4 rounded-lg font-technical font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}