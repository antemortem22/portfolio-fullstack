import type { ReactNode } from "react";
import { EditorialLabel } from "@/components/shared/EditorialLabel";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <EditorialLabel>{eyebrow}</EditorialLabel> : null}
      <h2 className="type-heading-display mt-2.5 text-[2.3rem] uppercase leading-[0.95] sm:text-[2.85rem] lg:text-[3.2rem]">
        {title}
      </h2>
      {accent ? (
        <p className="type-accent mt-1.5 text-[2.2rem] leading-[0.95] sm:text-[2.75rem] lg:text-[3.2rem]">
          {accent}
        </p>
      ) : null}
      {description ? (
        <p className="type-body-muted mt-3 max-w-2xl text-[0.92rem] leading-[1.75] sm:text-[0.98rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
