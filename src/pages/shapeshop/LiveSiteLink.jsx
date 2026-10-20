import { useTranslation } from "react-i18next";

export const LIVE_SITE_URL = "https://shapeshop-aks.eastus.cloudapp.azure.com/";

// Also used for other demos on the same AKS cluster (pass their `href`), which go offline with it.
export default function LiveSiteLink({ href = LIVE_SITE_URL, children }) {
  const { t } = useTranslation();
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={t("ss-live-offline-tooltip")}
      >
        {children ?? t("ss-live-site")}
      </a>
      <small style={{ display: "block", opacity: 0.7, fontStyle: "italic" }}>
        {t("ss-live-offline-note")}
      </small>
    </>
  );
}
