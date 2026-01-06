'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { isLangThai } = useLanguage();
  
  const services = [
    { 
      title: { en: 'Full Body Paint', th: 'ทาสีรถทั้งคัน' }, 
      desc: { en: 'Complete car repainting with premium materials', th: 'ทาสีรถใหม่ทั้งคันด้วยวัสดุคุณภาพสูง' }
    },
    { 
      title: { en: 'Spot Repair', th: 'ซ่อมจุดด่างดำ' }, 
      desc: { en: 'Quick and precise damage fixes', th: 'ซ่อมแซมความเสียหายอย่างรวดเร็วและแม่นยำ' }
    },
    { 
      title: { en: 'Custom Colors', th: 'สีตามสั่ง' }, 
      desc: { en: 'Unique color matching and custom designs', th: 'ผสมสีและออกแบบตามความต้องการ' }
    },
    { 
      title: { en: 'Clear Coat', th: 'เคลือบเงา' }, 
      desc: { en: 'Professional protective coating', th: 'เคลือบเงาป้องกันแบบมืออาชีพ' }
    },
    { 
      title: { en: 'Detailing', th: 'ดีเทลลิ่ง' }, 
      desc: { en: 'Complete interior and exterior detailing', th: 'ดีเทลลิ่งภายในและภายนอกครบวงจร' }
    },
    { 
      title: { en: 'Restoration', th: 'ฟื้นฟูสภาพรถ' }, 
      desc: { en: 'Classic car restoration services', th: 'บริการฟื้นฟูรถคลาสสิก' }
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] pt-16">
        {/* Hero Section - Full Image */}
        <section className="h-screen relative overflow-hidden">
          <Image
            src="/eugene-chystiakov-JzOOT4kY_NE-unsplash.png"
            alt="Car body spray work"
            fill
            className="object-cover object-right md:object-center animate-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="max-w-3xl text-center">
              <h1 className="text-5xl md:text-7xl text-[#F8F9FA] mb-6">
                <span className="font-bold">LOUIE</span> <span className="font-light">Pattaya</span><br />
                <span className="font-mono font-semibold">Car<span className="bg-[radial-gradient(ellipse_at_center,_#00BCD4_0%,_#2196F3_50%,_#9C27B0_100%)] bg-clip-text text-transparent">&</span>Color</span>
              </h1>
              <p className="text-xl text-[#F8F9FA] mb-8">
                {isLangThai ? 'บริการทาสีและซ่อมแซมรถยนต์แบบมืออาชีพ' : 'Expert automotive painting and restoration services'}
              </p>
              <Link href="/gallery">
                <button className="bg-[#2196F3] text-white px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(33,150,243,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(33,150,243,0.8)] transition-all">
                  {isLangThai ? 'ดูผลงานของเรา' : 'View Our Work'}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-[#F8F9FA] mb-12 text-center">
              {isLangThai ? 'บริการของเรา' : 'Our Services'}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className="relative overflow-hidden p-8 rounded-lg border border-[#BDC3C7]/20 hover:border-[#2196F3]/40 transition-colors"
                  style={{
                    backgroundColor: '#1a1a1a'
                  }}
                >
                  {/* Left Pattern Strip with Gradient */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-32"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                  />
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-32"
                    style={{
                      background: 'linear-gradient(to right, rgba(33, 150, 243, 0.1), transparent)'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-mono font-bold text-[#F8F9FA] mb-4">
                      {isLangThai ? service.title.th : service.title.en}
                    </h3>
                    <p className="text-[#BDC3C7]">
                      {isLangThai ? service.desc.th : service.desc.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
