import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    "border-[color:rgba(181,138,221,0.38)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-deep)] hover:border-[color:rgba(181,138,221,0.54)]",
  secondary:
    "border-white/10 bg-[rgba(16,16,21,0.62)] text-white hover:border-[color:rgba(181,138,221,0.38)] hover:bg-[rgba(21,19,26,0.92)]",
};

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const mergedClassName = `inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ${variantClassName[variant]} ${className}`.trim();

  if (href.startsWith("#")) {
    return (
      <a href={href} className={mergedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClassName} {...props}>
      {children}
    </Link>
  );
}
