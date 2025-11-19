import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "1px 9px",
            fontSize: "20px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            background: "#FFB74D",
            color: "white",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          ^
        </button>
      )}
    </>
  );
};

export default BackToTop;