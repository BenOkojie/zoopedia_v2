export function Skelenton({ lines = 2 }: { lines?: number }) {
  return (
    <div className="stack gap-8">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeletonLine" />
      ))}
    </div>
  );
}
