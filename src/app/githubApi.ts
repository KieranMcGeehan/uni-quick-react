export type GithubUser = {
    avatar_url: string,
    url: string,
    html_url: string,
    name: string,
    bio: string,
    twitter_username: string
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number
}

function ghFetch(route: string): Promise<Response> {
    return fetch(`https://api.github.com/${route}`, {
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            "Accept": "application/vnd.github+json"
        }
    })
}

export async function fetchUser(username: string): Promise<GithubUser> {
    return ghFetch(`users/${username}`).then(r => r.json());
}