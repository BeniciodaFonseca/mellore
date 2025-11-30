
import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id={SectionId.SERVICES} className="py-20 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-3 block">Soluções Completas</span>
          <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-4">
            Nossos Protocolos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Tecnologia de ponta e técnicas refinadas para face e corpo.
          </p>
        </FadeIn>

        {/* --- DESTAQUE 1: LIPO DE PAPADA (Especialidade) --- */}
        <FadeIn className="mb-12">
          <div className="relative bg-brand-teal rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Imagem */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src="https://i.imgur.com/BSh6qPJ.png" 
                alt="Lipo de Papada - Especialidade Dra. Dania" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-teal via-transparent to-transparent opacity-90 md:opacity-100"></div>
            </div>
            
            {/* Conteúdo */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-brand-gold fill-brand-gold" size={18} />
                <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Especialidade Dra. Dania</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-logo-serif mb-4 leading-tight">
                Lipo de Papada <br/>
                <span className="text-brand-gold/80 italic font-light">Definição & Elegância</span>
              </h3>
              
              <p className="text-teal-100 mb-8 font-light leading-relaxed text-lg">
                <strong className="text-white block mb-2">A papada te incomoda nas fotos?</strong>
                Recupere o contorno do seu rosto com a Lipo de Papada. Procedimento seguro, rápido e que cabe no seu bolso.
              </p>
              
              <button 
                onClick={onOpenBooking}
                className="bg-brand-gold hover:bg-[#b09055] text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:translate-x-1 w-fit flex items-center gap-3"
              >
                Quero agendar minha Lipo
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- DESTAQUE 2: HIPRO (Tecnologia) --- */}
          <FadeIn delay={100} className="lg:col-span-1">
            <div className="bg-white h-full rounded-3xl p-8 border border-brand-gold/20 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide z-10">
                Novidade Exclusiva
              </div>
              
              <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Zap className="text-brand-gold" size={28} />
              </div>
              
              <h3 className="text-2xl font-logo-serif text-brand-teal mb-2">HIPRO</h3>
              <p className="text-sm font-bold text-brand-gold mb-4 uppercase tracking-wide">Ultrassom Microfocado</p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A tecnologia mais avançada para <strong>lifting facial sem cortes</strong>. Trata a flacidez muscular e dérmica, estimulando colágeno profundo para um efeito tensor imediato e duradouro.
              </p>
              
              <button onClick={onOpenBooking} className="text-brand-teal font-bold text-sm border-b border-brand-teal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors">
                Saiba mais sobre o HIPRO
              </button>
            </div>
          </FadeIn>

          {/* --- LISTA DE SERVIÇOS --- */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            
            {/* Harmonização */}
            <FadeIn delay={200} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-logo-serif text-brand-teal mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Harmonização Facial
              </h4>
              <ul className="space-y-4">
                {[
                  "Preenchimento Labial",
                  "Rinomodelação",
                  "Bigode Chinês",
                  "Mandíbula e Mento (Queixo)",
                  "Preenchimento Malar (Top Model Look)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-brand-teal opacity-50 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Rejuvenescimento & Corporal */}
            <FadeIn delay={300} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-logo-serif text-brand-teal mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                Rejuvenescimento e Corporal
              </h4>
              <ul className="space-y-4">
                {[
                  "Botox (Toxina Botulínica)",
                  "Escleroterapia (Secagem de Vasinhos)",
                  "Enzimas (Gordura Localizada)",
                  "Tratamento para Estrias",
                  "Bioestimuladores de Colágeno"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-brand-teal opacity-50 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Tem dúvida sobre qual é o ideal para você?</p>
          <button 
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-brand-gold transition-colors"
          >
            Falar com uma especialista
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
