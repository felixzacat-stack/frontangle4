import React from "react";

export default function DetailPanel(props) {
    return (
        <div>
            {props.samples && props.samples.map((elem) => {
                let img, h2;
                try {
                    img = require("./samples/" + elem.fileName + ".PNG")
                    h2 = require("./samples/" + elem.fileName + ".html")
                } catch (e) {
                    console.error(e)
                }
                return <div id="mainView">
                    {elem.fileName && (props.selected === elem.fileName) && <img src={img} style={{
                        width: "400px",
                    }} alt={"chart image " + elem.fileName}/>}
                    {h2 && h2.default && (props.selected === elem.fileName) &&
                        <div dangerouslySetInnerHTML={{__html: h2.default}}/>}
                </div>
            })}
        </div>
    )
}


