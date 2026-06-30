import type { HTMLAttributes } from "react";

type FloralBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  intensity?: "strong" | "medium" | "subtle";
  position?: string;
  size?: string;
};

export function FloralBackground(props: FloralBackgroundProps) {
  void props;
  return null;
}
