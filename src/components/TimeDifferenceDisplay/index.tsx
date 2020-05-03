import * as React from "react";
import { useState, useEffect } from "react";

interface ITimeDifferenceDisplayProps {
  startEpoch: number;
}

const TimeDifferenceDisplay: React.FC<ITimeDifferenceDisplayProps> = ({
  startEpoch,
}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateSeconds() {
      const seconds = Math.floor(new Date().getTime() - startEpoch * 1000);
      setSeconds(seconds);
    }

    const timer = setInterval(updateSeconds, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return <>{new Date(seconds).toISOString().substr(11, 8)}</>;
};

export default TimeDifferenceDisplay;
