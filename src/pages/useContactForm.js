import { useState } from "react";

// Web3Forms delivers submissions to the email address this key was registered with.
export const WEB3FORMS_ACCESS_KEY = "16efebb6-ce76-4ef8-94c8-6b97563e5d3f";

// Shared by the contact page and the redesign's contact page.
export default function useContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Contact form submission failed", err);
      setStatus("error");
    }
  };

  return { status, handleSubmit };
}
