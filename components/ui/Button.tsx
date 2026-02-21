import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  icon,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded px-5 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--bts-pink)] focus:ring-offset-2";
  const variants = {
    primary:
      "bg-[var(--bts-pink)] text-white hover:bg-[var(--bts-pink-dark)]",
    ghost:
      "border-2 border-[var(--bts-pink)] bg-transparent text-[var(--bts-gray)] hover:bg-[var(--bts-pink)]/5",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
      {icon}
    </Link>
  );
}
