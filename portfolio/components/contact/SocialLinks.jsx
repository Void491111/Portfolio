const LINK_CLASS = "group inline-flex items-center gap-0.5 text-neutral-600 transition-colors hover:text-neutral-950";
const ARROW_CLASS = "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

export default function SocialLinks({ links }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map(function renderSocial(link) {
        return (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer" className={LINK_CLASS}>
              {link.label}
              <span className={ARROW_CLASS}>{"\u2197"}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}