import { visible } from "../data/fyll";
import Rich from "./Rich";
import "./Entry.css";

// En post i en tidslinje: utbildning, projekt, jobb eller engagemang.
function Entry({ period, title, subtitle, points = [], tags = [], links = [] }) {
    const shownPoints = visible(points);
    const shownTags = visible(tags);
    const shownLinks = visible(links);

    return (
        <article className="entry card">
            <div className="entry-period"><Rich value={period} /></div>

            <div className="entry-body">
                <h3><Rich value={title} /></h3>
                {subtitle && <p className="entry-subtitle"><Rich value={subtitle} /></p>}

                {shownPoints.length > 0 && (
                    <ul className="entry-points">
                        {shownPoints.map((point, i) => <li key={i}><Rich value={point} /></li>)}
                    </ul>
                )}

                {shownTags.length > 0 && (
                    <ul className="tags">
                        {shownTags.map((tag, i) => <li key={i}><Rich value={tag} /></li>)}
                    </ul>
                )}

                {shownLinks.length > 0 && (
                    <div className="entry-links">
                        {shownLinks.map((link, i) =>
                            link.href ? (
                                <a key={i} href={link.href} target="_blank" rel="noreferrer">
                                    <Rich value={link.label} /> →
                                </a>
                            ) : (
                                <Rich key={i} value={link} />
                            )
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

export default Entry;
