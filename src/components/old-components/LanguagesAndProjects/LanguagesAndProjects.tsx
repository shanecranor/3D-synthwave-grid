"use client";
import "./LanguagesAndProjects.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
  tags,
} from "@/data/projects";
import React, { useCallback, useEffect, useState } from "react";
import Project from "@/components/Project/Project";
import Link from "next/link";
// import Router, { useRouter } from "next/router";
export default function LanguagesAndProjects() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const params = searchParams.get("category");
  useEffect(() => {
    if (params) {
      const element = document.getElementById("scroll-here");
      element &&
        element.scrollIntoView({ behavior: "instant", block: "nearest" });
    }
  });
  const selected = params || "All";
  const projectsFiltered = projects.filter((project) => {
    if (selected === "All") return true;
    return project.tags.includes(selected);
  });
  console.log(selected);
  const categories = tags;
  return (
    <>
      <section className="all-projects">
        <div
          id="scroll-here"
          style={{
            position: "absolute",
            marginTop: "900px",
          }}
        />
        <section className="language-section">
          {/* <h1>Programming Languages & Libraries</h1> */}
          <div className="category-buttons">
            {categories.map((c) => (
              <button
                key={c}
                className={selected === c ? "selected" : "not-selected"}
                onClick={() =>
                  router.replace(
                    pathname + "?" + createQueryString("category", c),
                    { scroll: false }
                  )
                }
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
          {projectsFiltered.map((project, index) => (
            <Project
              key={project.title}
              data={project}
              onClick={() =>
                router.replace(
                  pathname + "?" + createQueryString("project", project.title),
                  { scroll: false }
                )
              }
            />
          ))}
        </section>
      </section>
    </>
  );
}
