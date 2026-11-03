// Motsvarar \fyll och \showtodostrue i CV:t.
// true  = platshållare syns (röda, streckade) så du ser vad som saknas.
// false = platshållare och utkast (draft: true) döljs helt på sidan.
// Platshållarna är anteckningar till dig själv och visas därför på svenska i båda språken.
import { isTranslated } from "../i18n";

export const SHOW_TODOS = true;

export const fyll = (text) => ({ fyll: text });

export const isFyll = (value) =>
    value != null && typeof value === "object" && "fyll" in value;

function hasContent(value) {
    if (Array.isArray(value)) return value.some(hasContent);
    if (isFyll(value)) return SHOW_TODOS;
    if (isTranslated(value)) return hasContent(value.sv);
    if (value && typeof value === "object") return !value.draft || SHOW_TODOS;
    return Boolean(value);
}

// Filtrerar bort sådant som inte ska visas när SHOW_TODOS är false.
export const visible = (list = []) => list.filter(hasContent);
