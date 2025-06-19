import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  const principles = [
    {
      code: "ЭКО_001",
      title: "ЭКОЛОГИЧНОСТЬ",
      description: "Только сертифицированные экологически чистые материалы",
      value: "100%",
      unit: "эко-материалы"
    },
    {
      code: "КАЧ_002", 
      title: "КОНТРОЛЬ КАЧЕСТВА",
      description: "Строгий контроль на каждом этапе строительства",
      value: "24/7",
      unit: "мониторинг"
    },
    {
      code: "ИНН_003",
      title: "ИННОВАЦИИ",
      description: "Передовые технологии и энергоэффективные решения",
      value: "А+",
      unit: "энерго-класс"
    },
    {
      code: "ИНД_004",
      title: "ИНДИВИДУАЛЬНОСТЬ", 
      description: "Каждый проект уникален и отражает личность владельца",
      value: "1:1",
      unit: "индивид-проект"
    }
  ];

  return (
    <section className="section-padding mt-8 bg-white relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(45, 55, 72, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 55, 72, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content - Expanded */}
          <div className="lg:col-span-8">
            <AnimatedSection animation="fade-up">
              <div className="space-y-8">
                {/* Mission Statement */}
                <div className="space-y-6">
                  <div className="technical-label">О компании • Осн. 2009</div>
                  
                  <h2 className="text-fluid-lg font-technical font-medium text-primary leading-tight">
                    СОЗДАЕМ УСТОЙЧИВЫЕ<br />
                    <span className="text-accent">ПРОСТРАНСТВА ДЛЯ ЖИЗНИ</span>
                  </h2>
                  
                  <div className="space-y-4 text-primary-light font-technical text-fluid-base leading-relaxed max-w-3xl">
                    <p>
                      Мы — команда профессионалов, объединенных общей миссией создания 
                      экологичных и энергоэффективных домов.
                    </p>
                    <p>
                      Наша философия основана на гармонии с природой и использовании 
                      передовых технологий для минимизации воздействия на окружающую среду.
                    </p>
                  </div>
                </div>

                {/* Technical Principles */}
                <div className="space-y-6">
                  <div className="technical-label">Основные принципы</div>
                  
                  <div className="grid gap-4 lg:gap-6">
                    {principles.map((principle, index) => (
                      <div key={index} className="border border-border/50 rounded-lg p-4 lg:p-6 hover:border-accent/50 transition-colors group">
                        <div className="grid md:grid-cols-3 gap-3 lg:gap-4 items-center">
                          {/* Code */}
                          <div className="space-y-1">
                            <div className="technical-label">Код</div>
                            <div className="font-mono text-sm text-primary">{principle.code}</div>
                          </div>
                          
                          {/* Content */}
                          <div className="md:col-span-2 space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-technical text-sm font-medium text-primary group-hover:text-accent transition-colors">
                                {principle.title}
                              </h3>
                              <div className="flex items-baseline space-x-1">
                                <span className="font-mono text-sm font-medium text-accent">{principle.value}</span>
                                <span className="technical-label">{principle.unit}</span>
                              </div>
                            </div>
                            <p className="text-sm text-primary-light">{principle.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Technical Diagram */}
          <div className="lg:col-span-4">
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="space-y-8">
                {/* Environmental Impact */}
                <div className="space-y-4">
                  <div className="technical-label">Воздействие на экологию</div>
                  
                  <div className="aspect-square bg-muted/50 rounded-lg border-2 border-dashed border-border/50 flex items-center justify-center relative">
                    <div className="text-center space-y-3">
                      <svg className="w-20 h-20 text-success/30 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <div className="technical-label">эко-чертеж</div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded">
                      <div className="text-center">
                        <div className="font-mono text-xs font-medium text-success">CO₂</div>
                        <div className="technical-label">нейтральн</div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded">
                      <div className="text-center">
                        <div className="font-mono text-xs font-medium text-wood">А+</div>
                        <div className="technical-label">эффективн</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Timeline */}
                <div className="space-y-4">
                  <div className="technical-label">Таймлайн достижений</div>
                  
                  <div className="space-y-3">
                    {[
                      { year: "2009", event: "основание компании" },
                      { year: "2015", event: "эко-сертификация" },
                      { year: "2020", event: "100-й проект" },
                      { year: "2024", event: "углеродная нейтральность" }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 py-2 border-l-2 border-accent/30 pl-4">
                        <div className="font-mono text-xs font-medium text-accent min-w-[3rem]">
                          {achievement.year}
                        </div>
                        <div className="blueprint-text flex-1">{achievement.event}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Stats */}
                <div className="space-y-4">
                  <div className="technical-label">Ключевые показатели</div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border border-border/30 rounded-lg">
                      <div className="font-technical text-lg font-medium text-accent">200+</div>
                      <div className="technical-label">проектов</div>
                    </div>
                    <div className="text-center p-4 border border-border/30 rounded-lg">
                      <div className="font-technical text-lg font-medium text-accent">15</div>
                      <div className="technical-label">лет опыта</div>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="border border-accent/30 rounded-lg p-4 bg-accent/5">
                  <div className="space-y-3">
                    <div className="technical-label">Начать работу</div>
                    <p className="text-xs text-primary-light leading-relaxed">
                      Готовы обсудить ваш будущий проект?
                    </p>
                    <a 
                      href="#contact" 
                      className="btn btn-primary w-full py-2 text-xs"
                    >
                      НАЧАТЬ ПРОЕКТ
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
} 