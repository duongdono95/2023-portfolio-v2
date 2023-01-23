import React, { useState, useEffect } from 'react';

const TypeWriter = (props) => {
  const { options } = props;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // Delta : determine how fast one letter comming after one is typed
  const [delta, setDelta] = useState(500);

  // period : the a mount of transition time between each words
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    const tick = () => {
      let i = loopNum % options.length;
      let fullText = options[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };
    return () => {
      clearInterval(ticker);
    };
  });
  return <>{text}</>;
};

export default TypeWriter;
