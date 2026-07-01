import type { HTMLAttributes } from "react";

type TechTagProps = HTMLAttributes<HTMLSpanElement> & {
  emphasized?: boolean;
};

export function TechTag({
  children,
  className = "",
  emphasized = false,
  ...props
}: TechTagProps) {
  return (
    <span
      {...props}
      className={`font-sans inline-flex items-center border px-2.5 py-1 text-[0.64rem] font-medium uppercase tracking-[0.16em] ${
        emphasized
          ? "border-[rgba(122,56,181,0.62)] bg-[rgba(40,20,58,0.42)] text-[var(--color-accent-soft)]"
          : "border-[rgba(122,56,181,0.58)] bg-[rgba(28,14,40,0.34)] text-[var(--color-accent)]"
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
