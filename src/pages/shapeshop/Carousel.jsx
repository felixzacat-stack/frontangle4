import { useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const go = (delta) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
      <div className="carousel">
        <div className="carousel-viewport">
          <button type="button" className="carousel-arrow carousel-arrow-prev" onClick={() => go(-1)} aria-label="Previous screenshot">
            &#8249;
          </button>
          <img className="carousel-image" src={images[index].src} alt={images[index].alt} />
          <button type="button" className="carousel-arrow carousel-arrow-next" onClick={() => go(1)} aria-label="Next screenshot">
            &#8250;
          </button>
        </div>
        <div className="carousel-dots">
          {images.map((image, i) => (
              <button
                  type="button"
                  key={image.src}
                  className={"carousel-dot" + (i === index ? " active" : "")}
                  onClick={() => setIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
              />
          ))}
        </div>
      </div>
  );
}
