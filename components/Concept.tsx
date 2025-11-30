
import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8 opacity-90">
            <span className="h-px w-8 bg-brand-gold"></span>
            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.25em]">Conceito Mellore</span>
            <span className="h-px w-8 bg-brand-gold"></span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-8 leading-tight">
            "O tempo passa, mas sua beleza <br className="hidden md:block"/>
            <span className="italic text-brand-gold font-light">não precisa apagar</span>."
          </h2>

          {/* Body Text (Pain Point & Solution) */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              Olhar no espelho e notar o rosto cansado ou aquele "bigode chinês" não precisa ser sua realidade diária.
            </p>
            
            <div className="w-12 h-px bg-gray-200 mx-auto"></div>

            <p className="text-lg md:text-xl text-brand-teal font-medium leading-relaxed">
              Na Mellore, redefinimos a estética como <span className="text-brand-gold">resgate da autoestima</span>. <br/>
              Sem exageros, apenas a melhor versão de quem você já é.
            </p>
          </div>

          {/* Icon Decoration */}
          <div className="mt-12 flex justify-center">
            <Sparkles className="text-brand-gold opacity-50 animate-pulse-slow" size={28} strokeWidth={1} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Concept;
