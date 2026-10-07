import "src/pages/page.scss";
import "src/pages/previousWorkPage.scss";

import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";
import ShapeShopSection from "src/pages/prevworkSections/ShapeShopSection";
import IcebergChartsSection from "src/pages/prevworkSections/IcebergChartsSection";
import ArtGallerySection from "src/pages/prevworkSections/ArtGallerySection";
import BlogSection from "src/pages/prevworkSections/BlogSection";

const sections = [
  { id: "shapeshop", Component: ShapeShopSection },
  { id: "icebergcharts", Component: IcebergChartsSection },
  { id: "artgallery", Component: ArtGallerySection },
  { id: "blog", Component: BlogSection },
];

// Fades a section in the first time it scrolls into view, then leaves it alone.
function Reveal({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <section
      ref={ref}
      id={id}
      className={"prev-section reveal" + (inView ? " visible" : "")}
    >
      {children}
    </section>
  );
}

export default function PreviousWorkPage() {
  return (
    <section className="fa-page previous-work">
      <section className="previous-work-top paragraph-1">
        <Trans i18nKey="previous-blurb" />
      </section>
      {sections.map(({ id, Component }) => (
        <Reveal key={id} id={id}>
          <Component />
        </Reveal>
      ))}
    </section>
  );
}
