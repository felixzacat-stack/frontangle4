import { useEffect, useState } from "react";

// Stacks the images and cross-fades to the next one every `interval` ms.
// `delay` shifts the rotation so several carousels on a page don't change in sync.
// Stays on the first image for users who prefer reduced motion.
export default function FadeCarousel({
  images,
  interval = 3000,
  delay = 0,
  alt = "",
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(
        () => setActive((i) => (i + 1) % images.length),
        interval,
      );
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [images.length, interval, delay]);

  return (
    <div className={"fade-carousel"}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === active ? alt : ""}
          aria-hidden={i !== active}
          className={i === active ? "active" : ""}
        />
      ))}
    </div>
  );
}
