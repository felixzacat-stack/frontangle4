import { Outlet } from "react-router-dom";
import Header from "src/js/layout/Header";
import Footer from "src/js/layout/Footer";
import Nav from "src/js/layout/Nav";


export default function App() {
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