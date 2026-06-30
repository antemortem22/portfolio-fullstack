import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLDivElement>;

export function Divider({ className = "", ...props }: DividerProps) {
  return (
    <div
      {...props}
      className={`h-px w-full bg-[linear-gradient(90deg,transparent,rgba(181,138,221,0.46),transparent)] ${className}`.trim()}
    />
  );
}
