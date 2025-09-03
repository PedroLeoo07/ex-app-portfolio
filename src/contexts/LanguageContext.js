import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    role: 'Desenvolvedor Full-Stack',
    intro: 'Profissional com experiência em desenvolvimento web completo, atuando tanto no front-end quanto no back-end. Utilizo tecnologias modernas como JavaScript, Node.js, React, Next.js e PostgreSQL para criar aplicações eficientes, seguras e escaláveis.',
    about: 'Sou um desenvolvedor full stack com foco em criar soluções completas, escaláveis e de alta performance. Atuo no desenvolvimento de aplicações web utilizando tecnologias como JavaScript, Node.js, React, Next.js e bancos de dados relacionais e não relacionais.',
    cv: 'Currículo',
    resume: 'Resume',
  },
  en: {
    role: 'Full-Stack Developer',
    intro: 'Professional with experience in complete web development, working on both front-end and back-end. I use modern technologies like JavaScript, Node.js, React, Next.js and PostgreSQL to create efficient, secure and scalable applications.',
    about: 'I am a full stack developer focused on creating complete, scalable and high performance solutions. I work on web application development using technologies like JavaScript, Node.js, React, Next.js and relational and non-relational databases.',
    cv: 'CV',
    resume: 'Resume',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
