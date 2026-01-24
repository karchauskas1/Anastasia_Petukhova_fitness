import { cn } from "../lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-center mb-12", className)} {...props}>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{title}</h2>
        {subtitle && (
          <p className="text-gray-text text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
