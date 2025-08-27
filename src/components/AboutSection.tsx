import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  const principles = [
    {
      title: "Полный цикл строительства",
      description: "Работаем от архитектурного проекта до регистрации",
    },
    {
      title: "КОНТРОЛЬ КАЧЕСТВА",
      description: "Строгий контроль на каждом этапе строительства",
    },
    {
      title: "ИННОВАЦИИ",
      description: "Передовые технологии и энергоэффективные решения",
    },
    {
      title: "ИНДИВИДУАЛЬНОСТЬ",
      description: "Каждый проект уникален и отражает личность владельца",
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
        <div>
          {/* Main Content - Expanded */}
          <div className="lg:col-span-8">
            <AnimatedSection animation="fade-up">
              <div className="space-y-8">
                {/* Mission Statement */}
                <div className="space-y-6">
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
                          <div className="md:col-span-2 space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-technical text-sm font-medium text-primary group-hover:text-accent transition-colors">
                                {principle.title}
                              </h3>
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
} 