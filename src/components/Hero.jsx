import { profile } from "../data/cv";
import { isFyll } from "../data/fyll";
import { ui } from "../data/ui";
import { tr, useLang } from "../i18n";
import Rich from "./Rich";
import "./Hero.css";

function Hero() {
    const { lang } = useLang();
    const cvFile = tr(profile.cvFile, lang);

    return (
        <section id="home" className="hero">
            <div className="hero-overlay">
                <h1>{profile.name}</h1>

                <h2><Rich value={profile.title} /></h2>

                <p className="hero-description">
                    <Rich value={profile.tagline} />
                </p>

                <div className="hero-buttons">
                    <a className="button primary" href="#projects"><Rich value={ui.hero.projects} /></a>
                    <a className="button" href="#contact"><Rich value={ui.hero.contact} /></a>
                    {isFyll(cvFile) ? (
                        <Rich value={cvFile} />
                    ) : (
                        cvFile && <a className="button" href={cvFile} download><Rich value={ui.hero.cv} /></a>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Hero;
