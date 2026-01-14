import React from "react";

import Footer from "./layout/Footer";

import { Route, Routes } from 'react-router-dom'; // Changed Switch to Routes

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import Header from "./layout/Header";

import DemoPage from "./pages/snakething/DemoPage";
import ResumePage from "./pages/resume/ResumePage";
import Nav from "./layout/Nav";
import ServicesPage from "./pages/ServicesPage";
import {useTranslation} from "react-i18next";

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default function PageLayout() {

    const { i18n } = useTranslation();

    // props.

    return (
        <div>
            <Header/>
            <Nav i18n={i18n}/>
            <Routes>
                <Route path="/public/OW.html" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/main" element={<HomePage />} />
                <Route path="/main/previous" element={<PreviousWorkPage />} />
                <Route path="/main/contact" element={<ContactPage />} />
                <Route path="/main/snakething" element={<DemoPage />} />
                <Route path="/main/services" element={<ServicesPage />} />
                <Route path="/main/resume" element={<ResumePage />} />
            </Routes>
            <Footer/>
        </div>
    );
}