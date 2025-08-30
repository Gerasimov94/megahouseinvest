const projects = [
  {
    title: 'Загородный дом в Подмосковье',
    area: '280 м²',
    year: '2023',
    description: 'Современный двухэтажный дом с панорамными окнами и террасой'
  },
  {
    title: 'Коттедж в скандинавском стиле',
    area: '160 м²',
    year: '2023',
    description: 'Уютный дом из натурального дерева с большими окнами'
  },
  {
    title: 'Дом в стиле хай-тек',
    area: '320 м²',
    year: '2022',
    description: 'Минималистичный дом с использованием современных технологий'
  },
  {
    title: 'Классический особняк',
    area: '450 м²',
    year: '2022',
    description: 'Респектабельный дом в классическом стиле с колоннами'
  }
];

const testimonials = [
  {
    name: 'Михаил Петров',
    project: 'Загородный дом',
    text: 'Отличная работа! Дом построили точно в срок, качество превзошло ожидания. Особенно впечатлила работа с инженерными системами.',
    rating: 5
  },
  {
    name: 'Елена Сидорова',
    project: 'Коттедж',
    text: 'Очень довольны результатом. Команда профессиональная, всегда на связи. Дом получился именно таким, как мы мечтали.',
    rating: 5
  },
  {
    name: 'Андрей Волков',
    project: 'Дом хай-тек',
    text: 'Современные технологии, качественные материалы, соблюдение всех сроков. Рекомендую эту компанию!',
    rating: 5
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="px-6 lg:px-16 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-technical text-foreground mb-4">
            Наши <span className="text-accent">проекты</span>
          </h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Уже более 500 семей живут в домах, построенных нашими специалистами!
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-light to-primary rounded-xl overflow-hidden mb-4 relative">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-white/30">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Посмотреть проект</span>
                </div>
              </div>
              
              <h3 className="font-semibold font-display text-foreground mb-2">
                {project.title}
              </h3>
              <div className="flex justify-between text-sm text-primary-dark mb-2">
                <span>{project.area}</span>
                <span>{project.year}</span>
              </div>
              <p className="text-sm text-primary-dark">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Компонент отзывов клиентов
export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-950">
      <div className="px-6 lg:px-16 xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-technical mb-4 text-white">
            Отзывы <span className="text-accent">клиентов</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-300">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white/80 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-white/60">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 