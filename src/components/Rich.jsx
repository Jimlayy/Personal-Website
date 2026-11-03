import { SHOW_TODOS, isFyll } from "../data/fyll";
import { isTranslated, useLang } from "../i18n";
import "./Rich.css";

// Renderar text, översatt text ({ sv, en }), platshållare (fyll) eller en lista av dessa.
function Rich({ value }) {
    const { lang } = useLang();

    if (Array.isArray(value)) {
        return value.map((part, i) => <Rich key={i} value={part} />);
    }
    if (isTranslated(value)) {
        return <Rich value={value[lang]} />;
    }
    if (isFyll(value)) {
        return SHOW_TODOS ? <span className="fyll">[{value.fyll}]</span> : null;
    }
    return value ?? null;
}

export default Rich;
