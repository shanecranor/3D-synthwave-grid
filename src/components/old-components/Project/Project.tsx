import { Project as ProjectType } from "@/data/projects";
import { useState } from "react";
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
      <header className="project-title-container">
        <h2
          className="project-title"
          style={style as React.CSSProperties}
          onMouseMove={handleMouseMove}
          data-text={title}
        >
          {title}
        </h2>
      </header>
      <div className="project-contents">
        <section className="project-tags">
          Tags:
          {languages.map((lang) => (
            <span key={`${lang}tag`} className="tag">
              {lang}
            </span>
          ))}
        </section>
        <section className="project-summary">
          <p>{summary}</p>
        </section>
      </div>
    </article>
  );
}
