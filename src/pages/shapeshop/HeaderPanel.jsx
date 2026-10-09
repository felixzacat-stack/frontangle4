import {useState} from "react";
import bannerImage from './img/shapeshop-banner.png';
import faImage from './img/FrontAngle_For_Site.png';

import {Link, useLocation} from "react-router-dom";

import './HeaderPanel.scss';

const MENU_ITEMS = [
    {to: "/shapeshop", label: "Home"},
    {
        to: "/shapeshop/screenshots",
        label: "Screenshots",
        subItems: [
            {to: "/shapeshop/screenshots#shop", label: "Shop"},
            {to: "/shapeshop/screenshots#admin", label: "Admin"},
        ],
    },
    {to: "/shapeshop/examples", label: "Examples"},
    {to: "/shapeshop/model", label: "Model"},
    {to: "/shapeshop/manual", label: "Manual"},
    {to: "/shapeshop/contact", label: "Contact"},
];

export default function HeaderPanel() {
    const location = useLocation();
    // Below the tablet breakpoint the menu items collapse into a hamburger,
    // mirroring the main site's Nav.jsx.
    const [menuOpen, setMenuOpen] = useState(false);

    const activeClass = (to) => location.pathname === to ? "active" : "";
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
                        <li className={"ss-hamburger-item" + (menuOpen ? " active" : "")}>
                            <button
                                type="button"
                                className="ss-hamburger-button"
                                aria-label="Menu"
                                aria-expanded={menuOpen}
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <span/><span/><span/>
                            </button>
                        </li>
                        {MENU_ITEMS.map((item) => (
                            <li key={item.to} className={"ss-menu-item " + activeClass(item.to)}>
                                <Link to={item.to}>
                                    <p variant={"body1"}>{item.label}</p>
                                </Link>
                                {item.subItems && (
                                    <ul className="ss-sub-menu">
                                        {item.subItems.map((sub) => (
                                            <li key={sub.to}>
                                                <Link to={sub.to}>{sub.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        <li className={frontAngleIsActive}>
                            <Link to="/">
                                <img width={"42px"} src={faImage} alt={""}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                {menuOpen && (
                    <ul className="ss-hamburger-menu">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.to} className={activeClass(item.to)}>
                                <Link to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                                {item.subItems && (
                                    <ul className="ss-hamburger-sub-menu">
                                        {item.subItems.map((sub) => (
                                            <li key={sub.to}>
                                                <Link to={sub.to} onClick={() => setMenuOpen(false)}>
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    )
}
