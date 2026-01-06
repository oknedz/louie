'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { isLangThai, setIsLangThai } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { en: 'Home', th: 'หน้าแรก', href: '/' },
    { en: 'Gallery', th: 'ผลงานของเรา', href: '/gallery' },
    { en: 'Car Sales', th: 'ขายรถยนต์', href: '/car-sales' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    } border-b border-[#BDC3C7]/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center transition-all duration-300">
            <img 
              src="/logo.png" 
              alt="LOUIE" 
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-mono font-semibold transition-all group ${
                  pathname === item.href 
                    ? 'text-[#2196F3]' 
                    : 'text-[#121212] hover:text-[#2196F3]'
                }`}
              >
                {isLangThai ? item.th : item.en}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2196F3] transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setIsLangThai(!isLangThai)}
              className="relative text-sm font-mono font-semibold px-4 py-2 rounded-full overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <span className="relative z-10 text-[#121212] group-hover:text-[#2196F3] transition-colors duration-300">
                {isLangThai ? 'EN' : 'ไทย'}
              </span>
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(156, 39, 176, 0.15) 100%)'
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 relative w-10 h-10"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span 
                className="block w-6 h-0.5 bg-[#121212] transition-all duration-300 ease-out"
                style={{
                  transform: isMobileMenuOpen ? 'rotate(45deg) translateY(0px)' : 'rotate(0) translateY(-6px)',
                }}
              />
              <span 
                className="block w-6 h-0.5 bg-[#121212] transition-all duration-300 ease-out"
                style={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: 'translateY(0px)',
                }}
              />
              <span 
                className="block w-6 h-0.5 bg-[#121212] transition-all duration-300 ease-out"
                style={{
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(0px)' : 'rotate(0) translateY(6px)',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          style={{ 
            position: 'fixed',
            top: isScrolled ? '64px' : '80px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 60, 
            backgroundColor: 'rgb(18, 18, 18)',
            width: '100%',
            height: `calc(100vh - ${isScrolled ? '64px' : '80px'})`
          } as React.CSSProperties}
        >
          <div className="flex flex-col items-center justify-start h-full space-y-8 pt-12">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-mono font-bold transition-colors ${
                  pathname === item.href ? 'text-[#2196F3]' : 'text-[#F8F9FA] hover:text-[#2196F3]'
                }`}
              >
                {isLangThai ? item.th : item.en}
              </Link>
            ))}
            
            <button
              onClick={() => setIsLangThai(!isLangThai)}
              className="relative text-xl font-mono font-semibold px-10 py-4 rounded-full overflow-hidden group mt-4"
              style={{
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(156, 39, 176, 0.2) 100%)',
                border: '2px solid rgba(248, 249, 250, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span className="relative z-10 text-[#F8F9FA] group-hover:scale-110 inline-block transition-transform duration-300">
                {isLangThai ? 'EN' : 'ไทย'}
              </span>
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.4) 0%, rgba(156, 39, 176, 0.4) 100%)'
                }}
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
