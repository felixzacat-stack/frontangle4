import React from "react";

import './homePage.scss';
import {Trans, useTranslation} from "react-i18next";
import { ButtonLink, CtaBand, usePageTitle } from "src/redesign/common";
import { FeaturedWork, ServicesTeaser } from "src/redesign/pages/Home";

// The original home page text and splatter image, laid out in the redesign's
// container and Studio typography (styles in homePage.scss), followed by the
// redesign's work and services teasers.
export default function HomePage() {
    const { t } = useTranslation();
    usePageTitle(null);
    return (
        <>
            <section className="rd-section fa-page-home">
                <div className="rd-container home-page-inner">
                    <div className="home-page-text">
                        <Trans i18nKey="home-blurb"/>
                        <div className="rd-hero__actions">
                            <ButtonLink to="/work">{t("rd.hero.ctaWork")}</ButtonLink>
                            <ButtonLink to="/contact" variant="secondary">
                                {t("rd.hero.ctaContact")}
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="home-page-image" role="img" aria-label={t("home-image-alt", "Laptop with code on screen")}/>
                </div>
            </section>

            <FeaturedWork />

            <ServicesTeaser grid="rd-grid4" />

            <CtaBand />
        </>
    );
}
