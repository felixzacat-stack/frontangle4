export const LIVE_SITE_URL = "https://shapeshop-aks.eastus.cloudapp.azure.com/";

const OFFLINE_NOTE =
  "The live demo may be switched off to save on cloud costs. Get in touch if you'd like to see it running.";

export default function LiveSiteLink({ children = "Live site (Azure)" }) {
  return (
    <>
      <a href={LIVE_SITE_URL} target="_blank" rel="noopener noreferrer" title={OFFLINE_NOTE}>
        {children}
      </a>
      <small style={{ display: "block", opacity: 0.7, fontStyle: "italic" }}>
        ⓘ May be offline — the demo is sometimes switched off to save on cloud costs.
      </small>
    </>
  );
}
