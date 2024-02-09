import "./FeaturedProject.scss";
export default function FeaturedProjects({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="project">
      <header>{title}</header>
      <p className="description">{description}</p>
    </article>
  );
}
