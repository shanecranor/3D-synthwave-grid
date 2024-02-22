"use client";
import "./LanguagesAndProjects.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getProjectsByLanguage,
  getProjectsByTag,
  projects,
  tags,
} from "@/data/projects";
import React, {
  Suspense,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Project from "@/components/Project/Project";
import Link from "next/link";
import { ProjectTags } from "@/components/ProjectTags/ProjectTags";
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
        <Suspense fallback={<Unfiltered />}>
          <Projects />
        </Suspense>
      </section>
    </>
  );
}
const Unfiltered = () => {
  return (
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
          {projects.map((project) => (
            <Project key={project.title} data={project} onClick={() => {}} />
          ))}
        </section>
      </div>
    </>
  );
};

const Projects = () => {
  const modalRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const categories = tags;

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
  const projectParam = searchParams.get("project");
  const project = projects.find((p) => p.title === projectParam);
  useEffect(() => {
    if (project) {
      if (!document) return;
      const modal = document.getElementById("modal");
      if (modal === null) return;
      if (!(modal instanceof HTMLDialogElement)) return;
      modal.showModal();
      console.log("showing modal");
    }
  });
  return (
    <>
      <dialog
        id="modal"
        ref={modalRef}
        onMouseDown={(event) =>
          event.target === modalRef.current &&
          (modalRef.current as HTMLDialogElement).close()
        }
        onClose={() =>
          router.replace(pathname, {
            scroll: false,
          })
        }
      >
        <div className="modal-inner">
          <h1>{project?.title}</h1>
          <p>Created for {project?.eventName}</p>
          <div className="project-img">
            <img src={project?.img} alt="" />
          </div>
          <ProjectTags languages={project?.languages || []} />
          <p>{project?.description || project?.summary}</p>
          <div className="links">
            {project?.links?.map((link) => (
              <Link href={link.link} key={link.link}>
                {link.description} <img src={link.img} />
              </Link>
            ))}
          </div>
        </div>
      </dialog>
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
    </>
  );
};
