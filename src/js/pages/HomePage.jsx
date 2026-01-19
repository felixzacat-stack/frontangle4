import React from "react";

import './page.scss';
import './homePage.scss';
import {Trans, useTranslation} from "react-i18next";

export default function HomePage() {
    const { t } = useTranslation();
    return (
        <section className="fa-page fa-page-home">
            <div className="home-page-info paragraph-1">
                <div className="home-page-image"/>
                <Trans i18nKey="home-blurb"/>
            </div>
        </section>
    );
}
