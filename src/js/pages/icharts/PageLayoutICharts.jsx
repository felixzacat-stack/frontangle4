import React from "react";

import HeaderPanel from "./HeaderPanel";
import RightPanel from "./RightPanel";
import { Route} from "react-router-dom";
import HomePanel from "./HomePanel";
import Screenshots from "./Screenshots";
import CodesamplesPanel from './CodesamplesPanel';
import "./index.scss"
import {Routes} from "react-router";
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
                        <Routes>
                            <Route path="/icharts" element={<HomePanel />} />
                            <Route path="/icharts/screenshots" element={<Screenshots />} />
                            <Route path="/icharts/codesamples" element={<CodesamplesPanel />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
