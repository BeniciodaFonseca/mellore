import React, { useState, useRef } from 'react';
import { X, Upload, Camera, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { analyzeSkin } from '../services/gemini';
import { AnalysisResult } from '../types';

interface SkinAnalyzerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkinAnalyzer: React.FC<SkinAnalyzerProps> = ({ isOpen, onClose }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setError(null);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);

    try {
      // Remove data:image/...;base64, prefix
      const base64Data = image.split(',')[1];
      const analysis = await analyzeSkin(base64Data);
      setResult(analysis);
    } catch (err) {
      setError("Não foi possível analisar a imagem. Tente novamente com uma foto mais clara.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-green-900/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col border border-gold-500/20">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-cream">
          <div>
             <h3 className="font-serif text-2xl font-bold text-green-800 flex items-center gap-2">
               <Sparkles className="text-gold-500" size={24}/>
               Análise Facial IA
             </h3>
             <p className="text-green-800/60 text-sm">Descubra o tratamento ideal para você em segundos.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gold-500/10 rounded-full transition-colors">
            <X className="text-green-800" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1">
          {!result ? (
            <div className="flex flex-col items-center justify-center space-y-8">
              
              {/* Image Preview or Placeholder */}
              <div className="w-full max-w-sm aspect-square bg-cream rounded-2xl border-2 border-dashed border-gold-500/30 flex items-center justify-center overflow-hidden relative group hover:border-gold-500 transition-colors">
                {image ? (
                  <img src={image} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <Camera className="text-teal-600" size={32} />
                    </div>
                    <p className="text-green-800 font-medium">Carregue uma selfie</p>
                    <p className="text-green-800/50 text-xs mt-2">Para melhores resultados, use boa iluminação e sem maquiagem.</p>
                  </div>
                )}
                
                {/* Upload Trigger overlay */}
                <div 
                  className="absolute inset-0 bg-green-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <p className="text-white font-bold flex items-center gap-2">
                    <Upload size={20} /> Alterar Foto
                  </p>
                </div>
              </div>

              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />

              {/* Actions */}
              <div className="w-full max-w-sm space-y-3">
                {!image ? (
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-green-800 text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors"
                  >
                    Selecionar Foto
                  </button>
                ) : (
                  <button 
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="w-full bg-gold-500 text-green-900 font-bold py-3 rounded-xl hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Analisando...
                      </>
                    ) : (
                      "Analisar Agora"
                    )}
                  </button>
                )}
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg text-sm">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

            </div>
          ) : (
            // Results View
            <div className="space-y-8 animate-fadeIn">
              <div className="bg-cream p-6 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-4 mb-4 border-b border-stone-200 pb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500">
                     <img src={image!} alt="Analyzed" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-green-800">Resultado da Análise</h4>
                    <p className="text-teal-600 text-sm">Baseado na tecnologia Gemini AI</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-green-800/60 mb-2 uppercase text-xs tracking-wider">Tipo de Pele</h5>
                    <p className="text-lg font-serif text-gold-600">{result.skinType}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-green-800/60 mb-2 uppercase text-xs tracking-wider">Preocupações Identificadas</h5>
                    <div className="flex flex-wrap gap-2">
                      {result.concerns.map((c, idx) => (
                        <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-green-800 border border-stone-200 shadow-sm">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-stone-100">
                   <h5 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                     <Sparkles size={18} className="text-gold-500"/> Tratamentos Recomendados
                   </h5>
                   <ul className="space-y-3">
                     {result.recommendations.map((rec, idx) => (
                       <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                         <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 flex-shrink-0"></span>
                         {rec}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="bg-green-800 text-stone-200 p-6 rounded-2xl shadow-lg">
                   <h5 className="font-bold text-gold-500 mb-4">Rotina Sugerida</h5>
                   <p className="text-sm leading-relaxed whitespace-pre-line text-green-50">
                     {result.routine}
                   </p>
                </div>
              </div>

              <button 
                onClick={() => setResult(null)} 
                className="w-full border border-stone-300 text-green-800 font-bold py-3 rounded-xl hover:bg-cream transition-colors"
              >
                Nova Análise
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkinAnalyzer;