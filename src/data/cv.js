// Allt innehåll på hemsidan. Uppdatera här – komponenterna behöver inte ändras.
// { sv: "...", en: "..." } = text på båda språken. Text som är likadan på båda
// språken (namn, tekniker) kan skrivas som en vanlig sträng.
// fyll("...") = platshållare. draft: true = hela posten är en mall.
// Växla synligheten med SHOW_TODOS i ./fyll.js.
import { fyll } from "./fyll";
// Bilder i src/assets importeras så att Vite optimerar dem och sökvägen blir rätt
// oavsett var sidan läggs ut. Byter du bild: skala ner den först (ca 800 px bred).
import portrait from "../assets/profilbild.jpg";

export const profile = {
    name: "Jimi Henricsson",
    title: {
        sv: "Civilingenjörsstudent i Datateknik",
        en: "MSc student in Computer Science and Engineering",
    },
    tagline: {
        sv: "Tredjeårsstudent vid Linköpings universitet med intresse för allt från mjukvaruutveckling till hårdvarunära programmering.",
        en: "Third-year student at Linköping University, interested in everything from software development to hardware-oriented programming.",
    },
    email: "jimihenricsson@gmail.com",
    linkedin: "https://www.linkedin.com/in/jimi-henricsson",
    github: "https://github.com/Jimlayy",
    cvFile: "./Jimi_Henricsson_CV.pdf",
    portrait: portrait,
};

export const about = [
    {
        sv: "Jag läser tredje året på civilingenjörsprogrammet i Datateknik vid Linköpings universitet. Genom kurser och projekt har jag arbetat med objektorienterad, funktionell och imperativ programmering, och det jag tycker mest om är att ta ett problem hela vägen från idé till fungerande lösning.",
        en: "I'm in my third year of the MSc programme in Computer Science and Engineering at Linköping University. Through courses and projects I have worked with object-oriented, functional and imperative programming, and what I enjoy most is taking a problem all the way from idea to working solution.",
    },
    {
        sv: "Vid sidan av studierna är jag engagerad i D-sektionen. Jag har lett Marknadsföringsutskottet som ordförande, ansvarar för mottagningen av nya studenter i Fadderiet och är idag ordförande för Valberedningen.",
        en: "Alongside my studies I'm involved in the Computer Engineering student chapter (D-sektionen). I have led the Marketing Committee as chair, I'm responsible for welcoming new students as part of the introduction committee, and I currently chair the Nomination Committee.",
    },
    {
        sv: "Mitt tekniska intresse är brett, från mjukvaruutveckling till hårdvarunära programmering, och jag trivs bäst i projekt där jag får kombinera problemlösning med att samarbeta mot ett gemensamt mål. Just nu söker jag sommarjobb inom tech sommaren 2027.",
        en: "My technical interests are broad, from software development to low-level, hardware-oriented programming, and I thrive in projects where I can combine problem solving with working together towards a shared goal. I'm currently looking for a summer job in tech for summer 2027.",
    },
    {
        sv: "På fritiden gillar jag att klättra, spela brädspel, spela instrument och umgås med vänner. Jag tycker om att testa nya grejer, få nya erfarenheter och lära mig nya saker.",
        en: "In my free time I enjoy climbing, playing board games, playing instruments and hanging out with friends. I like trying new things, gaining new experiences and learning new skills.",
    },
];

export const education = [
    {
        period: { sv: "aug 2024 – jun 2029 (förväntad)", en: "Aug 2024 – Jun 2029 (expected)" },
        title: {
            sv: "Civilingenjör i Datateknik, 300 hp",
            en: "MSc in Computer Science and Engineering, 300 ECTS",
        },
        subtitle: {
            sv: "Tekniska högskolan vid Linköpings Universitet",
            en: "Institute of Technology, Linköping University",
        },
        tags: [
            { sv: "Datastrukturer och algoritmer", en: "Data Structures and Algorithms" },
            { sv: "Objektorienterad programmering i Java", en: "Object-Oriented Programming in Java" },
            { sv: "Datorkonstruktion", en: "Computer Hardware Design" },
            { sv: "Funktionell och imperativ programmering", en: "Functional and Imperative Programming" },
            { sv: "Processprogrammering och operativsystem", en: "Concurrent Programming and Operating Systems" },
        ],
    },
];

