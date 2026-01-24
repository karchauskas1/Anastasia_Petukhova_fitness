import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: "sm" | "md" | "lg";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, size = "md", ...props }, ref) => {
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const dotSizeClasses = {
    sm: "h-1.5 w-1.5 left-[8%]",
    md: "h-2 w-2 left-[5%]",
    lg: "h-2.5 w-2.5 left-[5%]",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border-2 border-coral bg-white text-center font-semibold text-coral transition-all duration-300",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="w-5 h-5" />
      </div>
      <div className={cn(
        "absolute top-1/2 -translate-y-1/2 scale-[1] rounded-full bg-coral transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
        dotSizeClasses[size]
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
