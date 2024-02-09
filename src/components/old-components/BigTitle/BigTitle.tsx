"use client";
import "./BigTitle.scss";
import { MouseEvent, useState } from "react";
import React, { CSSProperties } from "react";
export default function BigTitle({ text }: { text: string }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return;
    setCoords({
      x: event.target.offsetTop,
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
    <header
      className="big-title-container"
      style={style as React.CSSProperties}
    >
      <div onMouseMove={handleMouseMove} className="big-title" data-text={text}>
        {" "}
        {text}
      </div>
    </header>
  );
}
