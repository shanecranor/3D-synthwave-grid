"use client";
import React, { useState } from "react";
export default function Section({ children, header, startOpen: defaultState }) {
  const [expanded, setExpanded] = useState(defaultState);
  return (
    <section className={"section " + (expanded ? "expanded" : "")}>
      <header onClick={() => setExpanded((old) => !old)}>
        <h1>{header}</h1>
      </header>
      {children}
    </section>
  );
}
