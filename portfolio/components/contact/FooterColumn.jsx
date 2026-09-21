export default function FooterColumn({ label, children }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
