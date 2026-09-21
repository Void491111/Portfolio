import Link from "next/link";
import { SITE, NAV_LINKS } from "@/config/site";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="font-medium tracking-tight">{SITE.name}</Link>
        <ul className="flex items-center gap-5 text-sm text-neutral-600">
          {NAV_LINKS.map(function renderNavLink(link) {
            return (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-neutral-950">{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}