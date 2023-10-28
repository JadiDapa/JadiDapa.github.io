import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 20, // Adjust the deleting speed to 30
      loop: true,
      showCursor: false, // Hide the cursor
    };

    if (el.current) {
      const typed = new Typed(el.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={el} />;
};

export default TypedText;
