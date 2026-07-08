import React from "react";

import githubImage from "./img/download_github.jpg";
import MavenSnippet from "./MavenSnippet";

export default function RightPanel() {
  return (
    <section className="icharts-sidebar">
      <a href="https://github.com/oliverwatkins/Iceberg-Charts">
        <img className="icharts-sidebar__github" src={githubImage} alt="View Iceberg Charts on GitHub" />
      </a>
      <p>Add it to your maven project :</p>
      <MavenSnippet/>
      <p>And quickly get started with these code samples.</p>
    </section>
  );
}
