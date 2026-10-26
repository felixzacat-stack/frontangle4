// Copy for the redesign prototype, merged into i18n.js under the "rd" key (t("rd.hero.title") etc.).
// Project facts (stack, links, images) live in data/projects.js; only the prose is here.

const en = {
  nav: {
    home: "Home",
    work: "Work",
    services: "Services",
    contact: "Contact",
    menu: "Menu",
  },
  hero: {
    hello: "Hi, I'm Oliver.",
    eyebrow: "Freelance software developer · Germany",
    title: "I build web applications, from the database to the browser.",
    lede: "Senior full-stack developer, architect and coach. Freelancing in Germany since 2010, focused on React, TypeScript and Spring Boot on Azure.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    artCaption: "When I'm not coding, I paint.",
  },
  stats: {
    years: "years in software",
    freelance: "freelancing in Germany",
    cities: "cities: Melbourne, London, Munich",
  },
  clients: {
    label: "Clients have included",
    sectors: "plus banks, telecoms, e-commerce companies and startups",
  },
  featured: {
    title: "Selected work",
    all: "All projects",
  },
  servicesTeaser: {
    title: "What I do",
    more: "More about services",
  },
  approach: {
    title: "How I work",
    simpleTitle: "Keep it simple",
    simple: "Less is more. The simplest design that works is the easiest one to change later.",
    testedTitle: "Tested",
    tested: "High test coverage on the frontend and the backend, so changes ship with confidence.",
    cleanTitle: "Clean code",
    clean: "Readable code and steady refactoring keep a codebase healthy as it grows.",
    fullTitle: "Full stack",
    full: "One person who understands the database, the API and the UI, and how they fit together.",
  },
  cta: {
    title: "Have a project in mind?",
    text: "Tell me about it and I'll get back to you.",
    button: "Get in touch",
  },
  work: {
    title: "Work",
    intro: "Over 25 years in Melbourne, London and Munich I have worked for banks, telecoms, e-commerce companies and startups, through to German household names such as BMW and Lufthansa. Between client projects I build my own products. These are the current ones.",
    stack: "Stack",
    liveDemo: "Live demo",
    projectPage: "Project page",
    visitSite: "Visit site",
  },
  projects: {
    shapeshop: {
      tagline: "White-label e-commerce platform",
    },
    bis: {
      tagline: "Website for a Berlin tour guide",
    },
    petsit: {
      tagline: "Pet-sitting on a map (in progress)",
    },
    art: {
      tagline: "My painting gallery",
    },
    icharts: {
      tagline: "Charting library for Java",
    },
  },
  services: {
    title: "Services",
    intro: "I work with teams that need a senior developer who can take a feature, or a whole application, from the data model to production.",
    webTitle: "Full-stack web applications",
    web: "Single-page applications built front to back and deployed to the cloud.",
    web1: "React and TypeScript frontends",
    web2: "Spring Boot and Node REST and GraphQL APIs",
    web3: "Test automation with React Testing Library, Jest and Playwright",
    web4: "Deployment on Azure: Static Web Apps, Kubernetes, Blob Storage",
    aiTitle: "AI-assisted development",
    ai: "Shipping faster with AI coding agents such as Claude Code, with a senior developer still in charge of the design and the review.",
    ai1: "Agentic coding with Claude Code: planning, implementing, reviewing and deploying changes across the full stack",
    ai2: "Setting up projects for AI agents: commands, skills and hooks",
    ai3: "Connecting agents to tools through MCP, such as browser automation to test UIs end to end",
    dataTitle: "Architecture and database design",
    data: "The database is the core of every application. It has to scale and stay robust.",
    data1: "Data modelling with entity-relationship diagrams",
    data2: "MySQL, Oracle and PostgreSQL, and advice on NoSQL and graph databases",
    data3: "Performance and bottleneck analysis",
    data4: "SQL optimisation",
    coachTitle: "Coaching and code review",
    coach: "Helping teams write code that stays easy to change.",
    coach1: "Coaching junior developers in good coding practice",
    coach2: "Code reviews",
    coach3: "Analysing existing code and its dependencies",
    coach4: "Finding the refactorings that pay off",
    stackTitle: "Tools I use",
  },
  contact: {
    based: "Based in Germany",
  },
  footer: {
    rights: "Oliver Watkins, Germany",
  },
};

