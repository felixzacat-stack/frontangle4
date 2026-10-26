import { useTranslation } from "react-i18next";

import { toolbox } from "src/redesign/data/projects";
import { Chips, CtaBand, Reveal, usePageTitle } from "src/redesign/common";

const services = ["web", "ai", "data", "coach"];

export default function Services() {
  const { t, i18n } = useTranslation();
  usePageTitle(t("rd.services.title"));

  return (
    <>
      <section className="rd-pagehead">
        <div className="rd-container">
          <h1 className="rd-pagehead__title">{t("rd.services.title")}</h1>
          <p className="rd-pagehead__intro">{t("rd.services.intro")}</p>
        </div>
      </section>

      <section className="rd-section rd-section--tight">
        <div className="rd-container rd-grid2">
          {services.map((key, i) => (
            <Reveal key={key} as="article" className="rd-service rd-service--full">
              <span className="rd-service__num">0{i + 1}</span>
              <h2>{t(`rd.services.${key}Title`)}</h2>
              <p>{t(`rd.services.${key}`)}</p>
              <ul className="rd-checklist">
                {[1, 2, 3, 4].filter((n) => i18n.exists(`rd.services.${key}${n}`)).map((n) => (
                  <li key={n}>{t(`rd.services.${key}${n}`)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rd-section rd-section--alt">
        <div className="rd-container">
          <h2 className="rd-section__title">{t("rd.services.stackTitle")}</h2>
          <Chips items={toolbox} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
