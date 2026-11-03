import { useState } from "react";
import { ui } from "../data/ui";
import { tr, useLang } from "../i18n";
import Rich from "./Rich";
import "./Navbar.css";

function Navbar({ name, links }) {
    const [open, setOpen] = useState(false);
    const { lang, setLang } = useLang();

    return (
        <nav className="navbar">

            <a className="nav-name" href="#home">
                {name}
            </a>

            <div className={`nav-links${open ? " open" : ""}`}>

                {links.map((link) => (
                    <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
                        <Rich value={link.label} />
                    </a>
                ))}

            </div>

            <div className="nav-actions">

                <button
                    className="lang-toggle"
                    aria-label={tr(ui.nav.switchTo, lang)}
                    title={tr(ui.nav.switchTo, lang)}
                    onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                >
                    <span className={lang === "sv" ? "active" : ""}>SV</span>
                    <span className={lang === "en" ? "active" : ""}>EN</span>
                </button>

                <button
                    className="nav-toggle"
                    aria-label={tr(ui.nav.menu, lang)}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>

        </nav>
    );
}

export default Navbar;
