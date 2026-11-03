import { profile } from "../data/cv";
import { ui } from "../data/ui";
import Rich from "./Rich";
import Section from "./Section";
import "./Contact.css";

function Contact() {
    const links = [
        { label: ui.contact.email, text: profile.email, href: `mailto:${profile.email}` },
        { label: "LinkedIn", text: "linkedin.com/in/jimi-henricsson", href: profile.linkedin },
        { label: "GitHub", text: "github.com/Jimlayy", href: profile.github },
    ];

    return (
        <Section id="contact" title={ui.sections.contact}>
            <p className="contact-intro">
                <Rich value={ui.contact.intro} />
            </p>

            <div className="contact-links">
                {links.map((link) => (
                    <a key={link.href} className="card contact-link" href={link.href} target="_blank" rel="noreferrer">
                        <span><Rich value={link.label} /></span>
                        {link.text}
                    </a>
                ))}
            </div>
        </Section>
    );
}

export default Contact;
