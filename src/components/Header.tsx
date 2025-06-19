'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Портфолио', href: '/#portfolio' },
    { name: 'Контакты', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-primary rounded-sm flex items-center justify-center group-hover:border-accent transition-colors">
              <span className="font-technical text-sm font-bold text-primary group-hover:text-accent transition-colors">
                МИ
              </span>
            </div>
            <div className="font-technical text-lg font-medium text-primary group-hover:text-accent transition-colors">
              МегаХаус Инвест
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-technical text-sm text-primary hover:text-accent transition-colors group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="btn btn-primary px-6 py-2 text-sm"
            >
              КОНСУЛЬТАЦИЯ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
          >
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-border/20">
          <div className="container py-6">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-technical text-base text-primary hover:text-accent transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30">
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary w-full py-3 text-sm"
                >
                  КОНСУЛЬТАЦИЯ
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 