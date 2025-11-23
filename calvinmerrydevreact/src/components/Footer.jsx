import React, { useState, useEffect } from "react";
import "../css/footer.css";

export default function Footer(props) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isScrolledToBottom =
        scrollPosition + windowHeight >= documentHeight;
      setIsScrolledToBottom(isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`home-footer ${isScrolledToBottom ? "up" : ""}`}
      onClick={() =>
        isScrolledToBottom ? props.scrollToTop() : props.scrollToProjects()
      }
    >
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
          d={isScrolledToBottom ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
        ></path>
      </svg>
    </div>
  );
}
