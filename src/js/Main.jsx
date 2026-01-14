import React, {useEffect} from "react";

import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './global.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import {Routes} from "react-router";

function Main() {

    //TODO translation only works if this hook is initialised here..but why?
    // const { t, i18n } = useTranslation();

    useEffect(() => {
    })
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayoutMain />} />
                {/* The /* allows nested routes inside PageLayoutMain to work */}
                <Route path="/main/*" element={<PageLayoutMain />} />
                {/* The /* allows nested routes inside PageLayoutICharts to work */}
                <Route path="/icharts/*" element={<PageLayoutICharts />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        // </BrowserRouter>
    );
}

export default Main