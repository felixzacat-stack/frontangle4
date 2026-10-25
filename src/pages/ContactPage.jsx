import { Trans, useTranslation } from "react-i18next";

import "./contactPage.scss";

import SocialLinks, { LINKEDIN_URL, XING_URL } from "src/pages/SocialLinks";
import useContactForm, { WEB3FORMS_ACCESS_KEY } from "src/pages/useContactForm";

const linkComponents = {
  linkedin: <a href={LINKEDIN_URL} />,
  xing: <a href={XING_URL} />,
};

export default function ContactPage() {
  const { t } = useTranslation();
  const { status, handleSubmit } = useContactForm();

  return (
    <section className="fa-page contact-page">
      <div className="contact-info paragraph-1">
        <h1>{t("contact-heading")}</h1>
        <p>
          <Trans i18nKey="contact" components={linkComponents} />
        </p>
        <SocialLinks />
        <div className="contact-page-image" />
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="from_name" value="Front Angle website" />
          {/* Honeypot: bots fill this in, Web3Forms then discards the submission */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <label htmlFor="name">{t("contact-name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={t("contact-name-placeholder")}
          />

          {/* Web3Forms uses this field as the subject line of the email */}
          <label htmlFor="subject">{t("contact-subject")}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder={t("contact-subject-placeholder")}
          />

          <label htmlFor="email">{t("contact-email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t("contact-email-placeholder")}
          />

          <label htmlFor="message">{t("contact-message")}</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder={t("contact-message-placeholder")}
            style={{ height: "200px" }}
          />

          <input
            type="submit"
            value={
              status === "sending" ? t("contact-sending") : t("contact-submit")
            }
            disabled={status === "sending"}
          />

          {status === "sent" && (
            <p className="contact-form-status success" role="status">
              {t("contact-sent")}
            </p>
          )}
          {status === "error" && (
            <p className="contact-form-status error" role="alert">
              <Trans i18nKey="contact-error" components={linkComponents} />
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
