import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "О компании - МегаХаусИнвест",
  keywords: "о компании, мега хаус инвест, mega house invest, строительная компания",
  description:
    "Узнайте больше о нашей строительной компании, нашей истории, команде и принципах работы.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionWrapper variant="dark" className="py-16 lg:py-24">
          <PageHero
            title="О"
            accent="КОМПАНИИ"
            variant="dark"
            subtitle="Уже более 7 лет мы создаем качественные дома, которые становятся настоящими крепостями для наших клиентов и их семей"
          />
        </SectionWrapper>

        {/* Company Story */}
        <SectionWrapper variant="dark" className="py-16 lg:py-24">
          <SectionHeader
            title="Наша"
            accent="история"
            variant="dark"
            className="text-center lg:text-left"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Компания{" "}
                <span className="text-accent font-semibold">
                  МегаХаусИнвест
                </span>{" "}
                была основана в 2019 году группой опытных строителей и
                архитекторов, объединенных общей идеей — создавать дома, которые
                служат поколениями.
              </p>
              <p>
                За годы работы мы реализовали{" "}
                <span className="text-accent font-semibold">200+ проектов</span>{" "}
                загородных домов: от компактных коттеджей площадью 107 м² до
                просторных домов площадью 129 м². Каждый проект для нас — это
                возможность воплотить мечты клиента в реальность.
              </p>
              <p>
                Наша философия проста:{" "}
                <span className="text-accent">
                  качество, надежность и честность
                </span>{" "}
                во всем. Мы используем только проверенные материалы, современные
                технологии и работаем с лучшими специалистами отрасли.
              </p>
            </div>
            <div className="relative">
              <video
                autoPlay
                preload="auto"
                muted
                loop
                className="w-full h-full object-cover rounded-2xl"
              >
                <source
                  src="https://s3.regru.cloud/megahouseinvest-s3/video/logo_short.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </SectionWrapper>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="px-6 lg:px-16 xl:px-32">
            <div className="mb-12 lg:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4">
                Миссия и <span className="text-accent">видение</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-muted p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-technical font-medium text-foreground mb-4">
                  Наша миссия
                </h3>
                <p className="text-primary-dark leading-relaxed">
                  Создавать качественные, надежные и красивые дома, которые
                  станут уютным пространством для жизни и работы наших клиентов.
                  Мы стремимся превзойти ожидания в каждом проекте.
                </p>
              </div>

              <div className="bg-muted p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-technical font-medium text-foreground mb-4">
                  Наше видение
                </h3>
                <p className="text-primary-dark leading-relaxed">
                  Стать ведущей строительной компанией в регионе, известной
                  своим профессионализмом, инновационными решениями и
                  безупречной репутацией. Мы хотим, чтобы каждый наш проект стал
                  эталоном качества.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-neutral-950">
          <div className="px-6 lg:px-16 xl:px-32">
            <div className="mb-12 lg:mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-white mb-4">
                Наши <span className="text-accent">ценности</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Качество",
                  description:
                    "Используем только проверенные материалы и современные технологии",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Надежность",
                  description:
                    "Соблюдаем все сроки и обязательства перед клиентами",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Прозрачность",
                  description:
                    "Открыто информируем о ходе работ и всех расходах",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Инновации",
                  description: "Постоянно внедряем новые технологии и решения",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75-7.478a12.121 12.121 0 00-3.75.194m.75 3.284a18.923 18.923 0 01-2.25.234c-1.266 0-2.5-.083-3.647-.247C6.855 14.571 6 13.46 6 12.238a3.646 3.646 0 01.2-1.238l1.2-3c.22-.55.77-1 1.35-1H15.25c.58 0 1.13.45 1.35 1l1.2 3c.132.398.2.82.2 1.238 0 1.222-.855 2.333-2.103 2.596"
                      />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-white/15 group-hover:border-accent/50 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-technical text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="px-6 lg:px-16 xl:px-32 text-center">
            <div className="bg-muted rounded-3xl p-12 border border-border max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-technical font-medium text-primary mb-4">
                Готовы начать свой <span className="text-accent">проект</span>?
              </h2>
              <p className="text-lg text-primary-dark mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для консультации и обсуждения вашего проекта.
                Мы поможем воплотить вашу мечту в реальность.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-lg font-technical font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
