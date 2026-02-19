"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang } from "./translations";

type TranslationType = (typeof translations)["en"] | (typeof translations)["cs"];

interface LanguageContextType {
  lang: Lang;
  t: TranslationType;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en as TranslationType,
  toggleLang: () => {},
});

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const browserLang = navigator.language || navigator.languages?.[0] || "en";
  return browserLang.startsWith("cs") ? "cs" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "cs" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
