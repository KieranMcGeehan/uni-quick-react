"use client"

import { useState } from "react";
import GithubUserCard from "./GithubUserCard";
import styles from "./page.module.css";

import Form from 'next/form'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <main className={styles.main}>
        <Form action={d => setName(""+d.get("query"))}>
          <input name="query" />
          <button type="submit">Submit</button>
        </Form>
        {name && <GithubUserCard username={name}></GithubUserCard>}
        </main>
        <footer className={styles.footer}>
          RUG Sample application
        </footer>
      </div>
    </QueryClientProvider>
  );
}
