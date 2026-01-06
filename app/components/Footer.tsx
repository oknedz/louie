'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const { isLangThai } = useLanguage();
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <footer className="w-full">
      {/* Top Section with Pattern */}
      <div className="w-full relative overflow-hidden" style={{ 
        backgroundColor: '#121212', 
        borderTop: '1px solid rgba(189, 195, 199, 0.2)',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")"
      }}>
        <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Logo & About */}
              <div className="md:col-span-2">
                <img src="/logo.png" alt="LOUIE" className="h-16 mb-4" />
                <p className="text-[#BDC3C7] text-sm leading-relaxed">
                  {isLangThai 
                    ? 'บริการพ่นสีรถยนต์และซ่อมแซมรถยนต์คุณภาพสูง ในพัทยา ประเทศไทย'
                    : 'Premium car body spray painting and auto services in Pattaya, Thailand'}
                </p>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-[#F8F9FA] font-mono font-bold text-lg mb-4">
                  {isLangThai ? 'ติดต่อเรา' : 'Contact Us'}
                </h3>
                <div className="space-y-3 text-[#BDC3C7]">
                  <div>
                    <p className="text-xs text-[#BDC3C7]/60 mb-1">{isLangThai ? 'โทรศัพท์' : 'Phone'}</p>
                    <a href="tel:+66833851342" className="hover:text-[#2196F3] transition-colors">
                      +66 83 385 1342
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-[#BDC3C7]/60 mb-1">{isLangThai ? 'อีเมล' : 'Email'}</p>
                    <a href="mailto:info@louiepattaya.com" className="hover:text-[#2196F3] transition-colors">
                      info@louiepattaya.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h3 className="text-[#F8F9FA] font-mono font-bold text-lg mb-4">
                  {isLangThai ? 'เวลาทำการ' : 'Working Hours'}
                </h3>
                <div className="space-y-2 text-[#BDC3C7]">
                  <div className="flex justify-between">
                    <span>{isLangThai ? 'จันทร์ - เสาร์' : 'Mon - Sat'}</span>
                    <span className="text-[#2196F3]">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isLangThai ? 'อาทิตย์' : 'Sunday'}</span>
                    <span className="text-[#E63946]">{isLangThai ? 'ปิด' : 'Closed'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Google Map (Desktop Only) */}
            <div className="w-full hidden md:block">
              <h3 className="text-[#F8F9FA] font-mono font-bold text-lg mb-4">
                {isLangThai ? 'ที่ตั้ง LOUIE' : 'LOUIE Location'}
              </h3>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-[#BDC3C7]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.19847134!2d100.87!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQ4LjAiTiAxMDDCsDUyJzEyLjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={isLangThai ? 'แผนที่ LOUIE Pattaya' : 'LOUIE Pattaya Map'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - No Pattern */}
      <div className="w-full" style={{ backgroundColor: '#121212', borderTop: '1px solid rgba(189, 195, 199, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-8 py-6 text-center text-[#BDC3C7] text-sm">
          <p>© {new Date().getFullYear()} LOUIE Pattaya. {isLangThai ? 'สงวนลิขสิทธิ์' : 'All rights reserved.'}</p>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid rgba(189, 195, 199, 0.2)' }}>
        <div className="grid grid-cols-3 divide-x divide-[#BDC3C7]/20">
          {/* Call */}
          <a 
            href="tel:+66833851342"
            className="flex flex-col items-center justify-center py-3 hover:bg-[#2196F3]/10 transition-colors"
          >
            <svg className="w-6 h-6 mb-1 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs text-[#F8F9FA]">{isLangThai ? 'โทร' : 'Call'}</span>
          </a>

          {/* Maps */}
          <button 
            onClick={() => setShowMapModal(true)}
            className="flex flex-col items-center justify-center py-3 hover:bg-[#2196F3]/10 transition-colors"
          >
            <svg className="w-6 h-6 mb-1 text-[#2196F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs text-[#F8F9FA]">{isLangThai ? 'แผนที่' : 'Maps'}</span>
          </button>

          {/* Line */}
          <a 
            href="https://line.me/ti/p/@louiepattaya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 hover:bg-[#06C755]/10 transition-colors"
          >
            <svg className="w-6 h-6 mb-1" style={{ color: '#06C755' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <span className="text-xs text-[#F8F9FA]">Line</span>
          </a>
        </div>
      </div>

      {/* Map Modal */}
      {showMapModal && (
        <div 
          className="md:hidden fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={() => setShowMapModal(false)}
        >
          <div 
            className="w-full max-w-lg rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: '#1a1a1a' }}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#BDC3C7]/20">
              <h3 className="text-[#F8F9FA] font-mono font-bold text-lg">
                {isLangThai ? 'ที่ตั้ง LOUIE' : 'LOUIE Location'}
              </h3>
              <button 
                onClick={() => setShowMapModal(false)}
                className="text-[#BDC3C7] hover:text-[#F8F9FA]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.19847134!2d100.87!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQ4LjAiTiAxMDDCsDUyJzEyLjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isLangThai ? 'แผนที่ LOUIE Pattaya' : 'LOUIE Pattaya Map'}
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
