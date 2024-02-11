import styles from "./FeaturedProject.module.scss"
export default function FeaturedProjects({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={styles.project}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
