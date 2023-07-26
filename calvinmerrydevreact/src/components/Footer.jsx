import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="home-footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        id="scroll-down-btn"
        className="w-10 h-10 scroll-down-btn"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 9l6 6 6-6"
        ></path>
      </svg>
    </div>
  );
}
