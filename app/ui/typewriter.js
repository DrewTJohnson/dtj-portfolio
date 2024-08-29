import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 75) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index === text.length) {
        clearTimeout(timeoutId);
        return;
      }

      setDisplayText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, index]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <h1 className="text-6xl font-bold min-h-[60px] text-pink-600 mb-8">{displayText}</h1>;
};

export default Typewriter;
