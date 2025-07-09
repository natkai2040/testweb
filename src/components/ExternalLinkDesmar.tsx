import { IoMdOpen } from "react-icons/io";
import React from "react";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export default function ExternalLink({ children, className = "", ...props }: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center text-blue-600 underline hover:text-blue-800 ${className}`}
      {...props}
    >
      {children}
      <IoMdOpen className="ml-1 h-4 w-4" aria-label="Opens in new tab" />
    </a>
  );
}

