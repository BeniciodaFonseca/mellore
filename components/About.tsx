
import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-12 md:py-20 bg-cream overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Coluna 1: Narrativa Institucional */}
          <FadeIn className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6 mt-4 md:mt-0">
              <div className="h-px w-12 bg-brand-gold"></div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">Quem Somos</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-logo-serif text-brand-teal mb-4 md:mb-6 leading-tight">
              Duas Mulheres, <br/>
              <span className="text-brand-gold italic font-light">Uma Única Visão</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mb-6">
              A Mellore nasceu de um sonho compartilhado entre duas mulheres fortes. De um lado, a excelência clínica da <strong>Dra. Dania</strong>, especialista que ama cuidar e realçar belezas. Do outro, a expertise de <strong>Regina Costa</strong> em gestão de pessoas e negócios, garantindo que a excelência técnica seja acompanhada de uma experiência acolhedora e impecável.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Juntas, unimos a segurança técnica com a humanização do atendimento. Aqui não automatizamos o cuidado.
            </p>

            {/* Destaque para a História de Vida */}
            <div className="relative pl-6 border-l-4 border-brand-gold py-3 mb-8 bg-brand-teal/5 rounded-r-lg pr-4 shadow-sm inline-block lg:block text-left">
              <p className="text-lg md:text-2xl font-logo-serif italic text-brand-teal leading-relaxed">
                "Entendemos que por trás de cada desejo estético, existe uma história de vida que merece respeito."
              </p>
            </div>

            <div className="space-y-3 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0" />
                <span className="text-brand-teal font-medium">Segurança Clínica</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0" />
                <span className="text-brand-teal font-medium">Gestão Humanizada</span>
              </div>
            </div>
          </FadeIn>

          {/* Coluna 2: Cards das Sócias Compactos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card Dra. Dania */}
            <FadeIn delay={200} className="relative group h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://i.imgur.com/z0TZtqm.jpeg" 
                alt="Dra. Dania El Hayek" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal via-brand-teal/60 to-transparent opacity-90 sm:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-left">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">Técnica</p>
                <h3 className="text-xl font-logo-serif font-bold mb-1">Dra. Dania El Hayek</h3>
                <p className="text-xs text-white/90 mb-3 font-medium">Sócia & Cirurgiã-Dentista - CRO-SP 94069</p>
                <p className="text-xs leading-relaxed text-white/90 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  À frente da clínica. Como sócia técnica, a Dra. Dania foca exclusivamente na saúde e no resultado estético do paciente. Ela garante o rigor científico, a segurança dos procedimentos e a naturalidade dos resultados.
                </p>
              </div>
            </FadeIn>

            {/* Card Regina */}
            <FadeIn delay={400} className="relative group h-[450px] rounded-2xl overflow-hidden shadow-xl mt-0 sm:mt-12">
              <img 
                src="https://i.imgur.com/EHwUyqP.jpeg" 
                alt="Regina Costa" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal via-brand-teal/60 to-transparent opacity-90 sm:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-left">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">Gestão</p>
                <h3 className="text-xl font-logo-serif font-bold mb-1">Regina Costa</h3>
                <p className="text-xs text-white/90 mb-3 font-medium">Sócia & Gestão Estratégica</p>
                <p className="text-xs leading-relaxed text-white/90 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  À frente do negócio. Regina comanda a estrutura corporativa da Mellore. Com expertise em gestão de pessoas e processos, ela garante que a excelência técnica seja sustentada por uma organização eficiente, traduzindo nossa visão em uma experiência impecável, acolhedora e transformadora para cada paciente.
                </p>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
