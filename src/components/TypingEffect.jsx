import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, typingDelay = 500, eraseDelay = 2000, cursor = '|' }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex <= texts[textIndex].length) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, eraseSpeed);
    } else if (!isDeleting && charIndex > texts[textIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), eraseDelay);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, eraseSpeed, eraseDelay]);

  return (
    <span>
      {displayText}
      <span className="text-[#8245ec]">{cursor}</span>
    </span>
  );
};

export default TypingEffect;
