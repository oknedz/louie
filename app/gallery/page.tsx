'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { isLangThai } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/denin-lawley-YWl9W8iBiUk-unsplash.avif', alt: 'Car 1' },
    { src: '/eugene-chystiakov-JzOOT4kY_NE-unsplash.avif', alt: 'Car 2' },
    { src: '/eugene-chystiakov-JzOOT4kY_NE-unsplash.avif', alt: 'Car 3' },
    { src: '/florian-schneider-799KfBloSFQ-unsplash.avif', alt: 'Car 4' },
    { src: '/teo-zac-AFuFR5VVilo-unsplash.avif', alt: 'Car 5' },
    { src: '/wolf-schram-19t6J2RVqQE-unsplash.avif', alt: 'Car 6' },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#121212] pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-[#F8F9FA] mb-12">
            {isLangThai ? 'แกลเลอรี่' : 'Gallery'}
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <div 
                key={i} 
                onClick={() => openModal(i)}
                className="relative aspect-video bg-[#1a1a1a] rounded-lg border border-[#BDC3C7]/20 hover:border-[#2196F3]/40 transition-all overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i < 3}
                  loading={i < 3 ? undefined : 'lazy'}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Fullscreen Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-[#F8F9FA] hover:text-[#2196F3] transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-[#F8F9FA] hover:text-[#2196F3] transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-[#F8F9FA] hover:text-[#2196F3] transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div 
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#F8F9FA] text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
