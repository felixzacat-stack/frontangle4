import "src/pages/page.scss";

import c1 from "src/pages/artGallery/art1.png";

import { Trans } from "react-i18next";

export default function ArtGallerySection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-artgallery-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-artgallery" />
        </p>
        <div className={"prev-links"}>
          <a href={"https://www.oliver-watkins.art/"}>www.oliver-watkins.art</a>
        </div>
      </div>
      <div className={"prev-media"}>
        <img src={c1} alt={"screenshot of the art gallery website"} />
      </div>
    </>
  );
}
