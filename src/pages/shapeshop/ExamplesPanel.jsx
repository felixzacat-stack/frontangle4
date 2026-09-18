import Carousel from "./Carousel";
import alpenhofShopScreenshot from "./img/alpenhof-shop.png";
import alpenhofShopSelectionScreenshot from "./img/alpenhof-shop-selection.png";
import alpenhofAdminOrdersScreenshot from "./img/alpenhof-admin-orders.png";
import alpenhofAdminProductsScreenshot from "./img/alpenhof-admin-products.png";

const ALPENHOF_IMAGES = [
  { src: alpenhofShopScreenshot, alt: "Alpenhof shop showing the starters category" },
  { src: alpenhofShopSelectionScreenshot, alt: "Alpenhof shop with an item selected and order summary" },
  { src: alpenhofAdminOrdersScreenshot, alt: "Alpenhof admin console showing active orders" },
  { src: alpenhofAdminProductsScreenshot, alt: "Alpenhof admin console showing the product catalog" },
];

export default function ExamplesPanel() {
  return (
      <div style={{margin: "30px"}} className="shapeshop-examples">
        <h1>Examples</h1>
        <p>
          Shape Shop is a white-label platform — the same admin panel and shop code runs multiple independent
          storefronts, each picked by hostname and configured with its own products, categories, and layout.
          Here are other tenants running on the platform.
        </p>

        <div className="tenant-cards">
          <div className="tenant-card">
            <h2>Alpenhof</h2>
            <p>
              A demo tenant modelled on an alpine restaurant menu — starters, mains, and an alcohol category,
              with German-language product names and descriptions to demonstrate localisation.
            </p>
            <Carousel images={ALPENHOF_IMAGES} />
            <p className="tenant-note">Local demo tenant — not yet deployed.</p>
          </div>

          <div className="tenant-card">
            <h2>Higgins</h2>
            <p>
              A demo tenant for a beer shop, selling beers and accessories under its own "Beers &amp; Gear"
              layout.
            </p>
            <p className="tenant-note">Local demo tenant — not yet deployed.</p>
          </div>
        </div>
      </div>
  );
}
