import React, { useState } from "react";

import useWindowDimensions from "../../useWindowDimension";
import SnakeThing from "./SnakeThing";

export default function DemoPage() {
  const { width } = useWindowDimensions();
  const [snakewidth, setSnakewidth] = useState(10);

  const [x1, setX1] = useState(200);
  const [x2, setX2] = useState(400);
  // const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Name: ${name}, Email: ${email}`);
  };
  return (
    <section className="demo-page ">
      <div className="top">
        <p>THe snake thing has x1=200 and x2=400</p>
        <p>THe first bend happend at 750px</p>

        <p>All other bends happen 1000px afterwards</p>

        <form onSubmit={handleSubmit}>
          <label>
            Snake width:
            <input
              type="text"
              value={snakewidth}
              onChange={(event) => setSnakewidth(event.target.value)}
            />
          </label>
          <label>
            x1:
            <input
              type="text"
              value={x1}
              onChange={(event) => setX1(event.target.value)}
            />
          </label>
          <label>
            x2:
            <input
              type="text"
              value={x2}
              onChange={(event) => setX2(event.target.value)}
            />
          </label>
          {/*<label>*/}
          {/*    Email:*/}
          {/*    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />*/}
          {/*</label>*/}
          {/*<button type="submit">Submit</button>*/}
        </form>
      </div>
      x1 = {x1}
      <SnakeThing parentWidht={width} snakeWidth={snakewidth} x1={x1} x2={x2}>
        <section className={"demo-box left "}>This box is 500px high</section>
        <section className={"demo-box right "}>This box is 500px high</section>
        <section className={"demo-box right "}>This box is 500px high</section>
      </SnakeThing>
    </section>
  );
}
