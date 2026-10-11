const CARD_CLASS =
  " max-w-44 rounded-xl border border-neutral-200/70 bg-white/70 px-3 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-md";

export default function OrbitCard({ card }) {
  return (
    <div className={"absolute " + card.position + " " + card.className + CARD_CLASS}>
      <p className="text-xs font-medium leading-tight">{card.title}</p>
      <p className="mt-0.5 font-mono text-[10px] text-neutral-500">{card.body}</p>
    </div>
  );
}
