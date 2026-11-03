import { createContext, useContext } from "react";

// Text som finns på båda språken skrivs som { sv: "...", en: "..." }.
export const LANGUAGES = ["sv", "en"];

export const LanguageContext = createContext({ lang: "sv", setLang: () => {} });

export const useLang = () => useContext(LanguageContext);

export const isTranslated = (value) =>
    value != null && typeof value === "object" && "sv" in value && "en" in value;

// Plockar ut rätt språk, t.ex. för attribut som alt där <Rich> inte går att använda.
export const tr = (value, lang) => (isTranslated(value) ? value[lang] : value);

const STORAGE_KEY = "lang";

export function initialLang() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (LANGUAGES.includes(stored)) return stored;
    } catch {
        // localStorage kan vara blockerat, då används webbläsarens språk.
    }
    return navigator.language?.toLowerCase().startsWith("sv") ? "sv" : "en";
}

export function storeLang(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Inget att göra, valet gäller bara den här sessionen.
    }
}
