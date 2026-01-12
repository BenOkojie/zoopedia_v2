import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={[
        "btn",
        `btn-${variant}`,
        size === "lg" ? "btn-lg" : "",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
