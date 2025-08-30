import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPANY_CONTACTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Услуги - MegaHouse Invest',
  description: 'Полный спектр строительных услуг: от проектирования до сдачи объекта под ключ. Строительство домов, коттеджей, коммерческих объектов.',
};

const services = [
  {
    title: 'Строительство жилых домов',
    description: 'Возведение коттеджей, загородных домов и таунхаусов любой сложности',
    features: [
      'Индивидуальные проекты',
      'Типовые решения',
      'Реконструкция и расширение',
      'Строительство под ключ'
    ],
    price: 'от 35 000 ₽/м²'
  },
  {
    title: 'Коммерческое строительство',
    description: 'Строительство офисных зданий, торговых центров, производственных помещений',
    features: [
      'Офисные здания',
      'Торговые центры',
      'Складские помещения',
      'Производственные цеха'
    ],
    price: 'от 28 000 ₽/м²'
  },
  {
    title: 'Проектирование',
    description: 'Архитектурное и конструктивное проектирование зданий и сооружений',
    features: [
      'Архитектурные решения',
      'Конструктивные проекты',
      '3D-визуализация',
      'Авторский надзор'
    ],
    price: 'от 800 ₽/м²'
  },
  {
    title: 'Инженерные системы',
    description: 'Проектирование и монтаж всех видов инженерных коммуникаций',
    features: [
      'Электроснабжение',
      'Водоснабжение и канализация',
      'Отопление и вентиляция',
      'Слаботочные системы'
    ],
    price: 'от 3 500 ₽/м²'
  },
  {
    title: 'Отделочные работы',
    description: 'Внутренняя и внешняя отделка любой сложности',
    features: [
      'Черновая отделка',
      'Чистовая отделка',
      'Фасадные работы',
      'Ландшафтный дизайн'
    ],
    price: 'от 8 000 ₽/м²'
  },
  {
    title: 'Капитальный ремонт',
    description: 'Комплексный ремонт и реконструкция существующих зданий',
    features: [
      'Перепланировка',
      'Усиление конструкций',
      'Замена коммуникаций',
      'Обновление фасада'
    ],
    price: 'от 15 000 ₽/м²'
  }
];

const stages = [
  {
    title: 'Консультация',
    description: 'Бесплатная консультация по вашему проекту',
    duration: '1 день'
  },
  {
    title: 'Проектирование',
    description: 'Разработка проекта с учетом всех ваших пожеланий',
    duration: '2-4 недели'
  },
  {
    title: 'Согласование',
    description: 'Получение всех необходимых разрешений',
    duration: '1-3 недели'
  },
  {
    title: 'Строительство',
    description: 'Возведение объекта согласно проекту',
    duration: '3-12 месяцев'
  },
  {
    title: 'Сдача',
    description: 'Сдача готового объекта и гарантийное обслуживание',
    duration: '1 неделя'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-muted via-white to-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                Наши услуги
              </h1>
              <p className="text-xl text-primary-dark max-w-3xl mx-auto">
                Полный спектр строительных услуг от проектирования до сдачи объекта под ключ. 
                Работаем с объектами любой сложности.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-muted p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-primary-dark mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Включает:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-primary-dark">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary font-display">
                        {service.price}
                      </span>
                      <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Этапы работы
              </h2>
              <p className="text-lg text-primary-dark max-w-2xl mx-auto">
                Прозрачный процесс от консультации до сдачи готового объекта
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {stages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl font-display mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-primary-dark mb-2">
                    {stage.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {stage.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Почему выбирают нас
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: '15+ лет опыта',
                  description: 'Многолетний опыт в строительстве'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: '200+ проектов',
                  description: 'Успешно реализованных объектов'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: '5 лет гарантии',
                  description: 'На все виды работ'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  ),
                  title: '100% качество',
                  description: 'Строгий контроль на всех этапах'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-dark">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold font-display mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Получите бесплатную консультацию и коммерческое предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Link 
                 href="/#contact" 
                 className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
               >
                 Получить консультацию
               </Link>
              <a 
                href={COMPANY_CONTACTS.phone.href}
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 