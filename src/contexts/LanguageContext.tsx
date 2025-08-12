import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    team: 'Team & Partners',
    events: 'Events & Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'AI & NexTGen Innovative Lab  ',
    heroSubtitle: 'Empowering Innovation at Ardhi University',
    heroDescription: 'Driving technological advancement through IoT, AI, GIS, and sustainable solutions for Tanzania and beyond.',
    joinCommunity: 'view more',
    
    // About Section
    aboutTitle: 'About Innovation Hub',
    missionTitle: 'Mission',
    missionText: 'To foster innovation and entrepreneurship in technology, creating sustainable solutions for societal challenges.',
    visionTitle: 'Vision',
    visionText: 'To be a leading innovation hub in East Africa, bridging academia and industry for technological advancement.',
    goalsTitle: 'Goals',
    
    // Team Section
    teamTitle: 'Our Team',
    coreTeam: 'Core Team',
    mentors: 'Mentors',
    partners: 'Institutional Partners',
    
    // Projects Section
    projectsTitle: 'Projects & Events',
    allProjects: 'All',
    ongoingProjects: 'Ongoing',
    completedProjects: 'Completed',
    upcomingEvents: 'Upcoming',
    
    // Contact Section
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our innovation team',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    footerDescription: 'Innovation Hub at Ardhi University - Driving technological advancement and sustainable innovation.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    
    // Common
    learnMore: 'Learn More',
    readMore: 'Read More',
    register: 'Register',
    viewProject: 'View Project',
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    about: 'Kuhusu Sisi',
    team: 'Timu na Washirika',
    events: 'Matukio na Miradi',
    contact: 'Mawasiliano',
    
    // Hero Section
    heroTitle: 'Kituo cha Uvumbuzi',
    heroSubtitle: 'Kukuza Uvumbuzi katika Chuo Kikuu cha Ardhi',
    heroDescription: 'Kuongoza maendeleo ya teknolojia kupitia IoT, AI, GIS, na suluhisho endelevu kwa Tanzania na zaidi.',
    joinCommunity: 'tazama zaidi',
    
    // About Section
    aboutTitle: 'Kuhusu Kituo cha Uvumbuzi',
    missionTitle: 'Dhamira',
    missionText: 'Kukuza uvumbuzi na ujasiriamali katika teknolojia, kuunda suluhisho endelevu kwa changamoto za kijamii.',
    visionTitle: 'Maono',
    visionText: 'Kuwa kituo cha uvumbuzi kinachongoza Afrika Mashariki, kuunganisha elimu na viwanda kwa maendeleo ya teknolojia.',
    goalsTitle: 'Malengo',
    
    // Team Section
    teamTitle: 'Timu Yetu',
    coreTeam: 'Timu Kuu',
    mentors: 'Washauri',
    partners: 'Washirika wa Kitaasisi',
    
    // Projects Section
    projectsTitle: 'Miradi na Matukio',
    allProjects: 'Yote',
    ongoingProjects: 'Yanayoendelea',
    completedProjects: 'Yaliyokamilika',
    upcomingEvents: 'Yajayo',
    
    // Contact Section
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Wasiliana na timu yetu ya uvumbuzi',
    name: 'Jina',
    email: 'Barua Pepe',
    message: 'Ujumbe',
    send: 'Tuma Ujumbe',
    
    // Footer
    footerDescription: 'Kituo cha Uvumbuzi katika Chuo Kikuu cha Ardhi - Kuongoza maendeleo ya teknolojia na uvumbuzi endelevu.',
    quickLinks: 'Viungo vya Haraka',
    contactInfo: 'Maelezo ya Mawasiliano',
    followUs: 'Tufuate',
    
    // Common
    learnMore: 'Jifunze Zaidi',
    readMore: 'Soma Zaidi',
    register: 'Jiandikishe',
    viewProject: 'Ona Mradi',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};