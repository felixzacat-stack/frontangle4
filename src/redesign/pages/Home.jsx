import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import { featuredProjects, artImage } from "src/redesign/data/projects";
import { ButtonLink, Chips, CtaBand, Eyebrow, Reveal, usePageTitle } from "src/redesign/common";

const services = [
  ["webTitle", "web"],
  ["dataTitle", "data"],
  ["coachTitle", "coach"],
];

const principles = ["simple", "tested", "clean", "full"];

export default function Home() {
  const { t } = useTranslation();
  usePageTitle(null);
  const shapeshop = featuredProjects.find((p) => p.id === "shapeshop");
  const bis = featuredProjects.find((p) => p.id === "bis");

  return (
    <>
      <section className="rd-hero">
        <div className="rd-container rd-hero__inner">
          <div className="rd-hero__copy">
            <p className="rd-hero__hello">{t("rd.hero.hello")}</p>
            <Eyebrow>{t("rd.hero.eyebrow")}</Eyebrow>
            <h1 className="rd-hero__title">{t("rd.hero.title")}</h1>
            <p className="rd-hero__lede">{t("rd.hero.lede")}</p>
            <div className="rd-hero__actions">
              <ButtonLink to="/work">{t("rd.hero.ctaWork")}</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">
                {t("rd.hero.ctaContact")}
              </ButtonLink>
            </div>
          </div>

          {/* One visual per design; redesign.css shows the right one. */}
          <div className="rd-hero__visual rd-hero__visual--collage" aria-hidden="true">
            <img src={shapeshop.images[0]} alt="" />
            <img src={bis.images[0]} alt="" />
          </div>
          <div className="rd-hero__visual rd-hero__visual--terminal" aria-hidden="true">
            <div className="rd-term">
              <div className="rd-term__bar">
                <span />
                <span />
                <span />
                <em>~/frontangle</em>
              </div>
              <pre className="rd-term__body">
                <b>$</b> whoami{"\n"}
                <i>oliver watkins · senior full-stack developer · munich</i>
                {"\n"}
                <b>$</b> cat stack.txt{"\n"}
                <i>React · TypeScript · Spring Boot · MySQL · Azure</i>
                {"\n"}
                <b>$</b> ls projects/{"\n"}
                <i>shape-shop/  berlin-industrial-stories/  petsit/</i>
                {"\n"}
                <b>$</b> <span className="rd-term__cursor" />
              </pre>
            </div>
          </div>
          <figure className="rd-hero__visual rd-hero__visual--art">
            <div className="rd-painting">
              <img src={artImage} alt="An abstract painting by Oliver Watkins" />
            </div>
            <figcaption>{t("rd.hero.artCaption")}</figcaption>
          </figure>
        </div>
      </section>

      <Reveal as="section" className="rd-proof">
        <div className="rd-container rd-proof__inner">
          <dl className="rd-stats">
            <div>
              <dt>25+</dt>
              <dd>{t("rd.stats.years")}</dd>
            </div>
            <div>
              <dt>2010</dt>
              <dd>{t("rd.stats.freelance")}</dd>
            </div>
            <div>
              <dt>3</dt>
              <dd>{t("rd.stats.cities")}</dd>
            </div>
          </dl>
          <div className="rd-clients">
            <p className="rd-clients__label">{t("rd.clients.label")}</p>
            <p className="rd-clients__names">
              <span>BMW</span>
              <span>Lufthansa</span>
            </p>
            <p className="rd-clients__sectors">{t("rd.clients.sectors")}</p>
          </div>
        </div>
      </Reveal>

      <section className="rd-section">
        <div className="rd-container">
          <div className="rd-section__head">
            <h2 className="rd-section__title">{t("rd.featured.title")}</h2>
            <Link to="/work" className="rd-textlink">
              {t("rd.featured.all")} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="rd-cards">
            {featuredProjects.map((p) => (
              <Reveal key={p.id} as="article" className="rd-card">
                <Link to={`/work#${p.id}`} className="rd-card__link">
                  <div className="rd-card__media">
                    <img src={p.images[0]} alt={`Screenshot of ${p.name}`} loading="lazy" />
                  </div>
                  <div className="rd-card__body">
                    <h3 className="rd-card__title">{p.name}</h3>
                    <p className="rd-card__tagline">{t(`rd.projects.${p.id}.tagline`)}</p>
                    <Chips items={p.stack.slice(0, 4)} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--alt">
        <div className="rd-container">
          <div className="rd-section__head">
            <h2 className="rd-section__title">{t("rd.servicesTeaser.title")}</h2>
            <Link to="/services" className="rd-textlink">
              {t("rd.servicesTeaser.more")} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="rd-grid3">
            {services.map(([title, text], i) => (
              <Reveal key={title} className="rd-service">
                <span className="rd-service__num">0{i + 1}</span>
                <h3>{t(`rd.services.${title}`)}</h3>
                <p>{t(`rd.services.${text}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-container">
          <h2 className="rd-section__title">{t("rd.approach.title")}</h2>
          <div className="rd-grid4">
            {principles.map((key) => (
              <Reveal key={key} className="rd-principle">
                <h3>{t(`rd.approach.${key}Title`)}</h3>
                <p>{t(`rd.approach.${key}`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
