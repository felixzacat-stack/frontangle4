import "src/pages/page.scss";

import c1 from "src/pages/bis/img/bis-home.png";
import c2 from "src/pages/bis/img/bis-story.png";
import c3 from "src/pages/bis/img/bis-calendar.png";
import c4 from "src/pages/bis/img/bis-shop.png";
import c5 from "src/pages/bis/img/bis-admin-bookings.png";

import { Trans } from "react-i18next";
import FadeCarousel from "src/pages/prevworkSections/FadeCarousel";
import LiveSiteLink from "src/pages/shapeshop/LiveSiteLink";

export default function BerlinIndustrialStoriesSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-bis-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-bis" />
        </p>
        <ul>
          <li>React, TypeScript, Redux Toolkit, MUI</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>Stripe, Azure Blob Storage</li>
          <li>Azure Cloud (AKS)</li>
        </ul>
        <div className={"prev-links"}>
          <LiveSiteLink href={"https://shapeshop-aks.eastus.cloudapp.azure.com/bis/"} />
        </div>
      </div>
      <div className={"prev-media"}>
        <FadeCarousel
          images={someInterestingImages}
          interval={3500}
          delay={2500}
          alt={"screenshots of Berlin Industrial Stories"}
        />
      </div>
    </>
  );
}

const someInterestingImages = [c1, c2, c3, c4, c5];
