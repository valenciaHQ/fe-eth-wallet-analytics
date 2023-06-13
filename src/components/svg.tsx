import React from "react";
import { SVGProps } from "../model";

const Svg = ({ icon }: SVGProps) => {
  const copy = (
    <svg
      data-tooltip-id="copy-tooltip"
      data-tooltip-content="Copy address to clipboard"
      className="h-8 w-8 text-indigo-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  );

  const info = (
    <svg
      data-tooltip-id="old-tooltip"
      data-tooltip-content="This address is old! First transaction has been made more than 1 year ago"
      className="h-6 w-6 p-1 text-red-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" /> <line x1="12" y1="16" x2="12" y2="12" />{" "}
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const refresh = (
    <svg
      className="h-full w-6 text-indigo-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <polyline points="23 4 23 10 17 10" />{" "}
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );

  const favourite = (
    <svg
      className="h-8 w-8 text-yellow-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );

  const pocket = (
    <svg
      className="h-8 w-8 text-red-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />{" "}
      <polyline points="8 10 12 14 16 10" />
    </svg>
  );

  switch (icon) {
    case "copy":
      return copy;
    case "info":
      return info;
    case "refresh":
      return refresh;
    case "favourite":
      return favourite;
    case "pocket":
      return pocket;
    default:
      return null;
  }
};

export default React.memo(Svg);
