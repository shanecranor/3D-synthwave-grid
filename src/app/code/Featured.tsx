import "./Featured.scss";
import syllabuddiesImg from "@/public/assets/project-images/syllabuddies.png";
import minesRocksImg from "@/public/assets/project-images/mines-rocks.png";
import spinWheelImg from "@/public/assets/project-images/spin-wheel.png";
import { getLanguageIcons } from "@/components/Project/LanguageIcons";
import { ProjectTags } from "@/components/ProjectTags/ProjectTags";
import { projects } from "@/data/projects";
export const Featured = () => {
  return (
    // <Section header="Featured Projects" startOpen={true}>
    <div className="featured-container">
      <article>
        <div className="text">
          <h3>Spin the Wheel</h3>
          <p>
            A realtime serverless minigame for use on live streams as a
            Truffle.vip app. Viewers submit text entries that can be aproved or
            rejected by mods in the moderator dashboard.
          </p>
          <ProjectTags
            languages={
              projects.find((proj) => proj.title === "Spin the Wheel")
                ?.languages || []
            }
          />
        </div>
        <img src={spinWheelImg.src} alt="Spin the Wheel" />
      </article>
      <article className="flip">
        <div className="text">
          <h3>mines.rocks</h3>
          <p>
            A platform for data driven course selection. The site shows average
            grades on a per course, and per assignment level, and is designed to
            help students choose classes that match their learning style.
          </p>
          <ProjectTags
            languages={
              projects.find((proj) => proj.title === "mines.rocks")
                ?.languages || []
            }
          />
        </div>
        <img src={minesRocksImg.src} alt="mines.rocks" />
      </article>
      <article>
        <div className="text">
          <h3>Syllabuddies</h3>
          <p>
            Crowd sourced syllabi sharing site for the Colorado School of Mines.
          </p>
          <ProjectTags
            languages={
              projects.find((proj) => proj.title === "Syllabuddies")
                ?.languages || []
            }
          />
        </div>
        <img src={syllabuddiesImg.src} alt="Syllabuddies" />
      </article>
    </div>
    // </Section>
  );
};
