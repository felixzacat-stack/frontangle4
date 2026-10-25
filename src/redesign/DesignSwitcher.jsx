import { useEffect, useState } from "react";

// Prototype-only control for comparing design directions. Remove once one is chosen.
// (The Work page's per-project image layout toggle lives in pages/Work.jsx.)
const designs = [
  ["studio", "Studio", "Minimal: white, big sans-serif type, blue accent"],
  ["terminal", "Terminal", "Developer: dark, monospace details, green accent"],
  ["atelier", "Atelier", "Personal: warm paper, serif headings, terracotta accent"],
];

const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

// One pill of radio buttons, mirrored to html[data-<name>] and remembered in localStorage.
function Toggle({ name, label, options }) {
  const [value, setValue] = useState(() => read(name, options[0][0]));

  useEffect(() => {
    document.documentElement.dataset[name] = value;
    try {
      localStorage.setItem(name, value);
    } catch {
      // private mode etc.: fine, just don't remember it
    }
  }, [name, value]);

  return (
    <div className="rd-switcher__group" role="radiogroup" aria-label={label}>
      <span className="rd-switcher__label">{label}</span>
      {options.map(([id, text, hint]) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={value === id}
          title={hint}
          onClick={() => setValue(id)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default function DesignSwitcher() {
  return (
    <div className="rd-switcher">
      <Toggle name="design" label="Design" options={designs} />
    </div>
  );
}
