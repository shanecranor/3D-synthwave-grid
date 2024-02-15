"use client";
import "./LanguagesAndProjects.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
  tags,
} from "@/data/projects";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import Project from "@/components/Project/Project";
import Link from "next/link";
// import Router, { useRouter } from "next/router";
export default function LanguagesAndProjects() {
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
        <Suspense
          fallback={
            <>
              <div className="language-section">
                <div className="category-buttons">
                  {tags.map((c) => (
                    <button key={c} className={"not-selected"}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <section className="selected-projects">
                  {projects.map((project, index) => (
                    <Project
                      key={project.title}
                      data={project}
                      onClick={() => {}}
                    />
                  ))}
                </section>
              </div>
            </>
          }
        >
          <CategorySelection />
          <Projects />
        </Suspense>
      </section>
    </>
  );
}

const CategorySelection = () => {
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
  const selected = searchParams.get("category") || "All";
  const categories = tags;
  return (
    <div className="language-section">
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
    </div>
  );
};

const Projects = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const selected = categoryParam || "All";
  const projectsFiltered = projects.filter((project) => {
    if (selected === "All") return true;
    return project.tags.includes(selected);
  });
  return (
    <div>
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
    </div>
  );
};
