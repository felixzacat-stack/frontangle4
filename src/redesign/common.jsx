import { useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// Fades a block in the first time it scrolls into view.
export function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <Tag ref={ref} className={`rd-reveal${inView ? " is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Front Angle` : "Front Angle · Oliver Watkins";
  }, [title]);
}

export function Eyebrow({ children }) {
  return <p className="rd-eyebrow">{children}</p>;
}

export function Chips({ items }) {
  return (
    <ul className="rd-chips">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// One link from a project's `links` list (see data/projects.js).
export function ProjectLink({ link }) {
  const { t } = useTranslation();
  const label = t(`rd.work.${link.kind}`);
  if (!link.external) {
    return (
      <a className="rd-textlink" href={link.href}>
        {label} <span aria-hidden="true">→</span>
      </a>
    );
  }
  return (
    <span className="rd-projectlink">
      <a
        className="rd-textlink"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        title={link.mayBeOffline ? t("ss-live-offline-tooltip") : undefined}
      >
        {label} <span aria-hidden="true">↗</span>
      </a>
      {link.mayBeOffline && <small className="rd-note">{t("ss-live-offline-note")}</small>}
    </span>
  );
}

export function ButtonLink({ to, variant = "primary", children }) {
  return (
    <Link to={to} className={`rd-btn rd-btn--${variant}`}>
      {children}
    </Link>
  );
}

export function CtaBand() {
  const { t } = useTranslation();
  return (
    <Reveal as="section" className="rd-cta">
      <div className="rd-container rd-cta__inner">
        <div>
          <h2 className="rd-cta__title">{t("rd.cta.title")}</h2>
          <p className="rd-cta__text">{t("rd.cta.text")}</p>
        </div>
        <ButtonLink to="/contact">{t("rd.cta.button")}</ButtonLink>
      </div>
    </Reveal>
  );
}
