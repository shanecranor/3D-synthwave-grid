"use client";
import "./LanguagesAndProjects.scss";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
} from "@/data/projects";
import React from "react";
import Project from "@/components/Project/Project";
import { languages } from "@/data/languages";
// import Router, { useRouter } from "next/router";
export default function LanguagesAndProjects() {
  // const { query } = useRouter();
  const [selected, setSelected] = [
    "All", //query.category
    (category: string) => console.log("woo"),
    // Router.push({ query: { ...query, category: category } }, undefined, {
    //   shallow: true,
    // }),
  ];
  const selectedProjects = getProjectsByTag(selected);
  return (
    <section className="all-projects">
      <section className="language-section">
        {/* <h1>Programming Languages & Libraries</h1> */}
        <div className="category-buttons">
          {/* {categories.map((c) => (
            <button
              key={c}
              className={selected === c ? "selected" : "not-selected"}
              onClick={() => setSelected(c)}
            >
              {c}
            </button>
          ))} */}
        </div>
        <div className="category-container">
          {/* <div className='category-name'> {c}: </div> */}
          {languages.map((langObj) => (
            <span key={langObj.language} className="language">
              <img src={langObj.img} alt="" />
              {langObj.language}
            </span>
          ))}
        </div>
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
