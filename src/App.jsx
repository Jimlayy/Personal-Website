import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EntryList from "./components/EntryList";
import Contact from "./components/Contact";
import { education, engagement, experience, profile, projects } from "./data/cv";
import { visible } from "./data/fyll";
import { ui } from "./data/ui";
import { LanguageContext, initialLang, storeLang } from "./i18n";


// Ordningen här styr både sidan och menyn.
// Tidslinjesektioner utan synliga poster döljs, t.ex. Arbetslivserfarenhet
// så länge den bara innehåller utkast och SHOW_TODOS är false.
const s = ui.sections;
const sections = [
    { id: "about", label: s.about, Component: About },
    { id: "education", label: s.education, entries: education },
    { id: "skills", label: s.skills, Component: Skills },
    { id: "projects", label: s.projects, entries: projects },
    { id: "experience", label: s.experience, title: s.experienceTitle, entries: experience },
    { id: "engagement", label: s.engagement, entries: engagement },
    { id: "contact", label: s.contact, Component: Contact },
].filter((section) => !section.entries || visible(section.entries).length > 0);


function App() {

    const [lang, setLang] = useState(initialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        storeLang(lang);
    }, [lang]);

    return (

        <LanguageContext value={{ lang, setLang }}>

            <Navbar name={profile.name} links={sections} />

            <main>

                <Hero />

                {sections.map(({ id, label, title, entries, Component }) =>
                    Component ? (
                        <Component key={id} />
                    ) : (
                        <EntryList key={id} id={id} title={title ?? label} entries={entries} />
                    )
                )}

            </main>

            <footer className="footer">
                © {new Date().getFullYear()} {profile.name}
            </footer>

        </LanguageContext>

    );

}


export default App;
