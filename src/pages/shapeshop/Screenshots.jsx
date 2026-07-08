
import "./Screenshots.scss";

import img1 from "./img/shop-products.png";
import img2 from "./img/shop-checkout.png";
import img3 from "./img/shop-admin-products.png";
import img4 from "./img/shop-admin-edit-product.png";
import img5 from "./img/shop-admin-orders.png";

const screenshots = [img1, img2, img3, img4, img5];

export default function Screenshots() {
  return (
    <div className="screenshot-grid">
      {screenshots.map((src, index) => (
        <img
          key={index}
          src={src}
          className="screenshot-image"
          alt={`Shape Shop screenshot ${index + 1}`}
        />
      ))}
    </div>
  );
}
