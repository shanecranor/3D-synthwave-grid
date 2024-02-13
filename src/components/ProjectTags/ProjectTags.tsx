import { getLanguageIcons } from "../Project/LanguageIcons";
import "./ProjectTags.scss";
export const ProjectTags = ({ languages }: { languages: string[] }) => {
  return <div className="project-tags">{getLanguageIcons(languages)}</div>;
};
