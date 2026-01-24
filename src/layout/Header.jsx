import React from "react";

import "./header.scss";

import linkedInLogo from "../img/FrontAngle_For_Site.png";

export default function Header() {
  return (
    <header className="Header">
      <img src={linkedInLogo} alt={"Front Angle Logo"} />
      {/*<div id="header-image"/>*/}
    </header>
  );
}
