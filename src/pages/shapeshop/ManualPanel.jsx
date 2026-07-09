
export default function ManualPanel() {
  return (
      <div style={{margin: "30px"}} className="shapeshop-manual">
        <h1>User Manual</h1>
        <p>
          This guide covers the two parts of a Shape Shop site: the <strong>admin panel</strong>, where the
          shop owner manages their store, and the <strong>shop</strong>, which is what customers see.
        </p>

        <div className="manual-jump-nav">
          <a href="#admin-panel">Admin Panel</a>
          <a href="#shop">Shop</a>
        </div>

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

          <h3>Products</h3>
          <p>
            Add, edit, and remove the products and categories customers see in the shop, including product
            images and pricing.
          </p>

          <h3>Layout</h3>
          <p>
            Controls how the shop's home page and product listings are arranged (e.g. single page, category
            menu, or a custom layout), and lets the owner set the header and welcome images.
          </p>

          <h3>Variants</h3>
          <p>
            Manage product variants — such as different sizes or colours of the same product.
          </p>

          <h3>Settings</h3>
          <p>
            General store settings for the site.
          </p>
        </section>

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

          <h3>Checkout</h3>
          <p>
            Once ready to order, customers move through a short checkout flow: delivery address, payment
            method, payment details, and an order summary to review before confirming. After confirming, they
            see an order confirmation screen.
          </p>

          <h3>Order status</h3>
          <p>
            After an order is placed, its progress (pending → confirmed → ready → completed, or cancelled) is
            tracked in the admin Orders tab.
          </p>
        </section>
      </div>
  );
}
