import React from "react";
// import OW from "./OW"
// import * as ReactDOMServer from "react-dom/server";
// import {Link} from "react-router-dom";

// const exportedHTML = ReactDOMServer.renderToStaticMarkup(<OW />);


export default function ResumePage() {

    // let x = URL.createObjectURL(exportedHTML);
    return (
        <section className="resume-page ">
            <div>
                <button onClick={() => {
                    window.location.href = "/OW.html";
                }}>Redirect to Static HTML File</button>
            </div>
        </section>
    );
}