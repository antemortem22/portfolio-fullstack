"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  newTab?: boolean;
};

export function ExternalLink({
  children,
  newTab = true,
  rel,
  target,
  ...props
}: ExternalLinkProps) {
  const resolvedTarget = newTab ? "_blank" : target;
  const resolvedRel = newTab ? rel ?? "noreferrer" : rel;

  return (
    <a {...props} target={resolvedTarget} rel={resolvedRel}>
      {children}
    </a>
  );
}
