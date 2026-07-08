import React from "react";

import "./Screenshots.scss";

import img1 from "./screenshots/img1.PNG";
import img2 from "./screenshots/img2.PNG";
import img3 from "./screenshots/img3.PNG";
import img4 from "./screenshots/img4.PNG";
import img5 from "./screenshots/img5.PNG";
import img6 from "./screenshots/img6.PNG";
import img7 from "./screenshots/img7.PNG";
import img8 from "./screenshots/img8.PNG";
import img9 from "./screenshots/img9.PNG";
import img10 from "./screenshots/img10.PNG";

const screenshots = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Screenshots() {
  return (
    <div className="screenshot-grid">
      {screenshots.map((src, index) => (
        <img
          key={index}
          src={src}
          className="screenshot-image"
          alt={`Iceberg Charts screenshot ${index + 1}`}
        />
      ))}
    </div>
  );
}
