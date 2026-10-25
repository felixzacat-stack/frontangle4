import { createBrowserRouter, Navigate } from "react-router";
import ErrorPage from "src/layout/ErrorPage";
import Layout from "src/redesign/Layout";
import HomePage from "src/pages/HomePage";
import Work from "src/redesign/pages/Work";
import Services from "src/redesign/pages/Services";
import Contact from "src/redesign/pages/Contact";

// The icharts and shapeshop sub-sites are loaded on demand, so their global SCSS
// (old nav/footer/body styles) doesn't leak into the redesign until you visit them.
const lazyPage = (load) => async () => ({ Component: (await load()).default });

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // The landing page keeps the old design; the rest is the redesign.
      { index: true, element: <HomePage /> },
      { path: "work", element: <Work /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      // Old URLs
      { path: "main", element: <Navigate to="/" replace /> },
      { path: "previous", element: <Navigate to="/work" replace /> },
    ],
  },
  {
    path: "/icharts",
    lazy: lazyPage(() => import("src/pages/icharts/PageLayoutICharts")),
    errorElement: <ErrorPage />,
    children: [
      { index: true, lazy: lazyPage(() => import("src/pages/icharts/HomePanel")) },
      { path: "screenshots", lazy: lazyPage(() => import("src/pages/icharts/Screenshots")) },
      { path: "codesamples", lazy: lazyPage(() => import("src/pages/icharts/CodesamplesPanel")) },
    ],
  },
  {
    path: "/shapeshop",
    lazy: lazyPage(() => import("src/pages/shapeshop/PageLayoutShapeShop")),
    errorElement: <ErrorPage />,
    children: [
      { index: true, lazy: lazyPage(() => import("src/pages/shapeshop/HomePanel")) },
      { path: "screenshots", lazy: lazyPage(() => import("src/pages/shapeshop/Screenshots")) },
      { path: "examples", lazy: lazyPage(() => import("src/pages/shapeshop/ExamplesPanel")) },
      { path: "model", lazy: lazyPage(() => import("src/pages/shapeshop/Model")) },
      { path: "manual", lazy: lazyPage(() => import("src/pages/shapeshop/ManualPanel")) },
      { path: "contact", lazy: lazyPage(() => import("src/pages/shapeshop/ContactPanel")) },
    ],
  },
]);
