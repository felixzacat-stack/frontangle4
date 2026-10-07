import "src/pages/page.scss";

import bw from "src/img/bw_1167x847.png";
import { Trans } from "react-i18next";

export default function BlogSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-bl-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-bl" />
        </p>
      </div>
      <div className={"prev-media"}>
        <img src={bw} alt={"screenshot of the blog"} />
      </div>
    </>
  );
}
