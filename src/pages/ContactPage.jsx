import { useState } from "react";

import "./contactPage.scss";
// import {useTranslation} from 'react-i18next';

import linkedInLogo from "../img/link-linkedin.png";
import xingLogo from "../img/xing.svg";

// Web3Forms delivers submissions to the email address this key was registered with.
const WEB3FORMS_ACCESS_KEY = "16efebb6-ce76-4ef8-94c8-6b97563e5d3f";
export default function ContactPage() {
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

  return (
    <section className="fa-page contact-page">
      <div className="contact-info paragraph-1">
        <p>
          If you would like to contact me please fill out the form on the right.
          You can also contact me via{" "}
          <a href={"https://www.linkedin.com/in/oliver-watkins-0673b27/"}>
            Linked In{" "}
          </a>
          or{" "}
          <a href={"https://www.xing.com/profile/Oliver_Watkins2/cv"}> Xing</a>
        </p>

        {/*todo*/}
        {/*<Trans i18nKey="contact"/>*/}
        <div className="contact-page-image"> </div>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input
            type="hidden"
            name="subject"
            value="New message from the Front Angle contact form"
          />
          <input type="hidden" name="from_name" value="Front Angle website" />
          {/* Honeypot: bots fill this in, Web3Forms then discards the submission */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="So I can reply to you.."
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write something.."
            style={{ height: "200px" }}
          />

          <input
            type="submit"
            value={status === "sending" ? "Sending…" : "Submit"}
            disabled={status === "sending"}
          />

          {status === "sent" && (
            <p className="contact-form-status success" role="status">
              Thanks — your message has been sent. I&apos;ll get back to you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact-form-status error" role="alert">
              Sorry, something went wrong sending your message. Please try
              again, or reach me on{" "}
              <a href={"https://www.linkedin.com/in/oliver-watkins-0673b27/"}>
                LinkedIn
              </a>
              .
            </p>
          )}

          <div className={"contact-page-links"}>
            <a href={"https://www.linkedin.com/in/oliver-watkins-0673b27/"}>
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
            <a href={"https://www.xing.com/profile/Oliver_Watkins2/cv"}>
              <img src={xingLogo} alt="Xing" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
