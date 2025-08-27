import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
  const services = [
    {
      title: 'Строительство',
      description: 'Проектирование и возведение энергоэффективных домов с использованием натуральных материалов',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ['Экологичные материалы', 'Кострукции любой сложности', 'Гарантия результата']
    },
    {
      title: 'Консалтинг',
      description: 'Экспертные консультации по строительству и сопровождительной документации',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Стратегия устойчивости', 'Сертификация', 'Документация']
    },
    {
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж экологичных инженерных коммуникаций',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: ['Электроснабжение', 'Отопление', 'Водоснабжение']
    }
  ];

  return (
    <section className="section-padding bg-gradient-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-wood/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="space-y-6">
            <div className="text-xs font-medium tracking-wider text-accent uppercase">
              Наши услуги
            </div>

            <h2 className="text-fluid-lg font-serif font-medium text-primary leading-tight max-w-4xl mx-auto">
              Создаем <span className="text-gradient">решения</span> для каждого пространства
            </h2>

            <p className="text-lg text-primary-light max-w-2xl mx-auto leading-relaxed">
              От концепции до реализации — комплексные услуги по созданию
              экологичных и энергоэффективных пространств
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="group"
            >
              <div className="card p-8 h-full hover:shadow-xl transition-all duration-300">
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-medium text-primary">
                    {service.title}
                  </h3>

                  <p className="text-primary-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-primary-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-wood/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-border/50">
            <h3 className="text-2xl font-serif font-medium text-primary mb-4">
              Готовы начать свой проект?
            </h3>
            <p className="text-primary-light mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и узнайте,
              как мы можем помочь создать ваше идеальное экологичное пространство
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn btn-primary px-8 py-4 focus-visible"
              >
                Получить консультацию
              </a>
              <a
                href="tel:+74951234567"
                className="btn btn-secondary px-8 py-4 focus-visible"
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