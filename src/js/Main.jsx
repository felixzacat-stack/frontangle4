import React, {useEffect} from "react";

import PageLayoutMain from "./PageLayoutMain"
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './global.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import {createBrowserRouter, Routes} from "react-router";
import HomePage from "src/js/pages/HomePage";
import ServicesPage from "src/js/pages/ServicesPage";
import PreviousWorkPage from "src/js/pages/PreviousWorkPage";
import App from "src/js/layout/App";
import ContactPage from "src/js/pages/ContactPage";
import ErrorBoundary from "src/js/layout/ErrorBoundary";


// const router = createBrowserRouter([
//     {
//         element: <App />,
//         children: [
//             { path: "/", element: <HomePage /> },
//             { path: "/main", element: <HomePage /> },
//             { path: "/services", element: <ServicesPage /> },
//             { path: "/previous", element: <PreviousWorkPage /> },
//             { path: "/contact", element: <ContactPage /> },
//         ],
//     },
// ]);

function Main() {
    // return (
    //     <Routes>
    //         <Route element={<PageLayoutMain />}>
    //             <Route path="/" element={<HomePage />} />
    //             <Route path="/main" element={<HomePage />} />
    //             <Route path="/services" element={<ServicesPage />} />
    //             <Route path="/previous-work" element={<ErrorBoundary>
    //                 <PreviousWorkPage />
    //             </ErrorBoundary>} />
    //             <Route path="/contact" element={<ContactPage />} />
    //         </Route>
    //         {/* ... other top level routes ... */}
    //         <Route path="*" element={<div>Not found</div>} />
    //     </Routes>
    // );
}

export default Main