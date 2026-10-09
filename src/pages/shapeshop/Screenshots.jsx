import { useEffect, useState } from "react";
import "./Screenshots.scss";

import shopProducts from "./img/shop-products.png";
import shopProductsMobile from "./img/shop-products-mobile.png";
import shopLayoutWizard from "./img/shop-layout-wizard.png";
import shopLayoutWizardMobile from "./img/shop-layout-wizard-mobile.png";
import shopLayoutCategoryMenu from "./img/shop-layout-category-menu.png";
import shopLayoutCategoryMenuMobile from "./img/shop-layout-category-menu-mobile.png";
import shopLayoutCustom from "./img/shop-layout-custom.png";
import shopLayoutCustomMobile from "./img/shop-layout-custom-mobile.png";
import shopProductDetail from "./img/shop-product-detail.png";
import shopProductDetailMobile from "./img/shop-product-detail-mobile.png";
import shopCheckout from "./img/shop-checkout.png";
import shopCheckoutMobile from "./img/shop-checkout-mobile.png";
import shopPaymentMethod from "./img/shop-payment-method.png";
import shopPaymentMethodMobile from "./img/shop-payment-method-mobile.png";
import shopCardPayment from "./img/shop-card-payment.png";
import shopCardPaymentMobile from "./img/shop-card-payment-mobile.png";
import shopOrderStatus from "./img/shop-order-status.png";
import shopOrderStatusMobile from "./img/shop-order-status-mobile.png";

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
  { category: "shop", group: "products", id: "shop-products", alt: "Single Page layout: every category on one scrollable page", desktopSrc: shopProducts, mobileSrc: shopProductsMobile },
  { category: "shop", group: "products", id: "shop-layout-wizard", alt: "Wizard layout: one category per step, with next/back navigation", desktopSrc: shopLayoutWizard, mobileSrc: shopLayoutWizardMobile },
  { category: "shop", group: "products", id: "shop-layout-category-menu", alt: "Category Menu layout: tabs to switch between categories", desktopSrc: shopLayoutCategoryMenu, mobileSrc: shopLayoutCategoryMenuMobile },
  { category: "shop", group: "products", id: "shop-layout-custom", alt: "Custom layout: a hand-picked set of categories on one page", desktopSrc: shopLayoutCustom, mobileSrc: shopLayoutCustomMobile },
  { category: "shop", group: "products", id: "shop-product-detail", alt: "Product detail page with colour, size, finish and extras variants", desktopSrc: shopProductDetail, mobileSrc: shopProductDetailMobile },
  { category: "shop", group: "checkout", id: "shop-checkout", alt: "Checkout delivery or pickup step", desktopSrc: shopCheckout, mobileSrc: shopCheckoutMobile },
  { category: "shop", group: "checkout", id: "shop-payment-method", alt: "Choosing cash or card payment", desktopSrc: shopPaymentMethod, mobileSrc: shopPaymentMethodMobile },
  { category: "shop", group: "checkout", id: "shop-card-payment", alt: "Card payment form with billing details, powered by Stripe", desktopSrc: shopCardPayment, mobileSrc: shopCardPaymentMobile },
  { category: "shop", group: "checkout", id: "shop-order-status", alt: "Order confirmation screen", desktopSrc: shopOrderStatus, mobileSrc: shopOrderStatusMobile },
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
        <figure key={`${s.id}-${variant}`} className="screenshot-figure">
          <img
            data-shot-id={`${s.id}-${variant}`}
            src={s[key]}
            className={`screenshot-image${variant === "mobile" ? " screenshot-image-mobile" : ""}`}
            alt={variant === "mobile" ? `${s.alt} (mobile)` : s.alt}
            title={s.alt}
            onClick={() => onSelect({ src: s[key], id: `${s.id}-${variant}`, alt: s.alt })}
          />
          <figcaption className="screenshot-caption">{s.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function DeviceGrids({ shots, onSelect, headingLevel }) {
  const Heading = `h${headingLevel}`;
  return (
    <>
      <Heading>Desktop</Heading>
      <ScreenshotGrid shots={shots} variant="desktop" onSelect={onSelect} />
      <Heading>Mobile</Heading>
      <ScreenshotGrid shots={shots} variant="mobile" onSelect={onSelect} />
    </>
  );
}

// `groups` optionally splits a category into titled subsections, matched
// against each shot's `group` field.
function CategorySection({ title, shots, groups, onSelect }) {
  return (
    <section className="screenshot-category">
      <h2>{title}</h2>
      {groups ? (
        groups.map((g) => (
          <section key={g.key} className="screenshot-group">
            <h3>{g.title}</h3>
            <DeviceGrids shots={shots.filter((s) => s.group === g.key)} onSelect={onSelect} headingLevel={4} />
          </section>
        ))
      ) : (
        <DeviceGrids shots={shots} onSelect={onSelect} headingLevel={3} />
      )}
    </section>
  );
}

const SHOP_GROUPS = [
  { title: "Products", key: "products" },
  { title: "Checkout process", key: "checkout" },
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

  const shopShots = SHOTS.filter((s) => s.category === "shop");
  const adminShots = SHOTS.filter((s) => s.category === "admin");

  return (
    <>
      <CategorySection title="Shop" shots={shopShots} groups={SHOP_GROUPS} onSelect={setLightboxShot} />
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
