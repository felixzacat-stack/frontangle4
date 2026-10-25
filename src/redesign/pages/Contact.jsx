import { Trans, useTranslation } from "react-i18next";

import SocialLinks, { LINKEDIN_URL, XING_URL } from "src/pages/SocialLinks";
import useContactForm, { WEB3FORMS_ACCESS_KEY } from "src/pages/useContactForm";
import { usePageTitle } from "src/redesign/common";

const fields = [
  ["name", "text"],
  ["email", "email"],
  // Web3Forms uses this field as the subject line of the email
  ["subject", "text"],
];

const linkComponents = {
  linkedin: <a href={LINKEDIN_URL} />,
  xing: <a href={XING_URL} />,
};

export default function Contact() {
  const { t } = useTranslation();
  const { status, handleSubmit } = useContactForm();
  usePageTitle(t("contact-heading"));

  return (
    <section className="rd-section rd-contact">
      <div className="rd-container rd-contact__inner">
        <div className="rd-contact__intro">
          <h1 className="rd-pagehead__title">{t("contact-heading")}</h1>
          <p className="rd-pagehead__intro">
            <Trans i18nKey="contact" components={linkComponents} />
          </p>
          <SocialLinks />
          <p className="rd-note">{t("rd.contact.based")}</p>
        </div>

        <form className="rd-form" onSubmit={handleSubmit}>
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

          {fields.map(([name, type]) => (
            <label key={name} className="rd-field">
              <span>{t(`contact-${name}`)}</span>
              <input type={type} name={name} required />
            </label>
          ))}
          <label className="rd-field">
            <span>{t("contact-message")}</span>
            <textarea name="message" required rows={7} />
          </label>

          <button type="submit" className="rd-btn rd-btn--primary" disabled={status === "sending"}>
            {status === "sending" ? t("contact-sending") : t("contact-submit")}
          </button>

          {status === "sent" && (
            <p className="rd-form__status is-success" role="status">
              {t("contact-sent")}
            </p>
          )}
          {status === "error" && (
            <p className="rd-form__status is-error" role="alert">
              <Trans i18nKey="contact-error" components={linkComponents} />
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
