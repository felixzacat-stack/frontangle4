import { Outlet } from "react-router-dom";
import Header from "src/layout/Header";
import Footer from "src/layout/Footer";
import Nav from "src/layout/Nav";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <Header />
      <Nav />

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
