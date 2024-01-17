import * as React from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("mx-auto container pb-8 max-w-screen-xl px-4", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Container.displayName = "Container"
export default Container;