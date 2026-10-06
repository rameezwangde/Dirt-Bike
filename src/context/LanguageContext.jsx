import React, { createContext, useState, useContext } from 'react';

export const languages = [
  { code: 'EN', name: 'English', flag: 'GB' },
  { code: 'ES', name: 'Español', flag: 'ES' },
  { code: 'RU', name: 'Русский', flag: 'RU' },
  { code: 'FR', name: 'Français', flag: 'FR' },
  { code: 'AR', name: 'العربية', flag: 'AE' }
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
