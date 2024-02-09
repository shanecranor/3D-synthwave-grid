"use client";
import "./BigTitle.scss";
import { useState } from "react";
import React, { CSSProperties } from "react";
export default function BigTitle({ text }: { text: string }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetTop,
      y: event.clientY - event.target.offsetTop,
    });
  };
  const style = {
    "--title-origin-x": coords.x + "px",
    "--title-origin-y": coords.y + "px",
    "--title-rot-x": coords.y + "deg",
  };
  //console.log(style)
  return (
    <header className="big-title-container" style={style}>
      <div onMouseMove={handleMouseMove} className="big-title" data-text={text}>
        {" "}
        {text}
      </div>
    </header>
  );
}
