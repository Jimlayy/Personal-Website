import Rich from "./Rich";
import "./Section.css";

function Section({ id, title, children }) {
    return (
        <section id={id} className="section">
            <h2><Rich value={title} /></h2>
            {children}
        </section>
    );
}

export default Section;
