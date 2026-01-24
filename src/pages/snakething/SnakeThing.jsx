import React from "react";

import "../page.scss";
import "../previousWorkPage.scss";

export default function SnakeThing(
  props = { x1: 200, x2: 400, snakeWidth: 12 },
) {
  let width = 600;
  let height = 4600;
  let viewboxHeight = height / 2;

  let x1 = Number(props.x1);
  let x2 = Number(props.x2);

  let y0 = 0;
  let y1 = 750 / 2;
  let y2 = 1750 / 2;
  let y3 = 2750 / 2;
  let y4 = 3750 / 2;

  //curve constant
  let c = 50;

  // let stroke = props.snakeWidth;
  let stroke = 12;

  // function createCircle(y1, x1, snakeWidth) {
  //
  //     return <circle fill={"white"} cx={x1} cy={y1 + 100} r={snakeWidth/2} stroke="url(#paint0_linear_207_14200)"/>;
  //
  //     // return <path d={`M ${x} ${yFrom + c} V ${yTo - c}`} strokeWidth={`${stroke}`} stroke="url(#paint0_linear_207_14200)"/>;
  // }

  function createPathLeftRight(y, xFrom, xTo) {
    return (
      <path
        d={`M ${xFrom ? xFrom : x2 - c} ${y} H ${xTo ? xTo : x1 + c}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  function createPathTopDowm(yFrom, yTo, x) {
    return (
      <path
        d={`M ${x} ${yFrom + c} V ${yTo - c}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  function downLeft(x, y) {
    return (
      <path
        d={`M ${x} ${y - c} C ${x} ${y} ${x} ${y} ${x - c} ${y}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  function leftDown(x, y) {
    return (
      <path
        d={`M ${x + c} ${y} C ${x} ${y} ${x} ${y} ${x} ${y + c}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  function downRight(x, y) {
    return (
      <path
        d={`M ${x} ${y - c} C ${x} ${y} ${x} ${y} ${x + c} ${y}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  function rightDown(x, y) {
    return (
      <path
        d={`M ${x - c} ${y} C ${x} ${y} ${x} ${y} ${x} ${y + c}`}
        strokeWidth={`${stroke}`}
        stroke="url(#paint0_linear_207_14200)"
      />
    );
  }
  let svgStyle = {
    position: "absolute",
    top: "0px",
    zIndex: 1,
    width: "100%",
    height: height + "px",
  };

  // width={width} height={length}
  // snakeWidth
  return (
    <div className="svg-test" style={{ position: "relative" }}>
      <div>{props.children}</div>

      {/*{(props.parentWidht > 1800) &&*/}
      {props.parentWidht > 1200 && (
        <svg
          style={svgStyle}
          preserveAspectRatio="none "
          viewBox={`0 0 ${width} ${viewboxHeight} `}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {createPathTopDowm(y0 - c, y1, x2)}
          {downLeft(x2, y1)}
          {createPathLeftRight(y1)}
          {leftDown(x1, y1)}
          {createPathTopDowm(y1, y2, x1)}

          {/*{createCircle(y1, x1, stroke)}*/}

          {downRight(x1, y2)}
          {createPathLeftRight(y2)}
          {rightDown(x2, y2)}
          {createPathTopDowm(y2, y3, x2)}
          {downLeft(x2, y3)}
          {createPathLeftRight(y3)}
          {leftDown(x1, y3)}
          {createPathTopDowm(y3, y4, x1)}
          {downRight(x1, y4)}

          {createPathLeftRight(y4, x1 + 50, x2 - 50 - 50)}

          {
            <circle
              cx={x2 - 50}
              cy={y4}
              r="50"
              stroke="url(#paint0_linear_207_14200)"
              fill="url(#paint0_linear_207_14200)"
            />
          }
          <defs>
            <linearGradient
              id="paint0_linear_207_14200"
              x1="8.51253"
              y1="731.998"
              x2="308.147"
              y2="3023.79"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={"red"}
                className="stop1"
                offset="0%"
                stopOpacity={0.1}
              />
              <stop
                stopColor={"yellow"}
                className="stop2"
                offset="30%"
                stopOpacity={0.2}
              />
              <stop
                stopColor={"blue"}
                className="stop3"
                offset="60%"
                stopOpacity={0.2}
              />
              <stop
                stopColor={"orange"}
                className="stop3"
                offset="100%"
                stopOpacity={0.2}
              />

              {/*<stop stopColor={gradientColor1}/>*/}
              {/*<stop offset="1" stopColor={gradientColor2}/>*/}
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}
