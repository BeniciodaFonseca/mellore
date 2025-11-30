
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    message: ''
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista completa de fotos da clínica fornecidas
  const images = [
    "https://i.imgur.com/KTtU2ZC.png",  // Recepção com Logo
    "https://i.imgur.com/0J080H7.jpeg", // Sala de Procedimentos
    "https://i.imgur.com/By2CAEv.jpeg", // Mesa de Atendimento
    "https://i.imgur.com/3GfVvPr.jpeg", // Área de Preparo/Espelho
    "https://i.imgur.com/sZd8gEM.jpeg", // Cantinho do Café
    "https://i.imgur.com/zewLfEu.jpeg"  // Corredor/Ambiente
  ];

  // Automatic Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, interest, message } = formData;
    
    // Validation
    if (!name || !interest) {
      alert("Por favor, preencha os campos obrigatórios (Nome e Interesse).");
      return;
    }

    // Construct the WhatsApp message (Without phone number field)
    const text = `*Olá, vim pelo site da Mellore!* 👋%0A%0A` +
      `*Nome:* ${name}%0A` +
      `*Tenho interesse em:* ${interest}%0A` +
      (message ? `*Mensagem:* ${message}` : '');

    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/5511911540998?text=${text}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');

    // Clear form after sending for better UX
    setFormData({
      name: '',
      interest: '',
      message: ''
    });
  };

  return (
    <section id={SectionId.CONTACT} className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Agende sua visita</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-teal">
            Estamos esperando por você
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Info + Automatic Carousel */}
          <FadeIn direction="up" className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Automatic Carousel */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg group border border-gray-100">
               {images.map((img, index) => (
                 <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                 >
                   <img 
                     src={img} 
                     alt={`Espaço Mellore ${index + 1}`} 
                     className="w-full h-full object-cover"
                   />
                   {/* Overlay Gradient for better visibility of dots if needed */}
                   <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
                 </div>
               ))}

               {/* Dots Navigation */}
               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                 {images.map((_, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setCurrentImageIndex(idx)}
                     className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                       idx === currentImageIndex 
                         ? 'bg-white w-6' 
                         : 'bg-white/60 w-2 hover:bg-white'
                     }`}
                     aria-label={`Ver foto ${idx + 1}`}
                   />
                 ))}
               </div>
            </div>

            <div className="w-full space-y-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-teal border-b border-gray-100 pb-4 mb-6">Informações de Contato</h3>
              
              {/* Address */}
              <div className="flex items-start space-x-5 group">
                <div className="bg-brand-teal text-white rounded-full p-3 flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Endereço</h4>
                  <p className="text-gray-600 leading-relaxed">Rua Platina, 275, Salas 111-112<br/>Tatuapé, São Paulo - SP<br/>CEP: 03308-010</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-5 group">
                <div className="bg-brand-teal text-white rounded-full p-3 flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600 mb-3">Agende sua avaliação agora mesmo.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-5 group">
                <div className="bg-brand-teal text-white rounded-full p-3 flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 09:00 - 18:00</p>
                  <p className="text-gray-600">Sábado: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Right Column: Form + Map */}
          <FadeIn direction="up" delay={200} className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* WhatsApp Form */}
            <div className="bg-[#fcfdfd] p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-teal mb-2 flex items-center gap-2">
                <MessageCircle size={24} className="text-brand-gold" />
                Fale Conosco
              </h3>
              <p className="text-gray-500 text-sm mb-6">Preencha os dados abaixo e iniciaremos seu atendimento via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-teal mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-brand-teal mb-1">Interesse *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all appearance-none"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="Harmonização Facial">Harmonização Facial</option>
                    <option value="Lipo de Papada">Lipo de Papada</option>
                    <option value="Botox">Botox</option>
                    <option value="Preenchimento Labial">Preenchimento Labial</option>
                    <option value="Bioestimuladores">Bioestimuladores</option>
                    <option value="Outros">Outras Dúvidas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-teal mb-1">Mensagem (Opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Como podemos te ajudar?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-gold text-white font-bold py-4 rounded-lg shadow-md hover:bg-[#b09055] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-brand-gold/30 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.653452678078!2d-46.56942188440701!3d-23.54516386702684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9a4f651c6b%3A0x639a5840c83a731!2sR.%20Platina%2C%2C%20275%20-%20Vila%20Azevedo%2C%20S%C3%A3o%2Paulo%20-%20SP%2C%2003308-010%2C%20Brazil!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
