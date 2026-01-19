import React from "react";

export default function HomePanel(props) {
  return (
      <div>
        <p>

          <div style={{margin: "30px"}}>
            Iceberg Charts is an advanced charting library for creating charts in Java.
            <br/>
            It offers a rich set of charting features including :
            <ul>
              <li> XY Charts</li>
              <li> Pie Charts</li>
              <li> Area Charts</li>
              <li> Bubble Charts</li>
              <li> Candlestick Charts</li>
              <li> Bar Charts</li>
              <li> Stacked Charts</li>
            </ul>

            Check out some screenshots and then try out some of the code samples.
            <p/>

            Add it to your Maven project :

            <pre>
          <span style={{fontSize: 10, fontFamily: "courier new"}}>
            <code>
              &lt;dependency&gt; <br/>
              &nbsp; &lt;groupId&gt;com.frontangle&lt;/groupId&gt; <br/>
              &nbsp; &lt;artifactId&gt;iceberg-charts&lt;/artifactId&gt; <br/>
              &nbsp; &lt;version&gt;1.2.0&lt;/version&gt; <br/>
              &lt;/dependency&gt;
            </code>
          </span>
        </pre>
          </div>
        </p>
      </div>
  )
}
