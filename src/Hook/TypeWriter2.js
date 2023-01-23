import React, { useState, useEffect } from 'react';

const TypeWriter2 = (props) => {
  const { renderingText } = props;

  const letterArray = renderingText.split('');

  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState([]);

  const [speed, setSpeed] = useState(500);
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      rotation();
    }, speed);
    return () => {
      clearInterval(ticker);
    };
  });
  const rotation = () => {
    if (!isDeleting && index <= renderingText.length) {
      setText((prev) => [...prev, renderingText[index]]);
      setIndex((prev) => prev + 1);
      setSpeed(300);
    }
    if (index === renderingText.length) {
      setIsDeleting(true);
      setSpeed(300);
    }
    if (isDeleting && text !== []) {
      setText(renderingText.substring(0, index));
      setIndex((prev) => prev - 1);
      setSpeed(300);
    }
    if (text === '') {
      setIsDeleting(false);
    }
  };

  return <>{text}</>;
};

export default TypeWriter2;
