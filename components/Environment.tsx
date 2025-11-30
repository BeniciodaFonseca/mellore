import React, { useState, useEffect, useCallback } from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Environment: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "https://i.imgur.com/KTtU2ZC.png", alt: "Recepção Mellore" },
    { src: "https://i.imgur.com/0J080H7.jpeg", alt: "Sala de Procedimentos" },
    { src: "https://i.imgur.com/3GfVvPr.jpeg", alt: "Equipamentos e Tecnologia" },
    { src: "https://i.imgur.com/sZd8gEM.jpeg", alt: "Detalhes Decorativos" }
  ];

  // Logic to navigate images
  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="environment" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements - Subtle & Light */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Content with Integrated CTA */}
        <div className="mb-10 md:mb-12">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase">Nosso Espaço</span>
              <div className="h-px w-12 bg-brand-gold"></div>
            </div>
            
            <h2 className="font-logo-serif text-3xl md:text-5xl text-brand-teal mb-6 leading-tight">
              Sofisticação, Tecnologia e <br/>
              <span className="text-brand-gold italic font-light">Acolhimento em cada detalhe</span>
            </h2>
            
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              A Mellore transcende o conceito tradicional de clínica. Criamos um ecossistema de beleza onde a <strong>rigorosa biossegurança</strong> se funde com a serenidade de um spa. Um ambiente exclusivo, pensado do aroma à iluminação, para que você se sinta segura, valorizada e em paz antes mesmo de iniciar seu procedimento.
            </p>

            <a 
              href={`#${SectionId.CONTACT}`} 
              className="inline-flex items-center gap-2 text-brand-gold font-bold tracking-wide text-sm hover:text-brand-teal transition-colors group"
            >
              <span className="border-b border-brand-gold pb-1 group-hover:border-brand-teal transition-colors">Agende sua visita e vivencie essa experiência</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <FadeIn 
              key={index} 
              delay={100 * (index + 1)} 
              className={`rounded-2xl overflow-hidden h-64 shadow-lg hover:shadow-2xl border border-gray-100 group relative cursor-pointer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div onClick={() => setSelectedIndex(index)} className="w-full h-full relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Hover Overlay with Icon */}
                <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-brand-teal w-6 h-6" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Fluid Navigation Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-brand-teal/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50 hover:bg-white/10 rounded-full"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-brand-gold transition-all p-3 hover:bg-white/10 rounded-full z-50 transform hover:-translate-x-1"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-5xl max-h-[85vh] p-2"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              key={selectedIndex} // Force re-render for animation on change
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-[fadeIn_0.3s_ease-out]"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-white/70 font-light tracking-widest text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-brand-gold transition-all p-3 hover:bg-white/10 rounded-full z-50 transform hover:translate-x-1"
            onClick={handleNext}
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Environment;