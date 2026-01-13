import React from "react";
import icebergImage from './img/icbergcharts2.PNG';
import headerImage from './img/icharts-banner.PNG';

import faImage from './img/FrontAngle_For_Site.png';

import {Link, useLocation} from "react-router-dom";

import './HeaderPanel.scss';
import {Typography} from "@mui/material";

export default function HeaderPanel() {
    const [collapsed, setCollapsed] = React.useState(true);

    let location = useLocation();
    let toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const homeClassisActive = location.pathname === "/icharts" ? "active" : "";
    const screenshotsIsActive = location.pathname === "/icharts/screenshots" ? "active" : "";
    const codesamplesIsActive = location.pathname === "/icharts/codesamples" ? "active" : "";
    const frontAngleIsActive = location.pathname === "/" ? "active" : "";

    return (
        <div id="header">
            <div id="header-container">
                <img id="header-title-icharts" src={headerImage} alt={"header-title-icharts"}/>
                <img src={icebergImage} alt={"icharts"}/>
            </div>
            <div id="header-blurb">
                Free Java Charting Library and Framework, for use in Java2D, Swing or JavaFX applications.
            </div>
            <hr/>

            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <ul className="nav navbar-nav mr-auto">
                        <li className={homeClassisActive}>
                            <Link to="/icharts" onClick={toggleCollapse.bind(this)}>
                                <Typography variant={"body1"}>Home</Typography>
                            </Link>
                        </li>
                        <li className={screenshotsIsActive}>
                            <Link to="/icharts/screenshots" onClick={toggleCollapse.bind(this)}>
                                <Typography variant={"body1"}>Screenshots</Typography>
                            </Link>
                        </li>
                        <li className={codesamplesIsActive + " mr-auto"}>
                            <Link to="/icharts/codesamples" onClick={toggleCollapse.bind(this)}>
                                <Typography variant={"body1"}>Code Samples</Typography>
                            </Link>
                        </li>

                        {/*TODO ali8gn to the right*/}
                        <li className={frontAngleIsActive}>
                            <Link to="/" onClick={toggleCollapse.bind(this)}>
                                <img width={"30px"} src={faImage} alt={""}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
