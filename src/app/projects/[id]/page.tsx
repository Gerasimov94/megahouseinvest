import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { PROJECTS } from '@/lib/constants';
import Link from 'next/link';
import ProjectCarousel from '@/components/ProjectCarousel';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Проект не найден',
    };
  }

  return {
    title: `${project.title} - ${project.area} м² - МегаХаусИнвест`,
    description: project.description,
    keywords: `${project.title}, дом ${project.area} м², строительство домов, проект дома`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative py-10 md:py-12 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${project.baseUrl}/1.webp)`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </div>

          {/* Back Button - Absolute Position */}
          <Link
            href="/#projects"
            className="absolute top-4 left-6 lg:left-16 xl:left-32 z-20 inline-flex items-center text-sm text-white/80 hover:text-accent transition-colors group"
          >
            <svg className="w-4 h-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">К проектам</span>
          </Link>

          {/* Content */}
          <div className="relative z-10 px-6 lg:px-16 xl:px-32 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-technical font-bold text-white mb-3 drop-shadow-2xl">
                {project.title}
              </h1>
              <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto drop-shadow-lg">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery Carousel */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="px-6 lg:px-16 xl:px-32">
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4 text-center">
                Галерея <span className="text-accent">проекта</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="max-w-6xl mx-auto">
              <ProjectCarousel projectTitle={project.title} id={project.id}/>
            </div>
          </div>
        </section>

        {/* Price Estimate Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="px-6 lg:px-16 xl:px-32">
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4 text-center">
                Стоимость <span className="text-accent">строительства</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/30 rounded-2xl p-8 md:p-12 text-center">
                <div className="mb-6">
                  <div className="text-base md:text-lg text-primary-dark font-medium mb-3">
                    Стоимость проекта под ключ
                  </div>
                  <div className="text-4xl md:text-6xl lg:text-7xl font-technical font-bold text-accent">
                    {(project.area * 55000).toLocaleString('ru-RU')} <span className="text-3xl md:text-4xl lg:text-5xl">₽</span>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-accent/20 rounded-xl p-6 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-sm text-primary-dark leading-relaxed">
                        Указана ориентировочная стоимость строительства дома «под ключ».
                        Итоговая цена зависит от материалов, комплектации, особенностей участка
                        и ваших пожеланий. Свяжитесь с нами для точного расчета.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="px-6 lg:px-16 xl:px-32">
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4 text-center">
                Документация <span className="text-accent">проекта</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* PDF Plan */}
              <a
                href={`${project.baseUrl}/plan.pdf`}
                download
                className="group bg-muted border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-technical font-medium text-foreground mb-2">
                  Описание проекта
                </h3>
                <p className="text-sm text-primary-dark mb-4">
                  Подробная информация о проекте в формате PDF
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Скачать PDF
                  <svg className="w-5 h-5 ml-1 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                  </svg>
                </span>
              </a>

              {/* AutoCAD Plan */}
              <a
                href={`${project.baseUrl}/plan-autocad.dwg`}
                download
                className="group bg-muted border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <h3 className="text-xl font-technical font-medium text-foreground mb-2">
                  План AutoCAD
                </h3>
                <p className="text-sm text-primary-dark mb-4">
                  Чертежи проекта для AutoCAD (.dwg)
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Скачать DWG
                  <svg className="w-5 h-5 ml-1 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="px-6 lg:px-16 xl:px-32 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4">
                Дом вашей мечты <span className="text-accent">ближе</span>, чем вы думаете
              </h2>
              <p className="text-lg text-primary-dark mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для консультации и обсуждения деталей. Мы поможем адаптировать проект под ваши потребности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-lg font-technical font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Связаться с нами
                </Link>
                <Link
                  href="/#projects"
                  className="inline-block bg-white hover:bg-neutral-100 text-primary border border-border hover:border-accent/50 px-8 py-3 rounded-lg font-technical font-medium transition-all shadow-sm"
                >
                  Другие проекты
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

