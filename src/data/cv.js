// Allt innehåll på hemsidan. Uppdatera här – komponenterna behöver inte ändras.
// { sv: "...", en: "..." } = text på båda språken. Text som är likadan på båda
// språken (namn, tekniker) kan skrivas som en vanlig sträng.
// fyll("...") = platshållare. draft: true = hela posten är en mall.
// Växla synligheten med SHOW_TODOS i ./fyll.js.
import { fyll } from "./fyll";

export const profile = {
    name: "Jimi Henricsson",
    title: {
        sv: "Civilingenjörsstudent i Datateknik",
        en: "MSc student in Computer Science and Engineering",
    },
    tagline: {
        sv: "Tredjeårsstudent vid Linköpings universitet med stort intresse för mjukvaruutveckling.",
        en: "Third-year student at Linköping University with a strong interest in software development.",
    },
    email: "jimihenricsson@gmail.com",
    linkedin: "https://www.linkedin.com/in/jimi-henricsson",
    github: "https://github.com/Jimlayy",
    // Lägg CV:t i public/ och skriv sökvägen, t.ex. "/Jimi_Henricsson_CV.pdf".
    // Har du ett engelskt CV också: { sv: "/CV_sv.pdf", en: "/CV_en.pdf" }.
    cvFile: fyll("Lägg CV som PDF i public/ och ange sökvägen i cv.js"),
    portrait: "/profilbild.jpg",
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
        sv: [
            "Just nu söker jag sommarjobb inom mjukvaruutveckling ",
            fyll("eller: inbyggda system / backend / data"),
            " sommaren 2027.",
        ],
        en: [
            "I'm currently looking for a summer job in software development ",
            fyll("eller: inbyggda system / backend / data"),
            " for summer 2027.",
        ],
    },
    fyll("Något personligt: intressen och vad du gör på fritiden, t.ex. träning, musik, spel eller resor"),
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
            { sv: "Funktionell och imperativ programmering", en: "Functional and Imperative Programming" },
            { sv: "Processprogrammering och operativsystem", en: "Concurrent Programming and Operating Systems" },
            fyll("fler kurser"),
        ],
    },
];

export const skills = [
    {
        label: { sv: "Programmering", en: "Programming" },
        items: ["Java", "Python", "C++", "C", "C#", fyll("Haskell/SQL?")],
    },
    { label: { sv: "Webb", en: "Web" }, items: ["React", "JavaScript", "HTML", "CSS"] },
    {
        label: { sv: "Verktyg", en: "Tools" },
        items: [fyll("Git, Linux, VS Code, IntelliJ – bara det du faktiskt använt")],
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
        period: { sv: "ht 2026", en: "Fall 2026" },
        title: { sv: "Personlig hemsida", en: "Personal website" },
        tags: ["React", "Vite", "CSS"],
        points: [
            {
                sv: "Den här sidan, byggd från grunden i React och tillgänglig på svenska och engelska. Innehållet ligger i en egen datafil så att sidan är enkel att hålla uppdaterad.",
                en: "This site, built from scratch in React and available in Swedish and English. All content lives in a separate data file, which keeps the site easy to update.",
            },
        ],
        links: [fyll("Länk till GitHub-repo")],
    },
    {
        draft: true,
        period: fyll("vt 2026"),
        title: fyll("Projektnamn"),
        tags: [fyll("Java, Swing, Git")],
        points: [
            fyll("Vad du byggde, t.ex. ”Utvecklade ett 2D-spel i Java i grupp om fyra som …”"),
            fyll("Din roll / något konkret du implementerade eller löste"),
        ],
        links: [fyll("GitHub / demo / bild")],
    },
    {
        draft: true,
        period: fyll("vt 2026"),
        title: fyll("Projektnamn"),
        tags: [fyll("C, Linux, POSIX-trådar")],
        points: [
            fyll("T.ex. projektet i Processprogrammering och operativsystem"),
            fyll("Resultat, t.ex. prestanda, betyg, användare"),
        ],
        links: [fyll("GitHub / demo / bild")],
    },
    {
        draft: true,
        period: fyll("ht 2025"),
        title: fyll("Projektnamn"),
        tags: [fyll("Python, …")],
        points: [fyll("T.ex. eget sidoprojekt, hackathon eller labbserie")],
        links: [fyll("GitHub / demo / bild")],
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
                sv: ["Leder rekryteringsprocessen till sektionens förtroendeposter", fyll(", antal poster")],
                en: ["Lead the recruitment process for the chapter's elected positions", fyll(", antal poster")],
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
                sv: ["Planerar och genomför mottagningen av nya studenter", fyll(", ca X nyantagna")],
                en: ["Plan and run the introduction period for new students", fyll(", ca X nyantagna")],
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
                sv: ["Ledde utskottet", fyll(" (X medlemmar)"), " och ansvarade för marknadsföring och evenemang"],
                en: ["Led the committee", fyll(" (X medlemmar)"), " and was responsible for marketing and events"],
            },
            fyll("Konkret resultat, t.ex. ”genomförde X evenemang”"),
        ],
    },
];
