import React from "react";

import githubImage from "./img/download_github.jpg";
import MavenSnippet from "./MavenSnippet";

export default function RightPanel() {
  const styleGithubButton = {
    margin: 15,
  };

  const styleSection = {
    margin: "0.5em",
    float: "right",
    height: "1000",
    width: "300px",
    background: "#ebebeb",
  };

  return (
    <section className="container " style={styleSection}>
      <div style={{ padding: 2 }}>
        <a href="https://github.com/oliverwatkins/Iceberg-Charts">
          <img style={styleGithubButton} src={githubImage} alt={""} />
        </a>
        <p>Add it to your maven project :</p>
        <MavenSnippet/>
        <p>And quickly get started with these code samples.</p>
      </div>
    </section>
  );
}
