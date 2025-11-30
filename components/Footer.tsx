
import React from 'react';
import { SectionId } from '../types';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer>
      <div className="bg-brand-teal text-white py-16 border-t border-teal-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img src="https://i.imgur.com/RQeOxrJ.png" alt="Mellore" className="h-14 w-auto brightness-0 invert opacity-95" />
              </div>
              <p className="text-teal-50/90 text-sm leading-relaxed">
                Referência em estética avançada e bem-estar no Tatuapé. Tecnologias modernas e atendimento humanizado para revelar sua melhor versão.
              </p>
              <div className="pt-2 border-t border-teal-700/50">
                <p className="text-brand-gold font-bold text-sm">Responsável Técnica</p>
                <p className="text-white font-medium text-sm">Dra. Dania El Hayek</p>
                <p className="text-teal-200 text-xs">CRO-SP 94069</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.instagram.com/melloreofc/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-transform hover:scale-110" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@melloreofc" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-transform hover:scale-110" aria-label="TikTok">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6 text-sm">Navegação</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => scrollToSection(SectionId.HOME)} className="hover:text-brand-gold transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-brand-gold transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection(SectionId.TESTIMONIALS)} className="hover:text-brand-gold transition-colors">Depoimentos</button></li>
                <li><button onClick={() => scrollToSection(SectionId.CONTACT)} className="hover:text-brand-gold transition-colors">Fale Conosco</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6 text-sm">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold mt-0.5 opacity-80 flex-shrink-0" />
                  <span className="text-teal-50">Rua Platina, 275, Salas 111-112<br/>Tatuapé, São Paulo - SP</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-gold opacity-80 flex-shrink-0" />
                  <span className="text-teal-50">(11) 91154-0998</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-gold opacity-80 flex-shrink-0" />
                  <span className="text-teal-50">contato@mellore.com.br</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-6 text-sm">Horários</h4>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between text-teal-50">
                  <span>Seg - Sex:</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between text-teal-50">
                  <span>Sábado:</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-teal-50/60">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#004847] text-teal-200/70 py-6 border-t border-teal-800/30 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Mellore Estética Avançada. Todos os direitos reservados.</p>
            <p className="mt-1 text-teal-200/50 text-[10px] uppercase tracking-wide">
              Mellore Odontologia e Estetica Facial e Corporal LTDA | CNPJ: 62.362.100/0001-15
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
