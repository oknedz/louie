'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function CarSales() {
  const { isLangThai } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-[#F8F9FA] mb-12">
            {isLangThai ? 'ขายรถยนต์' : 'Car Sales'}
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-lg border border-[#BDC3C7]/20 overflow-hidden hover:border-[#E63946] transition-colors">
                <div className="aspect-video bg-[#2a2a2a] flex items-center justify-center">
                  <span className="text-[#BDC3C7]">Car Image {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F8F9FA] mb-2">Used Car {i}</h3>
                  <p className="text-[#BDC3C7] mb-4">Year, Model, Details</p>
                  <p className="text-[#E63946] text-2xl font-bold">฿XXX,XXX</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
