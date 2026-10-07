import "src/pages/page.scss";

import c1 from "src/pages/shapeshop/img/shop-products.png";
import c2 from "src/pages/shapeshop/img/shop-checkout.png";
import c3 from "src/pages/shapeshop/img/shop-admin-products.png";
import c4 from "src/pages/shapeshop/img/shop-admin-edit-product.png";
import c5 from "src/pages/shapeshop/img/shop-admin-orders.png";

import { Trans } from "react-i18next";
import FadeCarousel from "src/pages/prevworkSections/FadeCarousel";
import LiveSiteLink from "src/pages/shapeshop/LiveSiteLink";

export default function ShapeShopSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-ss-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-ss" />
        </p>
        <ul>
          <li>React, Hooks, TypeScript, MUI</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>Azure Cloud</li>
        </ul>
        <div className={"prev-links"}>
          <a href={"/shapeshop/"}>Visit the website here</a>
          <LiveSiteLink />
        </div>
      </div>
      <div className={"prev-media"}>
        <FadeCarousel images={someInterestingImages} alt={"screenshots of Shape Shop"} />
      </div>
    </>
  );
}

const someInterestingImages = [c1, c2, c3, c4, c5];
