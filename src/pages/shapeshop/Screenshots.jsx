import { useEffect, useState } from "react";
import "./Screenshots.scss";

import shopHome from "./img/shop-home.png";
import shopHomeMobile from "./img/shop-home-mobile.png";
import shopProducts from "./img/shop-products.png";
import shopProductsMobile from "./img/shop-products-mobile.png";
import shopCart from "./img/shop-cart.png";
import shopCartMobile from "./img/shop-cart-mobile.png";
import shopCheckout from "./img/shop-checkout.png";
import shopCheckoutMobile from "./img/shop-checkout-mobile.png";
import shopPaymentMethod from "./img/shop-payment-method.png";
import shopPaymentMethodMobile from "./img/shop-payment-method-mobile.png";
import shopOrderStatus from "./img/shop-order-status.png";

import adminOrders from "./img/shop-admin-orders.png";
import adminOrdersMobile from "./img/shop-admin-orders-mobile.png";
import adminOrderDetail from "./img/shop-admin-order-detail.png";
import adminOrderDetailMobile from "./img/shop-admin-order-detail-mobile.png";
import adminProducts from "./img/shop-admin-products.png";
import adminProductsMobile from "./img/shop-admin-products-mobile.png";
import adminEditProduct from "./img/shop-admin-edit-product.png";
import adminEditProductMobile from "./img/shop-admin-edit-product-mobile.png";
import adminCategories from "./img/shop-admin-categories.png";
import adminLayout from "./img/shop-admin-layout.png";
import adminVariants from "./img/shop-admin-variants.png";
import adminSettings from "./img/shop-admin-settings.png";

// `id` is a stable identifier for each screenshot (shop-*/admin-* naming -
// see take-screenshots-for-frontangle.md), rendered as data-shot-id with a
// "-desktop"/"-mobile" suffix. `alt` stays a proper accessibility
// description. `mobileSrc` is omitted for screens that are desktop-only.
const SHOTS = [
  // --- Shop ---
  { category: "shop", id: "shop-home", alt: "Landing page", desktopSrc: shopHome, mobileSrc: shopHomeMobile },
  { category: "shop", id: "shop-products", alt: "Shop showing products in a category", desktopSrc: shopProducts, mobileSrc: shopProductsMobile },
  { category: "shop", id: "shop-cart", alt: "Cart summary popover", desktopSrc: shopCart, mobileSrc: shopCartMobile },
  { category: "shop", id: "shop-checkout", alt: "Checkout delivery or pickup step", desktopSrc: shopCheckout, mobileSrc: shopCheckoutMobile },
  { category: "shop", id: "shop-payment-method", alt: "Choosing cash or card payment", desktopSrc: shopPaymentMethod, mobileSrc: shopPaymentMethodMobile },
  { category: "shop", id: "shop-order-status", alt: "Order confirmation screen", desktopSrc: shopOrderStatus },
  // --- Admin ---
  { category: "admin", id: "admin-orders", alt: "Orders tab showing active orders", desktopSrc: adminOrders, mobileSrc: adminOrdersMobile },
  { category: "admin", id: "admin-order-detail", alt: "Order detail screen", desktopSrc: adminOrderDetail, mobileSrc: adminOrderDetailMobile },
  { category: "admin", id: "admin-products", alt: "Products tab showing the product grid", desktopSrc: adminProducts, mobileSrc: adminProductsMobile },
  { category: "admin", id: "admin-edit-product", alt: "Edit product dialog", desktopSrc: adminEditProduct, mobileSrc: adminEditProductMobile },
  { category: "admin", id: "admin-categories", alt: "Create Category dialog", desktopSrc: adminCategories },
  { category: "admin", id: "admin-layout", alt: "Shop Layout options", desktopSrc: adminLayout },
  { category: "admin", id: "admin-variants", alt: "Variant Types panel", desktopSrc: adminVariants },
  { category: "admin", id: "admin-settings", alt: "Settings panel showing welcome and header image options", desktopSrc: adminSettings },
];

function ScreenshotGrid({ shots, variant, onSelect }) {
  const key = variant === "mobile" ? "mobileSrc" : "desktopSrc";
  const items = shots.filter((s) => s[key]);
  if (items.length === 0) return null;
  return (
    <div className={`screenshot-grid${variant === "mobile" ? " screenshot-grid-mobile" : ""}`}>
      {items.map((s) => (
        <img
          key={`${s.id}-${variant}`}
          data-shot-id={`${s.id}-${variant}`}
          src={s[key]}
          className={`screenshot-image${variant === "mobile" ? " screenshot-image-mobile" : ""}`}
          alt={variant === "mobile" ? `${s.alt} (mobile)` : s.alt}
          onClick={() => onSelect({ src: s[key], id: `${s.id}-${variant}`, alt: s.alt })}
        />
      ))}
    </div>
  );
}

function CategorySection({ title, shots, onSelect }) {
  return (
    <section className="screenshot-category">
      <h2>{title}</h2>
      <h3>Desktop</h3>
      <ScreenshotGrid shots={shots} variant="desktop" onSelect={onSelect} />
      <h3>Mobile</h3>
      <ScreenshotGrid shots={shots} variant="mobile" onSelect={onSelect} />
    </section>
  );
}

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

  const shopShots = SHOTS.filter((s) => s.category === "shop");
  const adminShots = SHOTS.filter((s) => s.category === "admin");

  return (
    <>
      <CategorySection title="Shop" shots={shopShots} onSelect={setLightboxShot} />
      <CategorySection title="Admin" shots={adminShots} onSelect={setLightboxShot} />

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
