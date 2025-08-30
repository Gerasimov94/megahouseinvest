const steps = [
  {
    number: '01',
    title: 'Глубокое погружение',
    description: 'Мы начинаем с диалога, чтобы понять ваш образ жизни, вкусы и мечты.'
  },
  {
    number: '02',
    title: 'Проект как портрет',
    description: 'Наша цель - не просто создать дом, а сделать его отражением вашего образа жизни. Поэтому мы тщательно учитываем все ваши пожелания и предложения.'
  },
  {
    number: '03',
    title: 'Юридическая чистота',
    description: 'Поможем с оформлением участка и получением всех необходимых разрешений.'
  },
  {
    number: '04',
    title: 'Комплекс работ',
    description: 'От нулевого цикла с заливкой фундамента до финальной отделки с установкой всех инженерных систем.'
  },
  {
    number: '05',
    title: 'Контроль качества',
    description: 'На каждом этапе за процессом следят наши опытные руководители и технические специалисты.'
  },
  {
    number: '06',
    title: 'Сдача объекта',
    description: 'Вы получаете не просто коробку, а дом мечты, построенный нашими лучшими специалистами.'
  }
];

export default function WorkProcessSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="px-6 lg:px-16 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-technical text-foreground mb-4">
            Всего <span className="text-accent">шесть шагов</span> и ваш дом готов!
          </h2>
        </div>

        <div className="relative steps-timeline">
          <div className="absolute left-6 md:left-8 top-6 md:top-8 bottom-30 md:bottom-20 w-0.5 bg-gradient-to-b from-accent via-accent to-accent opacity-30"></div>
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-start gap-4 md:gap-8 step-item ${index === steps.length - 1 ? 'last-step' : ''}`}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center text-black font-bold text-lg md:text-xl font-technical shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg md:text-xl font-semibold font-technical text-foreground mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-primary-dark leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/50 border border-border shadow-sm backdrop-blur-sm rounded-2xl py-8 mx-auto">
            <h3 className="text-2xl text-foreground font-technical mb-4">
              Итог:
            </h3>
            <p className="text-primary-dark mb-6 leading-relaxed">
              Вы экономите ваше время, нервы и бюджет, получая гарантированный результат,
              который превзойдет ожидания.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-lg font-technical font-medium transition-colors"
            >
              Начать проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 