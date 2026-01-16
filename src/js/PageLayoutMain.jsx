import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import {useTranslation} from "react-i18next";
import Nav from "src/js/layout/Nav";


export default function PageLayoutMain() {
    const { i18n } = useTranslation();
    return (
        <div className="page-layout">
            <Header />
            <Nav />
            <main>
                {/* This is where HomePage, ServicesPage, etc. will render */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}