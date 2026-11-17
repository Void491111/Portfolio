import { GITHUB } from "@/config/github";

const EVENTS =
  GITHUB.api + "/users/" + GITHUB.user + "/events/public?per_page=" + GITHUB.perPage;

const HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

function isPush(event) {
  return event.type === "PushEvent";
}

function isVisible(event) {
  return !GITHUB.hideRepos.includes(event.repo.name);
}

function firstLine(message) {
  return message.split("\n")[0];
}

function toCommits(event) {
  const commits = event.payload.commits || [];
  return commits
    .filter(function isDistinct(commit) {
      return commit.distinct;
    })
    .reverse()
    .map(function toRow(commit) {
      return {
        sha: commit.sha,
        message: firstLine(commit.message),
        repo: event.repo.name.split("/")[1],
        date: event.created_at,
        url: "https://github.com/" + event.repo.name + "/commit/" + commit.sha,
      };
    });
}

export async function getCommits() {
  try {
    const res = await fetch(EVENTS, {
      headers: HEADERS,
      next: { revalidate: GITHUB.revalidate },
    });
    if (!res.ok) return [];
    const events = await res.json();
    if (!Array.isArray(events)) return [];
    return events.filter(isPush).filter(isVisible).flatMap(toCommits).slice(0, GITHUB.limit);
  } catch (error) {
    return [];
  }
}