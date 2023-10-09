import React from "react";

function Timer({initialSeconds}) {
  const [secondsRemaining, setSecondsRemaining] =
    React.useState(initialSeconds);

  React.useEffect(() => {
    // If time is up, don't start the timer
    if (secondsRemaining <= 0) {
      return;
    }

    // Every second, decrement the seconds remaining until the time is up
    const timerID = setInterval(() => {
      setSecondsRemaining((previousSeconds) => {
        if (previousSeconds <= 1) {
          clearInterval(timerID);
          return 0;
        }
        return previousSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      {secondsRemaining
        ? `Time remaining: ${secondsRemaining} seconds`
        : "Time is up!"}
    </div>
  );
}

export default Timer;
