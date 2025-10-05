import { useState, useEffect } from "react";

const LoopingTypewriter = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const totalDuration = text.length * 0.2 * 1000 + 1000;
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, totalDuration);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="flex justify-center text-[#82eefd]">
      {text.split("").map((char, i) => (
        <span
          key={`${key}-${i}`}
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
