export default function TerminalLine({ line, showCursor }) {
  const isCommand = line.type === "cmd";
  return (
    <p className={`whitespace-pre-wrap ${isCommand ? "text-white" : "text-white/55"}`}>
      {isCommand && <span className="mr-2 text-white/40">$</span>}
      {line.text}
      {showCursor && (
        <span className="ml-0.5 inline-block h-[1.1em] w-[0.5em] translate-y-[0.2em] animate-pulse bg-white/80" />
      )}
    </p>
  );
}