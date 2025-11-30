import React, { useState } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: SectionId) => void;
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre Nós', id: SectionId.ABOUT },
    { label: 'Protocolos', id: SectionId.SERVICES },
    { label: 'Depoimentos', id: SectionId.TESTIMONIALS },
    { label: 'Contato', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <img 
              src="https://i.imgur.com/RQeOxrJ.png" 
              alt="Mellore Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/200x50/005E5D/FFFFFF?text=Mellore';
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 hover:text-brand-teal font-medium text-sm uppercase tracking-wide transition-colors relative py-2 overflow-hidden group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-right group-hover:origin-bottom-left"></span>
              </button>
            ))}
            
            <button 
              onClick={onOpenBooking}
              className="bg-brand-teal hover:bg-[#004847] text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 active:scale-95"
            >
              Agendar Avaliação
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-teal p-2 transition-colors hover:bg-gray-100 rounded-full"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-brand-teal hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onOpenBooking();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-brand-teal text-white font-bold py-3 rounded-lg shadow-md hover:bg-[#004847] transition-colors"
            >
              Agendar Avaliação
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;