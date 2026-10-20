import "src/pages/page.scss";

import c1 from "src/pages/petsitter/img/petsitter-map.png";
import c2 from "src/pages/petsitter/img/petsitter-profile.png";
import c3 from "src/pages/petsitter/img/petsitter-edit-profile.png";

import { Trans } from "react-i18next";
import FadeCarousel from "src/pages/prevworkSections/FadeCarousel";

export default function PetsitterSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-ps-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-ps" />
        </p>
        <ul>
          <li>React, TypeScript, MUI</li>
          <li>Apollo GraphQL, Google Maps</li>
          <li>NestJS, TypeORM</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className={"prev-media"}>
        <FadeCarousel
          images={someInterestingImages}
          interval={4000}
          delay={1500}
          alt={"screenshots of Petsit!"}
        />
      </div>
    </>
  );
}

const someInterestingImages = [c1, c2, c3];
