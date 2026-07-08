import "../page.scss";

import ImageGallery from "react-image-gallery";

import c1 from "../shapeshop/img/shop-products.png";
import c2 from "../shapeshop/img/shop-checkout.png";
import c3 from "../shapeshop/img/shop-admin-products.png";
import c4 from "../shapeshop/img/shop-admin-edit-product.png";
import c5 from "../shapeshop/img/shop-admin-orders.png";

import { Trans } from "react-i18next";

export default function ShapeShopSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2 style={{ marginTop: "0px" }}>
          <Trans i18nKey="previous-ss-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-ss" />

          <ul>
            <li>React, Hooks, TypeScript, MUI</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
            <li>Azure Cloud</li>
          </ul>

          <a href={"/shapeshop/"}>Visit the website here</a>

          <br />
          <a href={"https://github.com/oliverwatkins/shape-shop-backend"}>
            Github backend
          </a>
          <br />
          <a href={"https://github.com/oliverwatkins/shape-shop-front-end2"}>
            Github frontend
          </a>

          <br />
          <a href={"https://alpenhof3.netlify.app/"}>demo</a>
        </p>
      </div>
      <div className={"boxy"}>
        <ImageGallery id="ImageGallery" items={someInterestingImages} />
      </div>
    </>
  );
}

const someInterestingImages = [
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: c2,
    thumbnail: c2,
  },
  {
    original: c3,
    thumbnail: c3,
  },
  {
    original: c4,
    thumbnail: c4,
  },
  {
    original: c5,
    thumbnail: c5,
  },
];
