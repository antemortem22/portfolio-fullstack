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
          ? "border-[color:rgba(181,138,221,0.34)] bg-[rgba(122,56,181,0.1)] text-white"
          : "border-white/8 text-[var(--color-copy)]"
      } ${className}`.trim()}
    >
      {children}
    </span>
  );
}
