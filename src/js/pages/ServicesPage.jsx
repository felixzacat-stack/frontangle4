import React from "react";

import "./contactPage.scss"
import {Trans, useTranslation} from 'react-i18next';
import {InView} from "react-intersection-observer";
import "./servicesPage.scss"


export default function ServicesPage() {
    const { t } = useTranslation();
    return (
        <section className="fa-page services paragraph-1">
            <InView>
                {({inView, ref}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="frontend" ref={ref}>
                            <ServicesWeb ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
            <InView>
                {({inView, ref}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="systems" ref={ref}>
                            <ServicesSystems ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
            <InView>
                {({inView, ref}) => {
                    return (
                        <div className={"services-section " + (inView ? "show" : "hidden")} id="coaching" ref={ref}>
                            <ServicesCoaching ref={ref} inView={inView}/>
                        </div>
                    )
                }}
            </InView>
        </section>
    );
}


function ServicesWeb() {

    return <>
        <h2 style={{marginTop: "0px"}}>
            <Trans i18nKey="services-web-header"/>
        </h2>
        <div>
            <Trans i18nKey="services-web"/>
            <div className={"image"} id={"web-image"} />
            <ul>
                <li>
                    <Trans i18nKey="services-web-1"/>

                    <ul>
                        <li>
                            <Trans i18nKey="services-web-1-1"/>
                        </li>
                        <li>
                            <Trans i18nKey="services-web-1-2"/>
                        </li>
                        <li>
                            <Trans i18nKey="services-web-1-3"/>
                        </li>
                    </ul>
                </li>
                <li>
                    <Trans i18nKey="services-web-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-web-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-web-4"/>
                </li>
            </ul>
        </div>
    </>
}

function ServicesSystems() {
    return <>
        <div>
            <h2>
                <Trans i18nKey="services-systems-header"/>
            </h2>
            <Trans i18nKey="services-systems"/>
            <div className={"image"} id={"uml-image"}/>
            <ul>
                <li>
                    <Trans i18nKey="services-systems-1"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-systems-4"/>
                </li>
            </ul>
        </div>
    </>;
}

function ServicesCoaching() {
    return <>
        <div>
            <h2>
                <Trans i18nKey="services-coaching-header"/>
            </h2>

            {/*<Trans i18nKey="services-coaching"/>*/}
            <div className={"image"} id={"coaching-image"}/>
            <ul>
                <li>
                    <Trans i18nKey="services-coaching-1"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-2"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-3"/>
                </li>
                <li>
                    <Trans i18nKey="services-coaching-4"/>
                </li>
            </ul>
        </div>
    </>;
}