import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Михаил Петров',
    project: 'Загородный дом 107 м²',
    text: 'Отличная работа! Дом построили точно в срок, качество превзошло ожидания. Особенно впечатлила работа с инженерными системами.',
    rating: 5
  },
  {
    name: 'Елена Сидорова',
    project: 'Компактный коттедж 109 м²',
    text: 'Очень довольны результатом. Команда профессиональная, всегда на связи. Дом получился именно таким, как мы мечтали.',
    rating: 5
  },
  {
    name: 'Андрей Волков',
    project: 'Семейный дом 110 м²',
    text: 'Современные технологии, качественные материалы, соблюдение всех сроков. Рекомендую эту компанию!',
    rating: 5
  }
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-white">
      <div className="px-6 lg:px-16 xl:px-32">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4">
            Наши <span className="text-accent">проекты</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-dark max-w-2xl mx-auto">
            Выберите готовый проект дома или закажите индивидуальную разработку
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-light to-primary rounded-xl overflow-hidden mb-4 relative">
                {/* Project image */}
                <Image
                  src={`${project.baseUrl}/1.webp`}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Посмотреть проект</span>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="font-semibold font-display text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-dark mb-3 flex-grow">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-border/30 mt-auto">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-primary-dark">Стоимость от</span>
                    <span className="text-lg font-semibold text-accent">
                      {(project.area * 55000).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              </div>
            </Link>
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
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-technical font-medium text-white mb-4">
            Отзывы <span className="text-accent">клиентов</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
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