import styles from "./GithubUserCard.module.css";

import { Suspense, use } from "react";
import { fetchUser } from "./githubApi";
import { useQuery } from "@tanstack/react-query";

export type GithubProfileProps = {
    username: string,
}

export default function GithubUserCard({ username }: GithubProfileProps) {
    return (
        <div className={styles.usercard}>
            <Suspense>
                <CardInner username={username}/>
            </Suspense>
        </div>
    );
}

function CardInner({ username }: GithubProfileProps) {
    const result = useQuery({
        queryKey: ["gh", username],
        queryFn: (c) => fetchUser(username),
    });
    const user = result.data!;

    const realName = !user.name ? username : user.name;
    return (
        <>
            <center>
                <img src={user.avatar_url} className={styles.avatar}></img><br/>
                <a href={user.html_url}>
                    <b>{realName}</b>
                    {(realName === username) || (<> - {username}</>)}
                </a>
            </center>
            <hr className={styles.line}/>
            {user.bio &&
                <em>
                    {user.bio}
                    <div className={styles.biospacer}/>
                </em>
            }
            {user.followers} followers, {user.following} following - {user.public_gists} gists, {user.public_repos} repositories 
        </>
    );
}