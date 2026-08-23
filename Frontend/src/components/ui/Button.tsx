import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "text";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-active",
  secondary: "bg-canvas text-ink border border-hairline hover:shadow-elevated",
  text: "bg-transparent text-ink underline",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    variant === "text"
      ? "text-button-md transition-colors"
      : "text-button-md rounded-sm px-lg h-12 transition-colors";
  return <button className={`${base} ${variantClasses[variant]} ${className}`} {...props} />;
}
