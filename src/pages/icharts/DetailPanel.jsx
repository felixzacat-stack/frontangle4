import React from "react";

const images = import.meta.glob("./samples/*.PNG", { eager: true, import: "default" });
const htmlSnippets = import.meta.glob("./samples/*.html", { eager: true, import: "default" });

export default function DetailPanel(props) {
    return (
        <div>
            {props.samples && props.samples.map((elem) => {
                if (!elem.fileName || props.selected !== elem.fileName) {
                    return null;
                }
                const img = images["./samples/" + elem.fileName + ".PNG"];
                const html = htmlSnippets["./samples/" + elem.fileName + ".html"];
                return <div id="mainView" key={elem.fileName}>
                    {img && <img src={img} style={{
                        maxWidth: "400px",
                        width: "100%",
                        height: "auto",
                    }} alt={"chart image " + elem.fileName}/>}
                    {html && <div dangerouslySetInnerHTML={{__html: html}}/>}
                </div>
            })}
        </div>
    )
}


