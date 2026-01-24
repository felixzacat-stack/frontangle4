import React from "react";

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

export default function Screenshots() {
  const style = {
    width: "300px",
    marginTop: "0px",
  };

  return (
    <div>
      <img src={img1} style={style} className="screenshot-image" alt={""} />
      <img src={img2} style={style} className="screenshot-image" alt={""} />
      <img src={img3} style={style} className="screenshot-image" alt={""} />
      <img src={img4} style={style} className="screenshot-image" alt={""} />
      <img src={img5} style={style} className="screenshot-image" alt={""} />
      <img src={img6} style={style} className="screenshot-image" alt={""} />
      <img src={img7} style={style} className="screenshot-image" alt={""} />
      <img src={img8} style={style} className="screenshot-image" alt={""} />
      <img src={img9} style={style} className="screenshot-image" alt={""} />
      <img src={img10} style={style} className="screenshot-image" alt={""} />
    </div>
  );
}
