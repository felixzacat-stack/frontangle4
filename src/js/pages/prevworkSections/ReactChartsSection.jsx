import React from "react";

import "../page.scss"
import bw from "../../../img/react-charts-1167-846.jpg";
// import ImageGallery from "react-image-gallery";
import {Trans} from "react-i18next";

export default function ReactChartsSection() {
    return (<>
                <div className={"previous-work-description  paragraph-2"}>
                    <p>
                        <Trans i18nKey="previous-rc"/>
                    </p>
                </div>
                <img id={"react-charts-img"} className={"boxy"} src={bw} alt={"screen shot of react charts"}/>
            </>);
}