const steps = [
  {
    number: '01',
    title: 'Консультация и планирование',
    description: 'Обсуждаем ваши потребности, изучаем участок, составляем техническое задание',
    duration: '1-2 недели'
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Разрабатываем архитектурный проект, создаем 3D-визуализацию, готовим рабочие чертежи',
    duration: '2-4 недели'
  },
  {
    number: '03',
    title: 'Согласование и разрешения',
    description: 'Получаем все необходимые разрешения и согласования для начала строительства',
    duration: '1-3 недели'
  },
  {
    number: '04',
    title: 'Подготовительные работы',
    description: 'Подготовка участка, разметка, завоз материалов и техники на объект',
    duration: '1 неделя'
  },
  {
    number: '05',
    title: 'Основные строительные работы',
    description: 'Возведение фундамента, стен, кровли, монтаж инженерных систем',
    duration: '3-6 месяцев'
  },
  {
    number: '06',
    title: 'Отделочные работы',
    description: 'Внутренняя и внешняя отделка, установка сантехники, электрики, финишные работы',
    duration: '1-3 месяца'
  },
  {
    number: '07',
    title: 'Сдача объекта',
    description: 'Финальная проверка качества, устранение замечаний, передача документов',
    duration: '1-2 недели'
  }
];

export default function WorkProcessSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Этапы работы
          </h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Пошаговый процесс строительства вашего дома — от идеи до готового объекта
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-16 top-32 w-0.5 h-16 bg-border"></div>
              )}
              
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8">
                {/* Step number */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl font-display mb-4">
                    {step.number}
                  </div>
                  <div className="text-sm text-primary-dark font-medium">
                    {step.duration}
                  </div>
                </div>

                {/* Step content */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                  <h3 className="text-xl font-semibold font-display text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-primary-dark">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-primary-dark mb-6">
            Готовы начать строительство вашего дома?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Начать проект
          </a>
        </div>
      </div>
    </section>
  );
} 