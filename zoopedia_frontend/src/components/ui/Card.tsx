import React from "react";

export function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card">
      {title ? <div className="cardTitle">{title}</div> : null}
      <div>{children}</div>
    </section>
  );
}
