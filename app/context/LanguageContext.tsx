'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  isLangThai: boolean;
  setIsLangThai: (value: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isLangThai, setIsLangThai] = useState(false);

  return (
    <LanguageContext.Provider value={{ isLangThai, setIsLangThai }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
