const advantages = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Гарантия качества',
    description: 'Гарантийный срок на строительные работы 5 лет, согласно ст.756 ГК РФ.'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Соблюдение сроков',
    description: 'Строгое следование плану строительства закреплённое в договоре'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Прозрачная оплата',
    description: 'Эскроу-счет - Ваши деньги находятся в безопасности в банке, пока не построим дом.'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm6-11a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Фиксированная стоимость',
    description: 'Стоимость строительства не увеличивается в процессе, после согласования цены смета фиксируется.'
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    title: 'Опытная команда',
    description: 'Мы квалифицированные специалисты с многолетним опытом'
  }
];

export default function AdvantagesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="px-6 lg:px-16 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-technical text-foreground mb-4">
            Наши <span className="text-accent">преимущества</span>
          </h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас для строительства своих домов
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold font-technical text-foreground mb-4">
                {advantage.title}
              </h3>
              <p className="text-primary-dark text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}