import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/shared/Container";

type SectionTone = "default" | "muted" | "surface";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: SectionTone;
  containerClassName?: string;
  wide?: boolean;
};

const toneClassName: Record<SectionTone, string> = {
  default: "bg-transparent",
  muted: "bg-[linear-gradient(180deg,rgba(16,16,21,0.3)_0%,rgba(8,7,10,0)_100%)]",
  surface: "bg-[linear-gradient(180deg,rgba(21,19,26,0.34)_0%,rgba(8,7,10,0.08)_100%)]",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "default",
  wide = false,
  ...props
}: SectionProps) {
  return (
    <section {...props} className={`${toneClassName[tone]} ${className}`.trim()}>
      <Container wide={wide} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
