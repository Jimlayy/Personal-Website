import { about, profile } from "../data/cv";
import { visible } from "../data/fyll";
import { ui } from "../data/ui";
import { tr, useLang } from "../i18n";
import Rich from "./Rich";
import Section from "./Section";
import "./About.css";

function About() {
    const { lang } = useLang();

    return (
        <Section id="about" title={ui.sections.about}>
            <div className="about">
                <img className="about-portrait" src={profile.portrait} alt={tr(ui.portraitAlt, lang)} />

                <div className="about-text">
                    {visible(about).map((paragraph, i) => <p key={i}><Rich value={paragraph} /></p>)}
                </div>
            </div>
        </Section>
    );
}

export default About;
