import React from "react";

import githubImage from './img/download_github.jpg';
import {Box, Typography} from "@mui/material";

export default function RightPanel() {
    const styleGithubButton = {
        margin: 15
    }

    const styleSection = {
        margin: '0.5em',
        float: 'right',
        height: '1000',
        width: '300px',
        background: '#ebebeb'
    }

    return (
        <section className="container " style={styleSection}>
            <Box p={2}>
                <a href="https://github.com/oliverwatkins/Iceberg-Charts">
                    <img style={styleGithubButton} src={githubImage} alt={""}/>
                </a>
                <Typography variant={"body1"}>
                    Add it to your maven project :
                </Typography>
                <Box>
                    <pre>
                      {/*<span style={{fontSize: 10, fontFamily: "courier new"}}>*/}
                        <code>
                          &lt;dependency&gt; <br/>
                            &nbsp; &lt;groupId&gt;com.frontangle&lt;/groupId&gt; <br/>
                            &nbsp; &lt;artifactId&gt;iceberg-charts&lt;/artifactId&gt; <br/>
                            &nbsp; &lt;version&gt;1.2.0&lt;/version&gt; <br/>
                            &lt;/dependency&gt;
                        </code>
                        {/*</span>*/}
                    </pre>
                </Box>
                <Typography variant={"body1"}>
                    And quickly get started with these code samples.
                </Typography>
            </Box>
        </section>
    )
}