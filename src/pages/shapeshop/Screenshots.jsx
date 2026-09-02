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

const screenshots = [img1, img2, img3, img4, img5];
const mobileScreenshots = [img1Mobile, img2Mobile, img3Mobile, img4Mobile, img5Mobile];

export default function Screenshots() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxSrc]);

  return (
    <>
      <div>Desktop</div>
      <div className="screenshot-grid">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            className="screenshot-image"
            alt={`Shape Shop screenshot ${index + 1}`}
            onClick={() => setLightboxSrc(src)}
          />
        ))}
      </div>
      <div>Mobile</div>
      <div className="screenshot-grid screenshot-grid-mobile">
        {mobileScreenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            className="screenshot-image screenshot-image-mobile"
            alt={`Shape Shop mobile screenshot ${index + 1}`}
            onClick={() => setLightboxSrc(src)}
          />
        ))}
      </div>

      {lightboxSrc && (
        <div className="screenshot-lightbox" onClick={() => setLightboxSrc(null)}>
          <button
            className="screenshot-lightbox-close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={lightboxSrc}
            className="screenshot-lightbox-image"
            alt="Enlarged screenshot"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
