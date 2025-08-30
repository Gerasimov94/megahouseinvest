import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  const principles = [
    {
      title: "Строить с доверием",
      description: "Мы берем на себя всю сложность процесса, чтобы подарить нашим клиентам уверенность в завтрашнем дне и ключи от идеального дома, построенного в срок и в рамках бюджета.",
    },
    {
      title: "Превращать сложные задачи в простые и элегантные решения",
      description: "Мы строим с душой, думаем о деталях и берем на себя ответственность за результат, чтобы вы могли наслаждаться процессом созидания вместе с нами.",
    },
    {
      title: "Реализовывать амбициозные проекты",
      description: "Реализовывать амбициозные проекты любой сложности, объединяя лучших профессионалов и самые эффективные процессы, чтобы обеспечивать исключительную ценность для наших клиентов, партнеров и общества.",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
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

      <div className="relative z-10 px-6 lg:px-16 xl:px-32">
        <AnimatedSection animation="fade-up">
          <div className="space-y-16">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-technical font-medium text-primary leading-tight">
                О КОМПАНИИ
              </h2>
              <div className="space-y-4 text-primary-light font-technical text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                <p>
                  Мы не просто строим здания — мы создаем пространства, где начнется новая глава вашей жизни. 
                  Где будут звучать детские шаги и собираться за большим столом несколько поколений семьи. 
                </p>
                <p>
                  Доверьте нам воплощение вашей самой сокровенной мечты — мечты о собственном доме.
                </p>
              </div>
            </div>

            {/* Technical Principles */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4">
                  НАША МИССИЯ
                </h3>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                {principles.map((principle, index) => (
                  <div key={index} className="border border-border/30 rounded-lg p-6 lg:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group bg-white/50">
                    <div className="space-y-4">
                      <h4 className="font-technical text-lg font-semibold text-primary group-hover:text-accent transition-colors leading-tight">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-primary-light leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 