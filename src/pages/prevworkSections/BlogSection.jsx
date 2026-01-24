import "../page.scss";

import bw from "../../img/bw_1167x847.png";
import { Trans } from "react-i18next";

export default function BlogSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <p>
          <Trans i18nKey="previous-bl" />
        </p>
      </div>
      <img className={"boxy"} id={"blog-img"} src={bw} alt={"blog url"} />
    </>
  );
}
