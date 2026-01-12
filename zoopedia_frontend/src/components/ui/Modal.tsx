import React from "react";

export function Modal({
  open,
  title,
  children,
}: {
  open: boolean;
  title?: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modal">
        {title ? <div className="modalTitle">{title}</div> : null}
        {children}
      </div>
    </div>
  );
}
