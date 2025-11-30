import React, { useState } from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FaceRegion {
  id: string;
  label: string;
  top: number;
  left: number;
  description: string;
  treatments: string[];
}

const regions: FaceRegion[] = [
  {
    id: 'forehead',
    label: 'Terço Superior',
    top: 25,
    left: 50,
    description: 'Região propensa a linhas de expressão dinâmicas causadas pelo movimento muscular repetitivo.',
    treatments: ['Toxina Botulínica (Preventivo/Corretivo)', 'Skinbooster (Hidratação)']
  },
  {
    id: 'eyes',
    label: 'Olhos & Glabela',
    top: 38,
    left: 28,
    description: 'Área delicada que demonstra os primeiros sinais de cansaço, olheiras e pés de galinha.',
    treatments: ['Preenchimento de Olheiras', 'Botox para Pés de Galinha', 'Fios de PDO']
  },
  {
    id: 'malar',
    label: 'Malar (Maçãs)',
    top: 50,
    left: 75,
    description: 'O "efeito blush". A sustentação desta área é fundamental para o efeito lifting natural do rosto.',
    treatments: ['Preenchimento Malar (Top Model Look)', 'Bioestimuladores de Colágeno']
  },
  {
    id: 'lips',
    label: 'Lábios & Sorriso',
    top: 70,
    left: 50,
    description: 'Perda de volume e definição do contorno labial, além do "bigode chinês" ao redor.',
    treatments: ['Preenchimento Labial', 'Preenchimento de Sulco Nasogeniano', 'HydraGloss']
  },
  {
    id: 'jaw',
    label: 'Mandíbula & Queixo',
    top: 82,
    left: 25,
    description: 'A moldura do rosto. Uma linha mandibular definida transmite jovialidade e força.',
    treatments: ['Preenchimento de Mandíbula', 'Preenchimento de Mento (Queixo)', 'Lipo de Papada']
  }
];

const FaceMap3D: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<FaceRegion | null>(null);

  return (
    <section id={SectionId.FACEMAP} className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-3 block">Interativo</span>
          <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-4">
            Mapa da Harmonização
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Clique nos pontos do rosto para descobrir os tratamentos ideais para cada região.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* 3D Wireframe Graphic */}
          <FadeIn className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center select-none">
            {/* Background Circle to match screenshot */}
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.05)] transform scale-110"></div>
            
            <div className="relative w-full h-full p-6">
              {/* SVG Face Wireframe - Stylized Line Art */}
              <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-lg opacity-80">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0A062" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#C0A062" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                {/* Face Contour - More elegant shape */}
                <path 
                  d="M100,20 C145,20 175,55 175,110 C175,180 155,230 100,265 C45,230 25,180 25,110 C25,55 55,20 100,20 Z" 
                  fill="none" 
                  stroke="#C0A062" 
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />

                {/* Internal Features - Artistic Lines */}
                {/* Eyebrows */}
                <path d="M55,90 Q75,80 90,90" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />
                <path d="M110,90 Q125,80 145,90" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />
                
                {/* Eyes */}
                <path d="M60,110 Q75,118 90,110" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />
                <path d="M110,110 Q125,118 140,110" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />

                {/* Nose */}
                <path d="M100,120 Q100,150 100,155 Q92,165 100,170 Q108,165 100,155" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />

                {/* Mouth */}
                <path d="M75,195 Q100,205 125,195" fill="none" stroke="#C0A062" strokeWidth="0.6" opacity="0.7" />
                <path d="M75,195 Q100,215 125,195" fill="none" stroke="#C0A062" strokeWidth="0.5" opacity="0.5" />
                
                {/* Aesthetic Guide Lines (Subtle) */}
                <path d="M100,20 L100,265" fill="none" stroke="#C0A062" strokeWidth="0.2" opacity="0.2" strokeDasharray="2 2" />
                <path d="M25,110 L175,110" fill="none" stroke="#C0A062" strokeWidth="0.2" opacity="0.2" strokeDasharray="2 2" />
              </svg>

              {/* Interactive Points */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center transition-all duration-300 z-10 group focus:outline-none`}
                  style={{ top: `${region.top}%`, left: `${region.left}%` }}
                >
                  <span className={`absolute w-full h-full rounded-full border border-brand-gold animate-ping opacity-50 ${activeRegion?.id === region.id ? 'bg-brand-gold/30' : ''}`}></span>
                  <span className={`relative w-3 h-3 rounded-full shadow-lg transition-all duration-300 border-2 border-white ${activeRegion?.id === region.id ? 'bg-brand-teal scale-125' : 'bg-brand-gold group-hover:bg-brand-teal'}`}></span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Info Panel */}
          <FadeIn delay={200} className="w-full lg:w-1/2 min-h-[320px]">
            <div className="relative h-full">
              {activeRegion ? (
                <div className="bg-cream rounded-3xl p-8 border border-brand-gold/20 shadow-xl transition-all duration-500 animate-fade-in-up h-full flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-logo-serif text-brand-teal">{activeRegion.label}</h3>
                    <div className="p-2 bg-white rounded-full text-brand-gold shadow-sm">
                      <Sparkles size={20} />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {activeRegion.description}
                  </p>

                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">Tratamentos Indicados</h4>
                    <ul className="space-y-2">
                      {activeRegion.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-brand-teal font-medium text-sm">
                          <ArrowRight size={14} className="text-brand-gold flex-shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/30">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm animate-pulse-slow text-brand-gold">
                     <svg className="w-8 h-8 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-gray-400 mb-2 font-logo-serif">Selecione uma região</h3>
                   <p className="text-gray-400 text-sm font-light">Explore os procedimentos disponíveis tocando nos pontos dourados.</p>
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default FaceMap3D;