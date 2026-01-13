import React from "react";

import HeaderPanel from "./HeaderPanel";
import RightPanel from "./RightPanel";
import {Switch, Route} from "react-router-dom";
import HomePanel from "./HomePanel";
import Screenshots from "./Screenshots";
import CodesamplesPanel from './CodesamplesPanel';
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
                        <Switch>
                            <Route exact path="/icharts">
                                <HomePanel/>
                            </Route>
                            <Route path="/icharts/screenshots">
                                <Screenshots/>
                            </Route>
                            <Route path="/icharts/codesamples">
                                <CodesamplesPanel/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}
