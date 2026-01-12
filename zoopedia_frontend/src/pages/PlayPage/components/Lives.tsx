export default function Lives({ value }: { value: number }) {
  return (
    <div className="row gap-8">
      <span className="mutedSmall">Lives</span>
      <span className="lives">
        {value} <span aria-hidden>❤️</span>
      </span>
    </div>
  );
}
