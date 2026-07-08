
import "./Screenshots.scss";

import img1 from "./img/ss3.png";
import img2 from "./img/ss4.png";
import img3 from "./img/ss5.png";
import img4 from "./img/ss6.png";
import img5 from "./img/ss7.png";

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
