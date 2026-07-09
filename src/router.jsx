import { createBrowserRouter } from "react-router";
import App from "src/App";
import HomePage from "src/pages/HomePage";
import ServicesPage from "src/pages/ServicesPage";
import PreviousWorkPage from "src/pages/PreviousWorkPage";
import ContactPage from "src/pages/ContactPage";
import ErrorPage from "src/layout/ErrorPage";
import PageLayoutICharts from "src/pages/icharts/PageLayoutICharts";
import HomePanel from "src/pages/icharts/HomePanel";
import Screenshots from "src/pages/icharts/Screenshots";
import CodesamplesPanel from "src/pages/icharts/CodesamplesPanel";
import PageLayoutShapeShop from "src/pages/shapeshop/PageLayoutShapeShop";
import ShapeShopHomePanel from "src/pages/shapeshop/HomePanel";
import ShapeShopScreenshots from "src/pages/shapeshop/Screenshots";
import ShapeShopContactPanel from "src/pages/shapeshop/ContactPanel";
import ShapeShopManualPanel from "src/pages/shapeshop/ManualPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePanel /> },
      { path: "screenshots", element: <Screenshots /> },
      { path: "codesamples", element: <CodesamplesPanel /> },
    ],
  },
  {
    path: "/shapeshop",
    element: <PageLayoutShapeShop />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ShapeShopHomePanel /> },
      { path: "screenshots", element: <ShapeShopScreenshots /> },
      { path: "manual", element: <ShapeShopManualPanel /> },
      { path: "contact", element: <ShapeShopContactPanel /> },
    ],
  },
]);
