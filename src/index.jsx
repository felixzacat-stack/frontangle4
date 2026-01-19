import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "src/js/layout/App";
import HomePage from "src/js/pages/HomePage";
import ServicesPage from "src/js/pages/ServicesPage";
import PreviousWorkPage from "src/js/pages/PreviousWorkPage";
import ContactPage from "src/js/pages/ContactPage";
import ErrorPage from "src/js/layout/ErrorPage";
import PageLayoutICharts from "src/js/pages/icharts/PageLayoutICharts";
import HomePanel from "src/js/pages/icharts/HomePanel";
import Screenshots from "src/js/pages/icharts/Screenshots";
import CodesamplesPanel from "src/js/pages/icharts/CodesamplesPanel";

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/main", element: <HomePage /> },
            { path: "/services", element: <ServicesPage /> },
            { path: "/previous", element: <PreviousWorkPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
    {
        path: "/icharts",
        element: <PageLayoutICharts />,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <HomePanel /> },
            { path: "screenshots", element: <Screenshots /> },
            { path: "codesamples", element: <CodesamplesPanel /> },
        ]
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/*<BrowserRouter>*/}
        {/*<Main />*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
