import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании - MegaHouse Invest',
  description: 'Узнайте больше о нашей строительной компании, нашей истории, команде и принципах работы.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-muted via-white to-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
                О компании MegaHouse Invest
              </h1>
              <p className="text-xl text-primary-dark max-w-3xl mx-auto">
                Более 15 лет мы создаем качественные дома, которые становятся 
                настоящими крепостями для наших клиентов
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                  Наша история
                </h2>
                <div className="space-y-4 text-primary-dark">
                  <p>
                    Компания MegaHouse Invest была основана в 2018 году группой 
                    опытных строителей и архитекторов, объединенных общей идеей — 
                    создавать дома, которые служат поколениями.
                  </p>
                  <p>
                    За годы работы мы построили более 200 объектов различной сложности: 
                    от уютных загородных коттеджей до масштабных коммерческих зданий. 
                    Каждый проект для нас — это возможность воплотить мечты клиента в реальность.
                  </p>
                  <p>
                    Наша философия проста: качество, надежность и честность во всем. 
                    Мы используем только проверенные материалы, современные технологии 
                    и работаем с лучшими специалистами отрасли.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-light to-primary rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white/30">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12V8l-2 2-2-2-2 2-2-2-2 2v6h10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                  Наша миссия
                </h3>
                <p className="text-primary-dark">
                  Создавать качественные, надежные и красивые дома, которые станут 
                  уютным пространством для жизни и работы наших клиентов. Мы стремимся 
                  превзойти ожидания в каждом проекте.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                  Наше видение
                </h3>
                <p className="text-primary-dark">
                  Стать ведущей строительной компанией в регионе, известной своим 
                  профессионализмом, инновационными решениями и безупречной репутацией. 
                  Мы хотим, чтобы каждый наш проект стал эталоном качества.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Наши ценности
              </h2>
              <p className="text-lg text-primary-dark max-w-2xl mx-auto">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Качество',
                  description: 'Используем только проверенные материалы и современные технологии'
                },
                {
                  title: 'Надежность',
                  description: 'Соблюдаем все сроки и обязательства перед клиентами'
                },
                {
                  title: 'Прозрачность',
                  description: 'Открыто информируем о ходе работ и всех расходах'
                },
                {
                  title: 'Инновации',
                  description: 'Постоянно внедряем новые технологии и решения'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <h3 className="text-xl font-semibold font-display text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-primary-dark text-sm">
                    {value.description}
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
              Готовы начать свой проект?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь с нами для консультации и обсуждения вашего проекта
            </p>
                         <Link 
               href="/#contact" 
               className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
             >
               Связаться с нами
             </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 