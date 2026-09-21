const UNDERLINE =
  "break-all bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_2px] bg-bottom-left bg-no-repeat pb-1 text-xl font-medium transition-[background-size] duration-500 hover:bg-size-[100%_2px] sm:text-3xl";

export default function EmailLink({ email }) {
  const href = "mailto:" + email;
  return (
    <a href={href} className={UNDERLINE}>
      {email}
    </a>
  );
}