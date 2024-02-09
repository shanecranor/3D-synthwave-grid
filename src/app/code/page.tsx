import Navbar from "@/components/old-components/Navbar/Navbar";
import BigTitle from "@/components/old-components/BigTitle/BigTitle";
import Section from "@/components/old-components/Section/Section";
import FeaturedProject from "@/components/old-components/FeaturedProject/FeaturedProject";
import LanguagesAndProjects from "@/components/old-components/LanguagesAndProjects/LanguagesAndProjects";
import Link from "next/link";
import "./page.scss";
const Page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <BigTitle text="Code Portfolio" />
        {/* <About/> */}
        <Section header="Featured Projects" startOpen={true}>
          {/* <Link legacyBehavior href="./posts/spotify"> */}
          <a style={{ all: "unset" }}>
            <FeaturedProject
              title="Truffle Spotify App"
              description="Overlay that displays cached Spotify data from a Cloudlare worker"
            />
          </a>
          {/* </Link> */}
          {/* <Link legacyBehavior href="./posts/synth"> */}
          <a style={{ all: "unset" }}>
            <FeaturedProject
              title="Math Synth Experiment"
              description="Create a wall of sound by writing equations"
            />
          </a>
          {/* </Link> */}
          <FeaturedProject
            title="Bubblz.Space"
            description="A peer to peer video communication web app with a twist"
          />
        </Section>
        <Section header="All Projects" startOpen={true}>
          <LanguagesAndProjects />
        </Section>
      </main>
    </div>
  );
};
export default Page;