export const skills = [
    {
        label: { sv: "Programmering", en: "Programming" },
        items: ["Java", "Python", "C++", "C", "C#", "VHDL"],
    },
    {
        label: { sv: "Verktyg", en: "Tools" },
        items: ["Git", "GitLab CI/CD", "Linux", "Java Swing", "FPGA (Basys 3)", "UML", "Excel"],
    },
    {
        label: { sv: "AI-verktyg", en: "AI tools" },
        items: ["Claude", "Claude Code", "ChatGPT"],
    },
    {
        label: { sv: "Språk", en: "Languages" },
        items: [
            { sv: "Svenska (modersmål)", en: "Swedish (native)" },
            { sv: "Engelska (flytande)", en: "English (fluent)" },
            { sv: "Finska (flytande)", en: "Finnish (fluent)" },
            { sv: "Spanska (grundläggande)", en: "Spanish (basic)" },
        ],
    },
    {
        label: { sv: "Övrigt", en: "Other" },
        items: [{ sv: "Körkort B", en: "Driving licence (B)" }],
    },
];

export const projects = [
    {
        period: { sv: "ht 2026 – pågående", en: "Fall 2026 – present" },
        title: {
            sv: "RoboCab – autonom robottaxi, testansvarig",
            en: "RoboCab – autonomous robot taxi, test lead",
        },
        tags: ["C", "Python", "OpenCV", "GitLab CI/CD", "ATmega1284", "Raspberry Pi"],
        points: [
            {
                sv: "Testansvarig i ett projekt med sju personer i kursen Konstruktion med mikrodatorer, där vi bygger en självkörande bil med ATmega-processorer och Raspberry Pi",
                en: "Test lead in a seven-person team in the course Microcomputer Project Laboratory, building a self-driving car with ATmega processors and a Raspberry Pi",
            },
            {
                sv: "Satte upp en CI-pipeline i GitLab som vid varje push korskompilerar koden för ATmega1284 och kör över 100 automatiska tester",
                en: "Set up a GitLab CI pipeline that cross-compiles the code for the ATmega1284 and runs more than 100 automated tests on every push",
            },
            {
                sv: "Delade upp koden så att logik utan hårdvaruberoenden testas på en vanlig dator, med flera tester skrivna före koden och pytest-tester för kamerans bildbehandling",
                en: "Split the code so that hardware-independent logic is tested on a regular computer, with several tests written before the code and pytest tests for the camera's image processing",
            },
        ],
        links: [{ label: "GitHub", href: "https://github.com/Jimlayy/RoboCab" }],
    },
    {
        period: { sv: "vt 2026", en: "Spring 2026" },
        title: { sv: "Synthesizer på egenbyggd processor", en: "Synthesizer on a custom-built processor" },
        tags: ["VHDL", "FPGA (Basys 3)", "UART", "MIDI"],
        points: [
            {
                sv: "Konstruerade en mikroprogrammerad 32-bitarsprocessor med egen instruktionsuppsättning (13 instruktioner, 4 adresseringsmoder) i grupp om tre i kursen Datorkonstruktion",
                en: "Designed a microprogrammed 32-bit processor with a custom instruction set (13 instructions, 4 addressing modes) in a team of three in the course Computer Hardware Design",
            },
            {
                sv: "Implementerade en UART-mottagare och MIDI-parser (31 250 baud) och minnesmappade tonen till processorn, så att ett MIDI-keyboard spelar toner genom FPGA-kortet",
                en: "Implemented a UART receiver and MIDI parser (31,250 baud) and memory-mapped the note to the processor, so that a MIDI keyboard plays notes through the FPGA board",
            },
        ],
        links: [{ label: "GitHub", href: "https://github.com/Jimlayy/Synthesizer" }],
    },
    {
        period: { sv: "ht 2026", en: "Fall 2026" },
        title: { sv: "Personlig hemsida", en: "Personal website" },
        tags: ["React", "Vite", "CSS"],
        points: [
            {
                sv: "Den här sidan, byggd från grunden i React och tillgänglig på svenska och engelska. Innehållet ligger i en egen datafil så att sidan är enkel att hålla uppdaterad.",
                en: "This site, built from scratch in React and available in Swedish and English. All content lives in a separate data file, which keeps the site easy to update.",
            },
        ],
        links: [{ label: "GitHub", href: "https://github.com/Jimlayy/Personal-Website" }],
    },
    {
        period: { sv: "vt 2025", en: "Spring 2025" },
        title: { sv: "Catan – brädspel i Java", en: "Catan – board game in Java" },
        tags: ["Java", "Swing", "Git"],
        points: [
            {
                sv: "Utvecklade en spelbar datorversion av Catan i par: slumpad spelplan, byggregler, resursutdelning, rövaren och utvecklingskort (ca 1 900 rader kod)",
                en: "Developed a playable computer version of Catan in a pair: randomised board, building rules, resource distribution, the robber and development cards (about 1,900 lines of code)",
            },
        ],
        links: [{ label: "GitHub", href: "https://github.com/Jimlayy/Catan" }],
    },
    {
        period: { sv: "vt 2025", en: "Spring 2025" },
        title: "Tetris",
        tags: ["Java", "Swing", "Gson"],
        points: [
            {
                sv: "Byggde ett komplett Tetris med utbytbara spelregler (strategy-mönstret) och en highscore-lista som sparas som JSON",
                en: "Built a complete Tetris with interchangeable game rules (the strategy pattern) and a high-score list saved as JSON",
            },
        ],
        links: [{ label: "GitHub", href: "https://github.com/Jimlayy/Tetris" }],
    },
];

