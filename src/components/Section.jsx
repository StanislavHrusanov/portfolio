import styles from "./Section.module.css";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.items}>{children}</div>
    </section>
  );
}
