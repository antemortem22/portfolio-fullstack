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
      <h2 className="type-heading-display mt-3 text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>
      {accent ? (
        <p className="type-accent mt-2 text-4xl leading-[0.95] sm:text-5xl lg:text-[3.7rem]">
          {accent}
        </p>
      ) : null}
      {description ? (
        <p className="type-body-muted mt-4 max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
