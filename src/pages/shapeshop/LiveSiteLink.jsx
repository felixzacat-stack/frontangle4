import { useTranslation } from "react-i18next";

export const LIVE_SITE_URL = "https://shapeshop-aks.eastus.cloudapp.azure.com/";

export default function LiveSiteLink({ children }) {
  const { t } = useTranslation();
  return (
    <>
      <a
        href={LIVE_SITE_URL}
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
