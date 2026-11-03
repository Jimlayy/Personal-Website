import { skills } from "../data/cv";
import { visible } from "../data/fyll";
import { ui } from "../data/ui";
import Rich from "./Rich";
import Section from "./Section";
import "./Skills.css";

function Skills() {
    const groups = skills
        .map((group) => ({ ...group, items: visible(group.items) }))
        .filter((group) => group.items.length > 0);

    return (
        <Section id="skills" title={ui.sections.skills}>
            <div className="skills">
                {groups.map((group, i) => (
                    <div key={i} className="card">
                        <h3><Rich value={group.label} /></h3>
                        <ul className="tags">
                            {group.items.map((item, j) => <li key={j}><Rich value={item} /></li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
