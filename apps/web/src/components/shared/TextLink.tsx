import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ExternalLink } from "@/components/ui/ExternalLink";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  arrow?: boolean;
  newTab?: boolean;
};

export function TextLink({
  children,
  className = "",
  arrow = false,
  newTab = true,
  ...props
}: TextLinkProps) {
  return (
    <ExternalLink
      newTab={newTab}
      {...props}
      className={`group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)] transition hover:text-white ${className}`.trim()}
    >
      <span>{children}</span>
      {arrow ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{"->"}</span>
      ) : null}
    </ExternalLink>
  );
}
