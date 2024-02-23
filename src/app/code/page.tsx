"use client";
import Navbar from "@/components/old-components/Navbar/Navbar";
import BigTitle from "@/components/old-components/BigTitle/BigTitle";
import Section from "@/components/old-components/Section/Section";
import LanguagesAndProjects from "@/components/old-components/LanguagesAndProjects/LanguagesAndProjects";
import Link from "next/link";
import "./page.scss";
import { Featured } from "./Featured";
const Page = () => {
  return (
    <div className="page-container">
      <div className="p-code">
        <Navbar />
        <main>
          <BigTitle text="Code Portfolio" />
          <Featured />
          <Section header="All Projects" startOpen={true}>
            <LanguagesAndProjects />
          </Section>
        </main>
      </div>
    </div>
  );
};
export default Page;
