"use client";
import "./LanguagesAndProjects.scss";
import { categories, getLangsByCategory } from "@/data/languages";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
} from "@/data/projects";
import React from "react";
import Project from "@/components/old-components/Project/Project";
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
          {categories.map((c) => (
            <button
              key={c}
              className={selected === c ? "selected" : "not-selected"}
              onClick={() => setSelected(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="category-container">
          {/* <div className='category-name'> {c}: </div> */}
          {getLangsByCategory(selected).map((langObj) => (
            <span key={langObj.language} className="language">
              <img src={langObj.img} />
              {langObj.language}
            </span>
          ))}
        </div>
      </section>
      <section className="selected-projects">
        {selectedProjects.map((props, index) => (
          <Project
            key={props.title}
            data={props}
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
