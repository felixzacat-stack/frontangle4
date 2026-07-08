import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {


            "home-blurb": `
                <p>Hi! I'm Oliver</p>
                <p>Munich based Senior Software Developer, Architect, Team Lead, Coach.</p>
                <p>I started in year 2000 as a Java Developer and have developed strong experience in database design, software architecture and requirements engineering.</p>
                <p>Since 2010 I have been freelancing in Germany and have worked across a broad spectrum of companies. Although I am a full stack developer, I am strongly focussed on front end developement, and have spent a good part of the last ten year working on the web frontend with technologies such as reactjs and node.</p>
                <p>On the technical side of things I am a strong adherent of clean code, refactoring, testing with high test coverage (both front end and backend). Mantras that I live by when developing software are "keep it simple" and "less is more" </p>            
                <p>  My current/ideal stack is <strong> React + Typescript + Spring Boot + MySql</strong> on the <strong> Azure Cloud</strong>.</p> `,

            "previous-blurb":
                `<p>For over 20 years and in three cities (Melbourne, London, Munich) I have worked across a diverse cross-section of companies including financial services, telecommunication companies, eCommerce and startups to German household names such as BMW and Lufthansa.</p>
                <p>In my spare time between client projects, these are some of the projects I work on.</p>`,
            "previous-artgallery-header": "Art Gallery",
            "previous-artgallery":
                'In my spare time I paint. You can check out my paintings on my gallery website. The website is a self made react app without using any frameworks.',
            "previous-ss-header": "Shape Shop",
            "previous-ss":
                `Shape Shop is a complete full stack solution for small and medium sized companies to administer their product catalog. Shape Shop offers a white-label solution, and a "shape" is a placeholder for a product. Variations in color and mood demonstrate how products can be organised with categories and variants.`,
            "previous-ic-header": "Iceberg Charts",
            "previous-ic":
                `Iceberg Charts is an advanced charting library for creating charts in Java. It offers a rich set of charting features including :`,
            "previous-rc":
                `My charting application is a continuous 'work in progress' written entirely in react-JS along with some third party components <strong> [NOTE: Currently Out of Date] </strong>`,
            "previous-bl":
                `My blog is where I write about javascript and javascript frameworks, java swing components, projects I am working on, problems i have encountered, and technical reviews.`,

            "services-web-header": "Web Developement",
            "services-web":  "At Frontangle we offer web developement using the latest web technologies available.",
            "services-web-1":  "Single Page Applications.",
            "services-web-1-1":  "A complete solution front to back",
            "services-web-1-2":  "Using the React/Spring Boot/MySQL stack",
            "services-web-1-3":  "Test automation using tools such as React Testing Library, Jest and Snapshot tests, ensuring high code coverage",
            "services-web-2":  "Implementation of a e-commerce web store headless solution such as Shopify WIX, and Woocommerce",
            "services-web-3":  "Guidance and implementation of Wordpress solutions",
            "services-web-4":  "Simple static web pages leveraging the best of CSS and HTML5",


            "services-systems-header":  "Systems Analysis and Database Design",
            "services-systems":  "Database systems are at the core of every software application. They need to be scalable yet robust.",

            "services-systems-1":  "Database design using entity diagrams.",
            "services-systems-2":  "Database developement in the most common relational databases including MySQL, Oracle and Postgres, as well as consulting and recommendations on using next generation \"NoSql\" databases such as MongoDB and Graph databases such as Neo4J",
            "services-systems-3":  "Performance optimisation and bottleneck analysis",
            "services-systems-4":  "SQL optimisation",

            "services-coaching-header": "Coaching",
            // "services-coaching":  "Database systems are at the core of every software application. They need to be scalable yet robust.",

            "services-coaching-1":  "Coaching junior developers on the best coding pratices",
            "services-coaching-2":  "Code reviews",
            "services-coaching-3":  "Analysing existing code and dependency analysis",
            "services-coaching-4":  "Suggesting refactoring candidatesn",


            "contact": `If you would like to contact me please fill out the form on the right. You can also
                        contact me via <a href='https://www.linkedin.com/in/oliver-watkins-0673b27/'>Linked In </a>
                        or <a href='https://www.xing.com/profile/Oliver_Watkins2/cv'> Xing</a>`
        }
    },
    de: {
        translation: {


            "home-blurb": `
                <p>Hallo! Ich bin Oliver</p>
                <p>Münchener Senior Softwareentwickler, Architekt, Teamleiter, Coach.</p>
                <p> Ich habe im Jahr 2000 als Java-Entwickler angefangen und habe umfangreiche Erfahrungen in den Bereichen Datenbankdesign, Softwarearchitektur und Requirements Engineering gesammelt.</p>
                <p>Seit 2010 bin ich freiberuflich in Deutschland tätig und habe in einem breiten Spektrum von Unternehmen gearbeitet. Obwohl ich ein Full-Stack-Entwickler bin, konzentriere ich mich stark auf die Frontend-Entwicklung und habe einen guten Teil der letzten zehn Jahre damit verbracht, am Web-Frontend mit Technologien wie Reactjs und Node zu arbeiten.</p>
                <p> Auf der technischen Seite bin ich ein starker Anhänger von Clean Code, Refactoring, Testing mit hoher Testabdeckung (sowohl Frontend als auch Backend). 
                Mantras, nach denen ich lebe, wenn ich Software entwickle, sind „keep it simple“ und „less is more“  </p>
                <p> Mein aktueller/idealer Stack ist  <strong> React + Typescript + Spring Boot + MySql</strong> in der <strong> Azure Cloud</strong>. </p>`,

            "previous-blurb":
                `<p>Seit über 20 Jahren und in drei Städten (Melbourne, London, München) habe ich für eine Vielzahl von Unternehmen gearbeitet, darunter Finanzdienstleister, Telekommunikationsunternehmen, E-Commerce und Start-ups bis hin zu bekannten deutschen Namen wie BMW und Lufthansa.</p>
                <p>In meiner Freizeit zwischen Kundenprojekte sind dies einige der Projekte, an denen ich arbeite.</p>`,

            "previous-artgallery-header": "Kunstgalerie",
            "previous-artgallery":
                'In meiner Freizeit male ich. Du kannst meine Gemälde auf meiner Galerie-Website anschauen. Die Website ist eine selbstgemachte React-App, ohne die Verwendung von Frameworks.',



            "previous-ss-header": "Shape Shop",
            "previous-ss":
                `Shape Shop ist eine vollständige Full-Stack-Lösung für kleine und mittlere Unternehmen zur Verwaltung ihres Produktkatalogs. Shape Shop bietet eine White-Label-Lösung, wobei eine „Form“ als Platzhalter für ein Produkt dient. Variationen in Farbe und Stimmung zeigen, wie Produkte mit Kategorien und Varianten organisiert werden können.`,
            "previous-ic-header": "Iceberg Charts",
            "previous-ic": `Iceberg Charts ist eine fortschrittliche Diagrammbibliothek zum Erstellen von Diagrammen in Java. Es bietet eine Vielzahl von Diagrammfunktionen, darunter:`,
            "previous-rc": `Meine Charting-Anwendung ist ein kontinuierliches „Work in Progress“, das zusammen mit einigen Komponenten von Drittanbietern vollständig in React-JS geschrieben wurde <strong> [HINWEIS: Derzeit veraltet] </strong>`,
            "previous-bl": `In meinem Blog schreibe ich über Javascript und Javascript-Frameworks, Java-Swing-Komponenten, Projekte, an denen ich arbeite, Probleme, auf die ich gestoßen bin, und technische Reviews.`,

            "services-web-header": "Webentwicklung",
            "services-web":  "Bei Frontangle bieten wir Webentwicklung unter Verwendung der neuesten verfügbaren Webtechnologien an.",
            "services-web-1":  "Single-Page-Anwendungen",
            "services-web-1-1":  "Eine vollständige Lösung von vorne bis hinten",
            "services-web-1-2":  "Verwendung des React/Spring Boot/MySQL-Stacks",
            "services-web-1-3":  "Testautomatisierung mit Tools wie React Testing Library, Jest und Snapshot-Tests, um eine hohe Codeabdeckung sicherzustellen",
            "services-web-2":  "Implementierung einer headless E-Commerce-Webshop-Lösung wie Shopify, WIX und WooCommerce",
            "services-web-3":  "Beratung und Implementierung von Wordpress-Lösungen",
            "services-web-4":  "Einfache statische Webseiten, die das Beste aus CSS und HTML5 nutzen",


            "services-systems-header":  "Systemanalyse und Datenbankdesign",
            "services-systems":  "Datenbanksysteme sind das Herzstück jeder Softwareanwendung. Sie müssen skalierbar und dennoch robust sein.",

            "services-systems-1":  "Datenbankdesign mit Entity-Diagrammen.",
            "services-systems-2":  "Datenbankentwicklung in den gängigsten relationalen Datenbanken wie MySQL, Oracle und Postgres sowie Beratung und Empfehlungen zur Verwendung von Datenbanken der nächsten Generation wie MongoDB und Graphdatenbanken wie Neo4J",
            "services-systems-3":  "Performance optimisation und bottleneck Analyse",
            "services-systems-4":  "SQL-Optimierung",

            "services-coaching-header": "Coaching",
            // "services-coaching":  "Database systems are at the core of every software application. They need to be scalable yet robust.",

            "services-coaching-1":  "Coaching für Junior-Entwickler zu den besten Codierungspraktiken",
            "services-coaching-2":  "Code reviews",
            "services-coaching-3":  "Analyse vorhandener Code und dependency analysis",
            "services-coaching-4":  "Vorschläge für Refactoring-Kandidaten",

            "contact":

                `Wenn Sie mich kontaktieren möchten, füllen Sie bitte das Formular auf der rechten Seite aus. Sie können mich auch über 
<a href="https://www.linkedin.com/in/oliver-watkins-0673b27/?originalSubdomain=de">Linked In</a>
 oder Xing kontaktieren`

        }
    }


};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;