import { GITHUB } from "@/config/github";

const HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

function firstLine(message) {
  return message.split("\n")[0];
}

function commitsUrl(repo) {
  return (
    GITHUB.api +
    "/repos/" +
    repo +
    "/commits?author=" +
    GITHUB.user +
    "&per_page=" +
    GITHUB.perRepo
  );
}

async function fetchRepo(repo) {
  try {
    const res = await fetch(commitsUrl(repo), {
      headers: HEADERS,
      next: { revalidate: GITHUB.revalidate },
    });
    if (!res.ok) return [];
    const rows = await res.json();
    if (!Array.isArray(rows)) return [];
    return rows.map(function toRow(item) {
      return {
        sha: item.sha,
        message: firstLine(item.commit.message),
        repo: repo.split("/")[1],
        date: item.commit.author.date,
        url: item.html_url,
      };
    });
  } catch (error) {
    return [];
  }
}

function byNewest(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export async function getCommits() {
  const lists = await Promise.all(GITHUB.repos.map(fetchRepo));
  return lists.flat().sort(byNewest).slice(0, GITHUB.limit);
}