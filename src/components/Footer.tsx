import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 py-16 lg:pb-24 px-6 lg:px-16 xl:px-32">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-end space-x-3 group">
                <Image 
                  src="/logo.svg" 
                  alt="Logo" 
                  width={52} 
                  height={52} 
                  className="invert brightness-0"
                />
                <div className="flex flex-col">
                  <div className="font-technical text-2xl font-medium group-hover:text-accent transition-colors text-white">
                    <span className="text-white">МегаХаус</span>
                    <span className="text-accent">Инвест</span>
                  </div>
                  <div className="font-technical text-xs mb-[2px] group-hover:text-accent transition-colors text-white/80">
                    Строительная компания
                  </div>
                </div>
              </Link>

              <p className="text-white/80 text-base leading-relaxed max-w-md">
                Мы не просто строим здания — мы создаем пространства, где начнется новая глава вашей жизни.
              </p>

              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-technical font-medium text-accent">5+</div>
                  <div className="text-sm text-white/60">лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-technical font-medium text-accent">50+</div>
                  <div className="text-sm text-white/60">проектов</div>
                </div>
                <div>
                  <div className="text-2xl font-technical font-medium text-accent">100%</div>
                  <div className="text-sm text-white/60">качество</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-technical font-semibold text-lg mb-6 text-white">Навигация</h3>
              <nav className="space-y-3">
                <Link
                  href="/"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  Главная
                </Link>
                <Link
                  href="/about"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  О компании
                </Link>
                {/* <Link
                  href="/services"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  Услуги
                </Link> */}
                <Link
                  href="/#portfolio"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  Портфолио
                </Link>
                <Link
                  href="/#contact"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  Контакты
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-technical font-semibold text-lg mb-6 text-white">Контакты</h3>
              <div className="space-y-4">
                <a
                  href="tel:+79001847777"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  +7-900-184-77-77
                </a>
                <a
                  href="mailto:megahouseinvest@mail.ru"
                  className="block text-white/70 hover:text-accent transition-colors font-technical text-sm"
                >
                  megahouseinvest@mail.ru
                </a>
                <div className="text-white/70 font-technical text-sm">
                  Ул.Текучева 238/73
                </div>
                <div className="text-white/60 text-xs font-technical">
                  Пн-Пт: 9:00-18:00<br />
                  Сб-Вс: 10:00-16:00
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-white/20"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789L23.097 5.55c.353-1.394-.521-2.027-1.432-1.833z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-white/20"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.687"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-white/60 font-technical text-sm">
                © {new Date().getFullYear()} МегаХаусИнвест. Все права защищены.
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs">
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-accent transition-colors font-technical"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-accent transition-colors font-technical"
                >
                  Условия использования
                </Link>
                <Link
                  href="/cookies"
                  className="text-white/60 hover:text-accent transition-colors font-technical"
                >
                  Cookie
                </Link>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}