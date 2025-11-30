
import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "Adorei a clinica, muito fácil o acesso ao metrô, tudo muito bem organizado, sofisticado, profissionais altamente qualificadas... realizei o procedimento de botox e preenchimento labial e queixo, curtindo muito o resultado. Super indico 🥰",
      author: "Kely Cristina Souza"
    },
    {
      text: "Foi maravilhosa minha experiência! Ambiente lindo, recepção perfeita e a alta qualidade no atendimento! Dra Dania é uma profissional singular.",
      author: "Dayana Elias"
    },
    {
      text: "Ótimo atendimento, limpeza, organização. Dra. Amanda muito simpática, explicou tudo, antes, durante e depois do atendimento. Preparo dos produtos na sua frente... Atendimento da Regina muito transparente. Valores justos e produtos de qualidade.",
      author: "Andreia Cortez"
    }
  ];

  const googleReviewsUrl = "https://www.google.com/maps/place/Mellore+Est%C3%A9tica+Avan%C3%A7ada/@-23.5410929,-46.5736746,292m/data=!3m1!1e3!4m8!3m7!1s0x94ce5f4bf2149faf:0xc95b0ba49a1b8aeb!8m2!3d-23.5410929!4d-46.5725896!9m1!1b1!16s%2Fg%2F11yl_70f7k?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-brand-teal overflow-hidden border-t border-b border-teal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Centralizado */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#C0A062" stroke="none" />
              ))}
            </div>
            <span className="text-white text-xs font-bold tracking-wide uppercase">Excelência 5.0 no Google</span>
          </div>

          <h2 className="text-4xl font-logo-serif text-white mb-3 font-medium">
            O que dizem nossos pacientes
          </h2>
          <p className="text-teal-100 italic font-light text-lg">
            Histórias reais de transformação e confiança.
          </p>
        </FadeIn>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 150} className="h-full">
              <div className="bg-white p-10 rounded-xl border border-gray-100 shadow-[0_5px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col items-center text-center transform hover:-translate-y-1">
                
                {/* Estrelas */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} fill="#C0A062" stroke="none" />
                  ))}
                </div>

                {/* Texto do Depoimento */}
                <p className="text-gray-500 italic font-light leading-relaxed mb-8 text-lg">
                  "{review.text}"
                </p>

                {/* Autor */}
                <div className="mt-auto">
                  <p className="text-brand-teal font-bold font-logo-serif text-lg">
                    - {review.author}
                  </p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <FadeIn delay={400} className="flex justify-center">
          <a 
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 font-bold uppercase text-sm tracking-widest group"
          >
            Ver mais avaliações no Google
            <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
};

export default Testimonials;
