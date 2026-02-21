import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block rounded bg-[var(--bts-pink)] px-3 py-1 text-sm font-medium text-white ${className}`}
    >
      {children}
    </span>
  );
}
