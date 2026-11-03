import { visible } from "../data/fyll";
import Entry from "./Entry";
import Section from "./Section";

function EntryList({ id, title, entries }) {
    return (
        <Section id={id} title={title}>
            <div className="entry-list">
                {visible(entries).map((entry, i) => <Entry key={i} {...entry} />)}
            </div>
        </Section>
    );
}

export default EntryList;
