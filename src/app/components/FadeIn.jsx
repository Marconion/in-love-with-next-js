"use client"; // Ensure it runs in the browser

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const FadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keeps triggering when scrolling up/down
    threshold: 0.1, // Fires when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        // transform: inView ? "translateY(0)" : "tranlateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}>
      {children}
    </div>
  );
};

export default FadeIn;
