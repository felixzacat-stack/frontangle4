import "./page.scss";
import "./previousWorkPage.scss";

import ShapeShopSection from "./prevworkSections/ShapeShopSection";
import { Trans, useTranslation } from "react-i18next";
import IcebergChartsSection from "./prevworkSections/IcebergChartsSection";
import ReactChartsSection from "./prevworkSections/ReactChartsSection";
import BlogSection from "./prevworkSections/BlogSection";
import { InView } from "react-intersection-observer";
// SnakeThing background disabled - uncomment to re-enable (see wrapper below)
// import SnakeThing from "./snakething/SnakeThing";
import useWindowDimensions from "../useWindowDimension";
import ArtGallerySection from "./prevworkSections/ArtGallerySection";

export default function PreviousWorkPage() {
  const { width } = useWindowDimensions();
  const { i18n } = useTranslation();
  return (
    <section className="fa-page previous-work ">
      <section className="previous-work-top paragraph-1">
        <Trans i18nKey="previous-blurb" />
      </section>
      {/* SnakeThing background disabled - swap this <> for
          <SnakeThing parentWidht={width} snakeWidth={12} x1={200} x2={400}> to re-enable */}
      <>
        <InView>
          {({ inView, ref }) => {
            return (
              <section
                ref={ref}
                id="shapeshop"
                className={"prev-section left " + (inView ? "show" : "hidden")}
              >
                <ShapeShopSection align={"left"} />
              </section>
            );
          }}
        </InView>
        <InView>
          {({ inView, ref }) => {
            //TODO get intersection ratio to work
            // let showMe = false;
            //
            // if (entry && (entry.intersectionRatio > 0.5))
            //     showMe = true;

            return (
              <section
                ref={ref}
                id="icebergcharts"
                className={"prev-section right " + (inView ? "show" : "hidden")}
              >
                <IcebergChartsSection align={"right"} />
              </section>
            );
          }}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <section
              ref={ref}
              id="artgallery"
              className={"prev-section " + (inView ? "show" : "hidden")}
            >
              <ArtGallerySection />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <section
              ref={ref}
              className={"prev-section right " + (inView ? "show" : "hidden")}
            >
              <ReactChartsSection />
            </section>
          )}
        </InView>

        <InView>
          {({ inView, ref }) => (
            <section
              ref={ref}
              className={"prev-section " + (inView ? "show" : "hidden")}
            >
              <BlogSection align={"right"} />
            </section>
          )}
        </InView>
      </>
    </section>
  );
}
