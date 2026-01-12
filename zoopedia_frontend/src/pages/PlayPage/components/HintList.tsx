export default function HintList({ hints }: { hints: string[] }) {
  if (!hints || hints.length === 0) return <p className="muted">No hints yet.</p>;

  // In your UI you can do a carousel; tonight we keep it simple: show latest hint.
  const latest = hints[hints.length - 1];

  return (
    <div className="stack gap-8">
      <p className="hintText">{latest}</p>
      <div className="dots" aria-label="Hint progress">
        {hints.map((_, i) => (
          <span key={i} className="dot active" />
        ))}
        {/* show up to 6 total dots for aesthetic */}
        {Array.from({ length: Math.max(0, 6 - hints.length) }).map((_, i) => (
          <span key={`e-${i}`} className="dot" />
        ))}
      </div>
    </div>
  );
}
