"use client";
import { Project as ProjectType } from "@/data/projects";
import React, { useState } from "react";
import SpinWheel from "@/public/assets/project-images/spin-wheel.png";
import MinesRocks from "@/public/assets/project-images/mines-rocks.png";
import "./Project.scss";
import { languagesMap } from "@/data/languages";
import { PlaceholderImage } from "../PlaceholderImage/PlaceholderImage";
import { getLanguageIcons } from "./LanguageIcons";
import { ProjectTags } from "../ProjectTags/ProjectTags";
export default function Project({
  data,
  onClick,
}: {
  data: ProjectType;
  onClick: () => void;
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { title, summary, languages } = data;
  const handleMouseMove = (event: React.MouseEvent) => {
    let target = event.target;
    // while (target.className != 'project-container'){
    // 	target = target.parentElement
    // }
    if (!(target instanceof HTMLElement)) return;
    let rect = target.getBoundingClientRect();
    setCoords({
      x:
        (event.clientX - rect.left - target.offsetWidth / 2) /
        target.offsetWidth,
      y:
        (event.clientY - rect.top - target.offsetHeight / 2) /
        target.offsetHeight,
    });
  };
  const style = {
    "--t-x-1": coords.x * -10 + "px",
    "--t-y-1": coords.y * -10 + "px",
    "--t-b": (coords.y * coords.y + coords.x * coords.x) * 10 + "px",
  };
  return (
    <article className="project-container" onClick={onClick}>
      <div className="img-container">
        {data.img ? (
          <img src={data.img} alt="" />
        ) : (
          <PlaceholderImage seed={title} />
        )}
      </div>
      <div className="project-contents">
        <h2
          className="project-title"
          style={style as React.CSSProperties}
          onMouseMove={handleMouseMove}
          data-text={title}
        >
          <div>{title}</div>
          <div className="links">
            {data.links?.map((link) => (
              <a href={link.link} key={link.link}>
                {link.img ? <img src={link.img} /> : link.description}{" "}
              </a>
            )) || ""}
          </div>
        </h2>
        <ProjectTags languages={languages} />
        <section className="project-summary">
          <p>{summary}</p>
        </section>
      </div>
    </article>
  );
}
