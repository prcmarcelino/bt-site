import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export function Card({
  icon,
  title,
  description,
  linkText = "Saiba mais",
  linkHref = "#",
}: CardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bts-pink)]/10 text-[var(--bts-pink)]">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600">{description}</p>
      <a
        href={linkHref}
        className="text-sm font-medium text-[var(--bts-pink)] hover:underline"
      >
        {linkText} →
      </a>
    </article>
  );
}
