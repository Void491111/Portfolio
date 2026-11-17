import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CommitRow from "./CommitRow";
import { getCommits } from "@/lib/github";
import { GITHUB } from "@/config/github";

export default async function Activity() {
  const commits = await getCommits();
  if (commits.length === 0) return null;

  return (
    <section className="px-4 py-14 sm:px-8 sm:py-20">
      <Reveal className="mx-auto max-w-5xl xl:max-w-6xl">
        <SectionLabel>{GITHUB.label}</SectionLabel>
        <ul className="mt-8">
          {commits.map(function renderRow(commit) {
            return <CommitRow key={commit.sha} commit={commit} />;
          })}
        </ul>
        <a
          href={GITHUB.profile}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-widest text-neutral-400 transition-colors hover:text-neutral-950"
        >
          github.com/{GITHUB.user}
        </a>
      </Reveal>
    </section>
  );
}