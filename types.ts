
export enum SectionId {
  HOME = 'home',
  ABOUT = 'sobre',
  SERVICES = 'servicos',
  // ENVIRONMENT removed
  TESTIMONIALS = 'depoimentos',
  CONTACT = 'contato',
  FACEMAP = 'facemap',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AnalysisResult {
  skinType: string;
  concerns: string[];
  recommendations: string[];
  routine: string;
}
