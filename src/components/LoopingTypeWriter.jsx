import { useState, useEffect } from "react";

const LoopingTypewriter = ({ text }) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Total animation duration = number of characters * delay per char + duration of each char
    const totalDuration = text.length * 0.2 * 1000 + 50; // ms

    const interval = setInterval(() => {
      setShowText(false);              // hide text
      setTimeout(() => setShowText(true), 50); // re-show text after small delay
    }, totalDuration);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="flex justify-center text-[#82eefd]">
      {showText &&
        text.split("").map((char, i) => (
          <span
            key={i}
            className="typewriter"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
    </p>
  );
};

export default LoopingTypewriter;
