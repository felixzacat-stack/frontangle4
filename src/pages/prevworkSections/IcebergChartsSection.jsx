import "src/pages/page.scss";

import c1 from "src/pages/icharts/samples/TestDataArea_2_Multiple_Layered.PNG";
import c2 from "src/pages/icharts/samples/TestDataArea_4_Multiple_Stacked.PNG";
import c4 from "src/pages/icharts/samples/TestDataXY_Simple.PNG";
import c5 from "src/pages/icharts/samples/TestDataXY_Simple_Series.PNG";
import c6 from "src/pages/icharts/samples/TestDataBar_1_Simple.PNG";
import c7 from "src/pages/icharts/samples/TestDataBar_2Y.PNG";
import c8 from "src/pages/icharts/samples/TestDataBar_4_GradientColor.PNG";
import c9 from "src/pages/icharts/samples/TestDataBar_5_PosNegColor.PNG";
import c10 from "src/pages/icharts/samples/TestDataBar_FontFun.PNG";
import c11 from "src/pages/icharts/samples/TestDataBar_MultiBar_SideBySide.PNG";
import c12 from "src/pages/icharts/samples/TestDataBar_MultiBar_Stacked.PNG";
import c13 from "src/pages/icharts/samples/TestDataBubble_1_guns.PNG";
import c17 from "src/pages/icharts/samples/TestDataGrids_4_alternateGridFillY.PNG";
import c18 from "src/pages/icharts/samples/TestDataGrids_5_Gradiant.PNG";

import { Trans } from "react-i18next";
import FadeCarousel from "src/pages/prevworkSections/FadeCarousel";

export default function IcebergChartsSection() {
  return (
    <>
      <div className={"previous-work-description paragraph-2"}>
        <h2>
          <Trans i18nKey="previous-ic-header" />
        </h2>
        <p>
          <Trans i18nKey="previous-ic" />
        </p>
        <ul>
          <li>XY Charts</li>
          <li>Pie Charts</li>
          <li>Area Charts</li>
          <li>Bubble Charts</li>
          <li>Candlestick Charts</li>
          <li>Bar Charts</li>
          <li>Stacked Charts</li>
        </ul>
        <div className={"prev-links"}>
          <a href={"/icharts/"}>Visit the website here</a>
        </div>
      </div>
      <div className={"prev-media"}>
        <FadeCarousel
          images={someInterestingImages}
          delay={1000}
          alt={"sample charts made with Iceberg Charts"}
        />
      </div>
    </>
  );
}

const someInterestingImages = [
  c1, c2, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c17, c18,
];
