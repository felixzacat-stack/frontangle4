import React, { useEffect } from "react";

import "./CodesamplesPanel.scss";

import samplesFile from "./samples/samples.json";
import DetailPanel from "./DetailPanel";

export default function CodesamplesPanel() {
  const [navHeader, setNavHeader] = React.useState();

  const [fileName, setFileName] = React.useState("TestDataXY_Boxplot_HTML");

  useEffect(() => {
    setNavHeader(samplesFile.samples);
  }, []);

  return (
    <div>
      <p variant={"body1"}>
        <h1>Code Samples</h1>
        <h4>Quickly get started with these samples</h4>
        <div id="tabs">
          <div>
            <ul>
              {navHeader &&
                navHeader.map(function (name, index) {
                  if (name.fileName === fileName) {
                    return (
                      <li key={index} className="active">
                        {name.title}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        onClick={() => setFileName(name.fileName)}
                      >
                        {name.title}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </p>
      <div
        id="mainView"
        style={{
          marginTop: 30,
        }}
      >
        <DetailPanel samples={navHeader} selected={fileName} />
      </div>
    </div>
  );
}
