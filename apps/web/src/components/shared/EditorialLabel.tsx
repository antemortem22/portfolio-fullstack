import type { HTMLAttributes } from "react";

type EditorialLabelProps = HTMLAttributes<HTMLParagraphElement>;

export function EditorialLabel({ children, className = "", ...props }: EditorialLabelProps) {
  return (
    <p
      {...props}
      className={`type-meta text-[0.68rem] tracking-[0.34em] text-[var(--color-accent)] ${className}`.trim()}
    >
      {children}
    </p>
  );
}