// Mall: står inte i CV:t än. Hela sektionen döljs om alla poster är utkast.
export const experience = [
    {
        draft: true,
        period: fyll("sommar 2025"),
        title: fyll("Roll, t.ex. sommarjobb, extrajobb, labbassistent"),
        subtitle: fyll("Arbetsgivare, ort"),
        points: [fyll("Arbetsuppgifter och vad du lärde dig – även jobb utanför IT visar ansvar")],
    },
];

const dSektionen = {
    sv: "D-sektionen, Linköpings universitet",
    en: "Computer Engineering Student Chapter (D-sektionen), Linköping University",
};

export const engagement = [
    {
        period: { sv: "apr 2026 – pågående", en: "Apr 2026 – present" },
        title: { sv: "Ordförande, Valberedningen", en: "Chair, Nomination Committee" },
        subtitle: dSektionen,
        points: [
            {
                sv: "Leder rekryteringsprocessen till sektionens förtroendeposter",
                en: "Lead the recruitment process for the chapter's elected positions",
            },
        ],
    },
    {
        period: { sv: "dec 2025 – pågående", en: "Dec 2025 – present" },
        title: {
            sv: "Fadderansvarig, Fadderiet STABEN",
            en: "Introduction Coordinator, STABEN (introduction committee)",
        },
        subtitle: dSektionen,
        points: [
            {
                sv: "Planerat och genomfört mottagningen av 200+ nyantagna, med en budget på ca 600 000 kr",
                en: "Planned and ran the introduction period for 200+ new students, with a budget of about SEK 600,000",
            },
            {
                sv: "Rekryterat, utbildat och varit ansvarig för ca 110 faddrar till och under mottagningen",
                en: "Recruited, trained and led about 110 student mentors before and during the introduction period",
            },
        ],
    },
    {
        period: { sv: "sep 2024 – apr 2026", en: "Sep 2024 – Apr 2026" },
        title: {
            sv: "Ordförande, tidigare Aktivitetsansvarig",
            en: "Chair, previously Activities Coordinator",
        },
        subtitle: {
            sv: "Marknadsföringsutskottet, D-sektionen, Linköpings universitet",
            en: "Marketing Committee, D-sektionen, Linköping University",
        },
        points: [
            {
                sv: "Valdes till ordförande (apr 2025) efter ett år som aktivitetsansvarig",
                en: "Elected chair (Apr 2025) after a year as activities coordinator",
            },
            {
                sv: "Ledde utskottet (7 medlemmar) och ansvarade för marknadsföring och evenemang",
                en: "Led the committee (7 members) and was responsible for marketing and events",
            },
        ],
    },
];
