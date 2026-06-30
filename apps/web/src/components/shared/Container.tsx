import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  wide?: boolean;
};

export function Container({
  children,
  className = "",
  wide = false,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={`mx-auto w-full px-4 sm:px-5 lg:px-6 ${wide ? "max-w-[1540px]" : "max-w-[1380px]"} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
