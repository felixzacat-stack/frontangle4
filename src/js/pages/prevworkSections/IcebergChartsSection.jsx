import React from "react";

import "../page.scss";

import c1 from "../icharts/samples/TestDataArea_2_Multiple_Layered.PNG";
import c2 from "../icharts/samples/TestDataArea_4_Multiple_Stacked.PNG";
import c4 from "../icharts/samples/TestDataXY_Simple.PNG";
import c5 from "../icharts/samples/TestDataXY_Simple_Series.PNG";
import c6 from "../icharts/samples/TestDataBar_1_Simple.PNG";
import c7 from "../icharts/samples/TestDataBar_2Y.PNG";
import c8 from "../icharts/samples/TestDataBar_4_GradientColor.PNG";
import c9 from "../icharts/samples/TestDataBar_5_PosNegColor.PNG";
import c10 from "../icharts/samples/TestDataBar_FontFun.PNG";
import c11 from "../icharts/samples/TestDataBar_MultiBar_SideBySide.PNG";
import c12 from "../icharts/samples/TestDataBar_MultiBar_Stacked.PNG";

import c13 from "../icharts/samples/TestDataBubble_1_guns.PNG";
import c17 from "../icharts/samples/TestDataGrids_4_alternateGridFillY.PNG";
import c18 from "../icharts/samples/TestDataGrids_5_Gradiant.PNG";

import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { Trans } from "react-i18next";

export default function IcebergChartsSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <p>
          <Trans i18nKey="previous-ic" />
          <ul>
            <li>XY Charts</li>
            <li>Pie Charts</li>
            <li>Area Charts</li>
            <li>Bubble Charts</li>
            <li>Candlestick Charts</li>
            <li>Bar Charts</li>
            <li>Stacked Charts</li>
          </ul>

          <a href={"/icharts/"}>Visit the website here</a>
        </p>
      </div>
      <div className={"boxy"}>
        <ImageGallery id="ImageGallery" items={someInterestingImages} />
      </div>
    </>
  );
}

// let headerText = `Iceberg Charts is an advanced charting library for creating charts in Java.
// It offers a rich set of charting features including :
// XY Charts
// Pie Charts
// Area Charts
// Bubble Charts
// Candlestick Charts
// Bar Charts
// Stacked Charts `

const someInterestingImages = [
  {
    original: c1,
    thumbnail: c1,
  },
  {
    original: c2,
    thumbnail: c2,
  },
  {
    original: c4,
    thumbnail: c4,
  },
  {
    original: c5,
    thumbnail: c5,
  },
  {
    original: c6,
    thumbnail: c6,
  },
  {
    original: c7,
    thumbnail: c7,
  },
  {
    original: c8,
    thumbnail: c8,
  },
  {
    original: c9,
    thumbnail: c9,
  },
  {
    original: c10,
    thumbnail: c10,
  },
  {
    original: c11,
    thumbnail: c11,
  },
  {
    original: c12,
    thumbnail: c12,
  },
  {
    original: c13,
    thumbnail: c13,
  },
  {
    original: c17,
    thumbnail: c17,
  },
  {
    original: c18,
    thumbnail: c18,
  },
];