const de = {
  nav: {
    home: "Start",
    work: "Projekte",
    services: "Leistungen",
    contact: "Kontakt",
    menu: "Menü",
  },
  hero: {
    hello: "Hallo, ich bin Oliver.",
    eyebrow: "Freiberuflicher Softwareentwickler · Deutschland",
    title: "Ich entwickle Webanwendungen, von der Datenbank bis zum Browser.",
    lede: "Senior Full-Stack-Entwickler, Architekt und Coach. Seit 2010 freiberuflich in Deutschland, mit Schwerpunkt auf React, TypeScript und Spring Boot in der Azure Cloud.",
    ctaWork: "Meine Projekte",
    ctaContact: "Kontakt aufnehmen",
    artCaption: "Wenn ich nicht programmiere, male ich.",
  },
  stats: {
    years: "Jahre in der Softwareentwicklung",
    freelance: "freiberuflich in Deutschland",
    cities: "Städte: Melbourne, London, München",
  },
  clients: {
    label: "Zu meinen Kunden zählten",
    sectors: "sowie Banken, Telekommunikation, E-Commerce und Start-ups",
  },
  featured: {
    title: "Ausgewählte Projekte",
    all: "Alle Projekte",
  },
  servicesTeaser: {
    title: "Was ich mache",
    more: "Mehr zu den Leistungen",
  },
  approach: {
    title: "Wie ich arbeite",
    simpleTitle: "Keep it simple",
    simple: "Weniger ist mehr. Die einfachste Lösung, die funktioniert, lässt sich später am leichtesten ändern.",
    testedTitle: "Getestet",
    tested: "Hohe Testabdeckung im Frontend und im Backend, damit Änderungen sicher live gehen.",
    cleanTitle: "Clean Code",
    clean: "Lesbarer Code und stetiges Refactoring halten eine Codebasis gesund, während sie wächst.",
    fullTitle: "Full Stack",
    full: "Eine Person, die Datenbank, API und Oberfläche versteht und weiß, wie sie zusammenpassen.",
  },
  cta: {
    title: "Haben Sie ein Projekt im Kopf?",
    text: "Erzählen Sie mir davon, ich melde mich bei Ihnen.",
    button: "Kontakt aufnehmen",
  },
  work: {
    title: "Projekte",
    intro: "In über 25 Jahren habe ich in Melbourne, London und München für Banken, Telekommunikationsunternehmen, E-Commerce-Firmen und Start-ups gearbeitet, bis hin zu bekannten deutschen Namen wie BMW und Lufthansa. Zwischen Kundenprojekten entwickle ich eigene Produkte. Das sind die aktuellen.",
    stack: "Technik",
    liveDemo: "Live-Demo",
    projectPage: "Projektseite",
    visitSite: "Zur Website",
  },
  projects: {
    shapeshop: {
      tagline: "White-Label-E-Commerce-Plattform",
    },
    bis: {
      tagline: "Website für einen Berliner Stadtführer",
    },
    petsit: {
      tagline: "Pet-Sitting auf der Karte (in Arbeit)",
    },
    art: {
      tagline: "Meine Kunstgalerie",
    },
    icharts: {
      tagline: "Diagrammbibliothek für Java",
    },
  },
  services: {
    title: "Leistungen",
    intro: "Ich arbeite mit Teams, die einen Senior-Entwickler brauchen, der ein Feature oder eine ganze Anwendung vom Datenmodell bis in die Produktion bringt.",
    webTitle: "Full-Stack-Webanwendungen",
    web: "Single-Page-Anwendungen, von vorne bis hinten entwickelt und in die Cloud gebracht.",
    web1: "Frontends mit React und TypeScript",
    web2: "REST- und GraphQL-APIs mit Spring Boot und Node",
    web3: "Testautomatisierung mit React Testing Library, Jest und Playwright",
    web4: "Deployment auf Azure: Static Web Apps, Kubernetes, Blob Storage",
    aiTitle: "KI-gestützte Entwicklung",
    ai: "Schneller liefern mit KI-Coding-Agenten wie Claude Code, wobei ein Senior-Entwickler Design und Review in der Hand behält.",
    ai1: "Agentisches Programmieren mit Claude Code: Änderungen über den gesamten Stack planen, umsetzen, prüfen und deployen",
    ai2: "Projekte für KI-Agenten einrichten: Commands, Skills und Hooks",
    ai3: "Agenten über MCP mit Werkzeugen verbinden, z. B. Browser-Automatisierung für End-to-End-Tests der Oberfläche",
    dataTitle: "Architektur und Datenbankdesign",
    data: "Die Datenbank ist das Herz jeder Anwendung. Sie muss skalieren und robust bleiben.",
    data1: "Datenmodellierung mit Entity-Relationship-Diagrammen",
    data2: "MySQL, Oracle und PostgreSQL sowie Beratung zu NoSQL- und Graphdatenbanken",
    data3: "Performance- und Engpassanalyse",
    data4: "SQL-Optimierung",
    coachTitle: "Coaching und Code-Reviews",
    coach: "Ich helfe Teams, Code zu schreiben, der sich leicht ändern lässt.",
    coach1: "Coaching von Junior-Entwicklern in guter Programmierpraxis",
    coach2: "Code-Reviews",
    coach3: "Analyse von bestehendem Code und seinen Abhängigkeiten",
    coach4: "Refactorings finden, die sich lohnen",
    stackTitle: "Meine Werkzeuge",
  },
  contact: {
    based: "Mit Sitz in Deutschland",
  },
  footer: {
    rights: "Oliver Watkins, Deutschland",
  },
};

export default { en, de };
