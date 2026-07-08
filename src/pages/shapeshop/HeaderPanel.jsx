import bannerImage from './img/shapeshop-banner.png';
import faImage from './img/FrontAngle_For_Site.png';

import {Link, useLocation} from "react-router-dom";

import './HeaderPanel.scss';

export default function HeaderPanel() {
    const location = useLocation();

    const homeIsActive = location.pathname === "/shapeshop" ? "active" : "";
    const screenshotsIsActive = location.pathname === "/shapeshop/screenshots" ? "active" : "";
    const contactIsActive = location.pathname === "/shapeshop/contact" ? "active" : "";
    const frontAngleIsActive = location.pathname === "/" ? "active" : "";

    return (
        <div id="header">
            <div id="header-container">
                <img id="header-title-shapeshop" src={bannerImage} alt={"Shape Shop"}/>
            </div>
            <div id="header-blurb">
                An e-commerce platform for small and medium sized companies to administer their product catalog.
            </div>
            <hr/>

            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container-fluid">
                    <ul className="nav navbar-nav mr-auto">
                        <li className={homeIsActive}>
                            <Link to="/shapeshop">
                                <p variant={"body1"}>Home</p>
                            </Link>
                        </li>
                        <li className={screenshotsIsActive}>
                            <Link to="/shapeshop/screenshots">
                                <p variant={"body1"}>Screenshots</p>
                            </Link>
                        </li>
                        <li className={contactIsActive + " mr-auto"}>
                            <Link to="/shapeshop/contact">
                                <p variant={"body1"}>Contact</p>
                            </Link>
                        </li>

                        <li className={frontAngleIsActive}>
                            <Link to="/">
                                <img width={"42px"} src={faImage} alt={""}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
