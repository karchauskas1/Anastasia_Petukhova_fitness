import { cn } from "../lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 cursor-pointer";

    const variants = {
      primary:
        "bg-coral text-white hover:bg-coral-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
      secondary:
        "bg-mint text-dark hover:bg-mint/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
      outline:
        "border-2 border-coral text-coral hover:bg-coral hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
