import React, { useEffect, useState } from "react";

function Timer({ start, end }) {
  const [counter, setCounter] = useState(Number(start));

  useEffect(() => {
    setCounter(Number(start));
  }, [start]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < end) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [end]);

  return (
    <>
      <h1> Counter : {counter}</h1>
    </>
  );
}

export default Timer;
