import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import "./redesign.css";

// Design switcher hidden for now; index.html fixes data-design="studio". Uncomment both lines to bring it back.
// import DesignSwitcher from "src/redesign/DesignSwitcher";
import logo from "src/img/FrontAngle_For_Site.png";
import ukFlag from "src/img/united-kingdom-flag-icon.svg";
import deFlag from "src/img/germany-flag-icon.svg";
import { LINKEDIN_URL, XING_URL } from "src/pages/SocialLinks";

const languages = [
  ["en", ukFlag, "English"],
  ["de", deFlag, "Deutsch"],
];

const navItems = [
  ["/", "home"],
  ["/work", "work"],
  ["/services", "services"],
  ["/contact", "contact"],
];

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="rd">
      <div className="rd-banner">
        <div className="rd-container">
          <Link to="/">
            <img src={logo} alt="Front Angle Logo" />
          </Link>
        </div>
      </div>
      <header className="rd-header">
        <div className="rd-container rd-header__inner">
          <Link to="/" className="rd-logo">
            <span className="rd-logo__mark" aria-hidden="true" />
            Front Angle
          </Link>
          <button
            type="button"
            className="rd-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="rd-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {t("rd.nav.menu")}
          </button>
          <nav id="rd-nav" className={"rd-nav" + (menuOpen ? " is-open" : "")}>
            {navItems.map(([to, key]) => (
              <NavLink key={to} to={to} end className="rd-nav__link">
                <span className="rd-nav__text">{t(`rd.nav.${key}`)}</span>
              </NavLink>
            ))}
            <div className="rd-lang" role="group" aria-label="Language">
              {languages.map(([lng, flag, name]) => (
                <button
                  key={lng}
                  type="button"
                  aria-pressed={i18n.resolvedLanguage === lng}
                  aria-label={name}
                  title={name}
                  lang={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  <img src={flag} alt="" />
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="rd-main">
        <Outlet />
      </main>

      <footer className="rd-footer">
        <div className="rd-container rd-footer__inner">
          <span>
            © {new Date().getFullYear()} Front Angle · {t("rd.footer.rights")}
          </span>
          <span className="rd-footer__links">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={XING_URL} target="_blank" rel="noopener noreferrer">
              Xing
            </a>
          </span>
        </div>
      </footer>

      {/* <DesignSwitcher /> */}
      <ScrollRestoration />
    </div>
  );
}
