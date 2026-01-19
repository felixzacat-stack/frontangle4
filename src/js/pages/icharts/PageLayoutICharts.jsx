import React from "react";

import HeaderPanel from "./HeaderPanel";
import RightPanel from "./RightPanel";
import { Outlet } from "react-router-dom";
import "./index.scss"
/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayoutICharts(props) {
    const {location} = props;
    const containerStyle = {
        marginTop: "0px"
    };

    return (
        <div className="icharts">
            <HeaderPanel location={location}/>
            <RightPanel location={location}/>
            <div style={containerStyle}>
                <div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}