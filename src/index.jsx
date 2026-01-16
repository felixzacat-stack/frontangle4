import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';..
import reportWebVitals from './reportWebVitals';
import Main from "./js/Main";
import './i18n';
import {createRoot} from "react-dom/client";
import {BrowserRouter, createBrowserRouter, HashRouter, RouterProvider} from "react-router";
import App from "src/js/layout/App";
import HomePage from "src/js/pages/HomePage";
import ServicesPage from "src/js/pages/ServicesPage";
import PreviousWorkPage from "src/js/pages/PreviousWorkPage";
import ContactPage from "src/js/pages/ContactPage";
import ErrorPage from "src/js/layout/ErrorPage";

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
    {
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
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/*<BrowserRouter>*/}
        {/*<Main />*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Main />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
