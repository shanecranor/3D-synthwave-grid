"use client";
import "./LanguagesAndProjects.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
} from "@/data/projects";
import React, { useState } from "react";
import Project from "@/components/Project/Project";
// import Router, { useRouter } from "next/router";
export default function LanguagesAndProjects() {
  const [selectedProjects, setSelectedProjects] = useState(projects);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const languages = Array.from(
    new Set(projects.map((project) => project.languages).flat())
  );
  const categories = Array.from(
    new Set(projects.map((project) => project.tags).flat())
  );
  return (
    <section className="all-projects">
      <section className="language-section">
        {/* <h1>Programming Languages & Libraries</h1> */}
        <div className="category-buttons">
          {categories.map((c) => (
            <button
              key={c}
              // className={selected === c ? "selected" : "not-selected"}
              className="not-selected"
              // onClick={() => setSelected(c)}
            >
              {c}
            </button>
          ))}
        </div>
        {/* <div className="category-container">
          {languages.map((langObj) => (
            <span key={langObj.language} className="language">
              <img src={langObj.img} alt="" />
              {langObj.language}
            </span>
          ))}
        </div> */}
      </section>
      <section className="selected-projects">
        {selectedProjects.map((project, index) => (
          <Project
            key={project.title}
            data={project}
            onClick={() =>
              // Router.push({ query: { ...query, project: index } }, undefined, {
              //   shallow: true,
              // })
              console.log("woo")
            }
          />
        ))}
      </section>
    </section>
  );
}
