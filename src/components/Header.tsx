'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_CONTACTS } from '@/lib/constants';

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
    // { name: 'Услуги', href: '/services' },
    { name: 'Портфолио', href: '/#portfolio' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border/20'
          : 'bg-black/40'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-end space-x-3 group">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={52} 
              height={52} 
              className={`transition-all duration-300 ${
                isScrolled ? '' : 'invert brightness-0'
              }`}
            />
            <div className="flex flex-col">
              <div className={`font-technical text-2xl font-medium group-hover:text-accent transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                <span className={isScrolled ? 'text-primary' : 'text-white'}>МегаХаус</span>
                <span className="text-accent">Инвест</span>
              </div>
              <div className={`font-technical text-xs mb-[2px] group-hover:text-accent transition-colors ${
                isScrolled ? 'text-primary' : 'text-white/80'
              }`}>
                Строительная компания
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-technical text-base hover:text-accent transition-colors group ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <div className="hidden lg:flex flex-col space-y-1 text-left">
              <div className={`font-technical text-xs ${
                isScrolled ? 'text-primary/70' : 'text-white/80'
              }`}>
                {COMPANY_CONTACTS.address.display}
              </div>
              <div className="flex flex-col space-y-0.5">
                <a
                  href={COMPANY_CONTACTS.phone.href}
                  className={`font-technical text-sm hover:text-accent transition-colors ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {COMPANY_CONTACTS.phone.display}
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col cursor-pointer items-center justify-center space-y-1.5"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${
              isScrolled ? 'bg-primary' : 'bg-white'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="pt-6 pb-6 bg-white/95 backdrop-blur-md border-t border-border/20">
          <div className="container py-6 px-4">
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
              
              {/* Mobile Contacts */}
              <div className="border-t border-border/20 pt-4 mt-4">
                <div className="space-y-2">
                  <div className="font-technical text-xs text-primary/70">
                    {COMPANY_CONTACTS.address.display}
                  </div>
                  <div className="space-y-1">
                    <a
                      href={COMPANY_CONTACTS.phone.href}
                      className="block font-technical text-sm text-primary hover:text-accent transition-colors"
                    >
                     {COMPANY_CONTACTS.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 