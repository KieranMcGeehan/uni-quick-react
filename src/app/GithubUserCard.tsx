import styles from "./GithubUserCard.module.css";

import { use } from "react";
import { fetchUser } from "./githubApi";
import Link from "next/link";

export type GithubProfileProps = {
    username: string,
}

export default function GithubUserCard({ username }: GithubProfileProps) {
    const user = use(fetchUser(username));
    console.log(user);

    const realName = !user.name ? username : user.name;
    return (
        <div className={styles.usercard}>
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
        </div>
    );
}