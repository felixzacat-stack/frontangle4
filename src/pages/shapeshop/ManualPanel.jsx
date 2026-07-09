import shopBrowsingScreenshot from "./img/shop-products.png";
import shopCheckoutScreenshot from "./img/shop-checkout.png";
import shopOrderStatusScreenshot from "./img/shop-order-status.png";
import adminOrdersScreenshot from "./img/shop-admin-orders.png";
import adminProductsScreenshot from "./img/shop-admin-products.png";
import adminCategoriesScreenshot from "./img/shop-admin-categories.png";
import adminLayoutScreenshot from "./img/shop-admin-layout.png";
import adminVariantsScreenshot from "./img/shop-admin-variants.png";
import adminSettingsScreenshot from "./img/shop-admin-settings.png";

export default function ManualPanel() {
  return (
      <div style={{margin: "30px"}} className="shapeshop-manual">
        <h1>User Manual</h1>
        <p>
          This guide covers the two parts of a Shape Shop site: the <strong>admin panel</strong>, where the
          shop owner manages their store, and the <strong>shop</strong>, which is what customers see.
        </p>

        <div className="manual-jump-nav">
          <a href="#shop">Shop</a>
          <a href="#admin-panel">Admin Panel</a>
        </div>

        <section id="shop">
          <h2>Using the Shop</h2>
          <p>
            This is the storefront customers use — no login required.
          </p>

          <h3>Browsing</h3>
          <p>
            Customers land on the home page and enter the shop to browse products by category, depending on
            the layout chosen in the admin panel.
          </p>
          <img className="manual-screenshot" src={shopBrowsingScreenshot} alt="Shop showing products in a category" />

          <h3>Checkout</h3>
          <p>
            Once ready to order, customers move through a short checkout flow: delivery address, payment
            method, payment details, and an order summary to review before confirming. After confirming, they
            see an order confirmation screen.
          </p>
          <img className="manual-screenshot" src={shopCheckoutScreenshot} alt="Checkout delivery or pickup step" />

          <h3>Order status</h3>
          <p>
            After an order is placed, its progress (pending → confirmed → ready → completed, or cancelled) is
            tracked in the admin Orders tab.
          </p>
          <img className="manual-screenshot" src={shopOrderStatusScreenshot} alt="Order confirmation screen" />
        </section>

        <section id="admin-panel">
          <h2>Using the Admin Panel</h2>
          <p>
            The shop owner signs in from the <em>Admin</em> link in the site's top navigation. Once logged in
            they land on the Administration Console, which is organised into five tabs.
          </p>

          <h3>Orders</h3>
          <p>
            Shows incoming orders split into <em>Active Orders</em> (pending, confirmed, ready) and
            <em> Completed / Cancelled</em>. Clicking an order opens its detail screen, showing what was
            ordered and letting the owner move it through its states.
          </p>
          <img className="manual-screenshot" src={adminOrdersScreenshot} alt="Orders tab showing active orders" />

          <h3>Products</h3>
          <p>
            Add, edit, and remove the products customers see in the shop, including product images and
            pricing.
          </p>
          <img className="manual-screenshot" src={adminProductsScreenshot} alt="Products tab showing the product grid" />

          <h3>Categories</h3>
          <p>
            Categories are managed from within the Products tab, where each category appears as its own tab
            alongside an <em>ALL</em> tab showing every product. Use <em>Create Category</em> to add a new
            one, drag category tabs to reorder them, and switch to tree view for a sidebar layout of
            categories and their products.
          </p>
          <img className="manual-screenshot" src={adminCategoriesScreenshot} alt="Create Category dialog" />

          <h3>Layout</h3>
          <p>
            Controls how the shop's home page and product listings are arranged (e.g. single page, category
            menu, or a custom layout), and lets the owner set the header and welcome images.
          </p>
          <img className="manual-screenshot" src={adminLayoutScreenshot} alt="Shop Layout options" />

          <h3>Variants</h3>
          <p>
            Manage product variants — such as different sizes or colours of the same product.
          </p>
          <img className="manual-screenshot" src={adminVariantsScreenshot} alt="Variant Types panel" />

          <h3>Settings</h3>
          <p>
            General store settings for the site.
          </p>
          <img className="manual-screenshot" src={adminSettingsScreenshot} alt="Settings panel showing welcome and header image options" />
        </section>
      </div>
  );
}
