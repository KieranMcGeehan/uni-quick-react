import GithubUserCard from "./GithubUserCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <GithubUserCard username="KieranMcGeehan"></GithubUserCard>
      </main>
      <footer className={styles.footer}>
        RUG Sample application
      </footer>
    </div>
  );
}
