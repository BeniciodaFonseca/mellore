
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { ChevronDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      // Set idle state after 3 seconds of inactivity
      timeoutId = setTimeout(() => setIsIdle(true), 3000);
    };

    // Events to detect user interaction
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      window.addEventListener(event as any, resetTimer);
    });

    // Initial timer start
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event as any, resetTimer);
      });
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById(SectionId.ABOUT);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById(SectionId.SERVICES);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511911540998";
    const message = encodeURIComponent("Olá! Vim pelo site da Mellore e gostaria de agendar uma avaliação.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      id={SectionId.HOME} 
      className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/ZDzBypN.jpeg" 
          alt="Mellore Estética Avançada" 
          className="w-full h-full object-cover object-center md:object-right"
        />
      </div>

      {/* Heavy Gradient Overlay for Text Readability (Left to Right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031f1e] via-[#031f1e]/80 to-transparent z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        
        <div className="max-w-2xl animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/50 bg-brand-teal/30 backdrop-blur-sm mb-6">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Novo Conceito no Tatuapé</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-logo-serif text-white leading-[1.1] mb-6 drop-shadow-lg">
            A beleza não é <br />
            sorte. É <span className="text-brand-gold italic font-light">decisão</span>.
          </h1>

          {/* Subtitle */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-1 h-12 bg-brand-teal rounded-full hidden sm:block"></div>
            <p className="text-lg text-gray-200 font-light leading-relaxed max-w-lg">
              Protocolos exclusivos e tecnologia de ponta para realçar sua melhor versão com segurança e sofisticação.
            </p>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={handleWhatsAppClick}
              className={`
                bg-brand-gold text-white text-sm md:text-base font-bold py-4 px-8 rounded-full shadow-lg
                transition-all duration-300 hover:bg-[#b09055] hover:scale-105 uppercase tracking-wide
                ${isIdle ? 'animate-pulse-scale' : ''}
              `}
            >
              Agendar Avaliação
            </button>
            
            <button 
              onClick={scrollToServices}
              className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm md:text-base hover:bg-white/10 transition-all hover:border-white"
            >
              Descubra seu tratamento ideal
            </button>
          </div>

          {/* Technical Responsibility Footer */}
          <div className="flex items-center gap-2 text-white/40 text-[10px] md:text-xs uppercase tracking-wider font-medium">
            <ShieldCheck size={14} className="text-brand-gold" />
            <p>Responsável Técnica: Dra. Dania El Hayek | CRO-94069</p>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit text-white/30 hover:text-brand-gold transition-colors duration-300 animate-bounce z-30"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
