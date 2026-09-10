import { useEffect, useState } from "react";
import "./Screenshots.scss";

import img1 from "./img/shop-products.png";
import img2 from "./img/shop-checkout.png";
import img3 from "./img/shop-admin-products.png";
import img4 from "./img/shop-admin-edit-product.png";
import img5 from "./img/shop-admin-orders.png";

import img1Mobile from "./img/shop-products-mobile.png";
import img2Mobile from "./img/shop-checkout-mobile.png";
import img3Mobile from "./img/shop-admin-products-mobile.png";
import img4Mobile from "./img/shop-admin-edit-product-mobile.png";
import img5Mobile from "./img/shop-admin-orders-mobile.png";

// `id` is a stable identifier for each screenshot (shop-*/admin-* naming,
// desktop/mobile suffix - see take-screenshots-for-frontangle.md), rendered
// as data-shot-id. `alt` stays a proper accessibility description.
const screenshots = [
  { src: img1, id: "shop-products-desktop", alt: "Shop showing products in a category" },
  { src: img2, id: "shop-checkout-desktop", alt: "Checkout delivery or pickup step" },
  { src: img3, id: "admin-products-desktop", alt: "Products tab showing the product grid" },
  { src: img4, id: "admin-edit-product-desktop", alt: "Edit product dialog" },
  { src: img5, id: "admin-orders-desktop", alt: "Orders tab showing active orders" },
];
const mobileScreenshots = [
  { src: img1Mobile, id: "shop-products-mobile", alt: "Shop showing products in a category (mobile)" },
  { src: img2Mobile, id: "shop-checkout-mobile", alt: "Checkout delivery or pickup step (mobile)" },
  { src: img3Mobile, id: "admin-products-mobile", alt: "Products tab showing the product grid (mobile)" },
  { src: img4Mobile, id: "admin-edit-product-mobile", alt: "Edit product dialog (mobile)" },
  { src: img5Mobile, id: "admin-orders-mobile", alt: "Orders tab showing active orders (mobile)" },
];

export default function Screenshots() {
  const [lightboxShot, setLightboxShot] = useState(null);

  useEffect(() => {
    if (!lightboxShot) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxShot(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxShot]);

  return (
    <>
      <div>Desktop</div>
      <div className="screenshot-grid">
        {screenshots.map((shot) => (
          <img
            key={shot.id}
            data-shot-id={shot.id}
            src={shot.src}
            className="screenshot-image"
            alt={shot.alt}
            onClick={() => setLightboxShot(shot)}
          />
        ))}
      </div>
      <div>Mobile</div>
      <div className="screenshot-grid screenshot-grid-mobile">
        {mobileScreenshots.map((shot) => (
          <img
            key={shot.id}
            data-shot-id={shot.id}
            src={shot.src}
            className="screenshot-image screenshot-image-mobile"
            alt={shot.alt}
            onClick={() => setLightboxShot(shot)}
          />
        ))}
      </div>

      {lightboxShot && (
        <div className="screenshot-lightbox" onClick={() => setLightboxShot(null)}>
          <button
            className="screenshot-lightbox-close"
            onClick={() => setLightboxShot(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            data-shot-id={lightboxShot.id}
            src={lightboxShot.src}
            className="screenshot-lightbox-image"
            alt={lightboxShot.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
