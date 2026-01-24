import React from "react";

import "../page.scss";

import c1 from "../artGallery/art1.png";

import { Trans } from "react-i18next";

export default function ArtGallerySection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <p>
          <div>
            <Trans i18nKey="previous-artgallery" />
          </div>

          {/*    Shape Shop is an ecommerce platform in developement that allows small and medium sized companies to administer their product catalog. A white labelling solution*/}
          {/*exists for developing customized public facing websites.*/}
          <br />
          <br />
          <a href={"https://www.oliver-watkins.art/"}>www.oliver-watkins.art</a>
        </p>
      </div>

      {/*    #react-charts-img {*/}
      {/*    width : $imgChartWidthN;*/}
      {/*    height: 100%;*/}
      {/*}*/}

      <img
        id={"art-gallery-img"}
        className={"boxy"}
        src={c1}
        alt={"screen shot of react charts"}
      />
      {/*<div className={"boxy"}>*/}
      {/*    <ImageGallery id="ImageGallery" items={someInterestingImages}/>*/}
      {/*</div>*/}
    </>
  );
}
