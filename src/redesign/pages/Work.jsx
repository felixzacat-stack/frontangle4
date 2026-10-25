import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import { projects } from "src/redesign/data/projects";
import {
  CtaBand,
  ProjectLink,
  Reveal,
  usePageTitle,
} from "src/redesign/common";

export default function Work() {
  const { t } = useTranslation();
  const { hash } = useLocation();
  usePageTitle(t("rd.work.title"));

  // Home page cards link to /work#<id>; ScrollRestoration doesn't handle hashes.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <section className="rd-pagehead">
        <div className="rd-container">
          <h1 className="rd-pagehead__title">{t("rd.work.title")}</h1>
          <p className="rd-pagehead__intro">{t("rd.work.intro")}</p>
        </div>
      </section>

      <section className="rd-section rd-section--tight">
        <div className="rd-container rd-cases">
          {projects.map((p, i) => (
            <Case key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

const galleryLayouts = [
  ["three", "Three", "One big image with the next two as thumbnails"],
  ["single", "Single", "Just the big image, level with the description"],
];

const readLayout = (id, fallback) => {
  try {
    return localStorage.getItem(`gallery:${id}`) || fallback;
  } catch {
    return fallback;
  }
};

// One project. Its gallery layout (data-gallery on the article, styled in redesign.css)
// starts at the project's `gallery` default and can be switched per project with the
// prototype-only toggle under the images; the choice is remembered per project.
function Case({ project: p, index: i }) {
  const { t } = useTranslation();
  const [layout, setLayout] = useState(() =>
    readLayout(p.id, p.gallery ?? "three"),
  );

  const choose = (value) => {
    setLayout(value);
    try {
      localStorage.setItem(`gallery:${p.id}`, value);
    } catch {
      // private mode etc.: fine, just don't remember it
    }
  };

  return (
    <Reveal as="article" id={p.id} className="rd-case" data-gallery={layout}>
      <CaseGallery images={p.images} alt={`Screenshot of ${p.name}`}>
        {p.images.length > 1 && (
          <div
            className="rd-layout-toggle"
            role="radiogroup"
            aria-label="Image layout"
          >
            {galleryLayouts.map(([id, text, hint]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={layout === id}
                title={hint}
                onClick={() => choose(id)}
              >
                {text}
              </button>
            ))}
          </div>
        )}
      </CaseGallery>
      <div className="rd-case__head">
        <span className="rd-case__num">0{i + 1}</span>
        <h2 className="rd-case__title">{p.name}</h2>
        <p className="rd-case__tagline">{t(`rd.projects.${p.id}.tagline`)}</p>
      </div>
      <div className="rd-case__body">
        <p>{t(p.textKey)}</p>
        {p.bullets && (
          <ul className="rd-checklist">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {p.links.length > 0 && (
          <div className="rd-case__links">
            {p.links.map((link) => (
              <ProjectLink key={link.href} link={link} />
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

// One big image and the next two as thumbnails. Every few seconds (randomly, so the
// projects don't change in step) the first thumbnail moves up into the big image and
// the window moves one along the list. Stays put for users who prefer reduced motion.
// With data-gallery='single' on the project the thumbnails are hidden, so it's just
// the big image changing. `children` go underneath (the layout toggle).
function CaseGallery({ images, alt, children }) {
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timeoutId;
    const schedule = () => {
      timeoutId = setTimeout(
        () => {
          setStart((i) => (i + 1) % images.length);
          schedule();
        },
        3000 + Math.random() * 3000,
      );
    };
    schedule();
    return () => clearTimeout(timeoutId);
  }, [images.length]);

  const thumbs = [1, 2]
    .filter((n) => n < images.length)
    .map((n) => images[(start + n) % images.length]);

  return (
    <div className="rd-case__media">
      <div className="rd-case__main">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === start ? alt : ""}
            aria-hidden={i !== start}
            className={i === start ? "is-active" : ""}
            loading="lazy"
          />
        ))}
      </div>
      {thumbs.length > 0 && (
        <div className="rd-case__thumbs">
          {thumbs.map((src, n) => (
            <img key={`${n}-${src}`} src={src} alt="" loading="lazy" />
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
