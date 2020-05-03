import * as React from "react";
import { useState, useEffect } from "react";

interface ITimeDifferenceDisplayProps {
  startEpoch: number;
}

const TimeDifferenceDisplay: React.FC<ITimeDifferenceDisplayProps> = ({
  startEpoch,
}) => {
  const [seconds, setSeconds] = useState(0);

  const updateSeconds = () => {
    setSeconds(Math.floor(new Date().getTime() - startEpoch * 1000));
  };

  useEffect(() => {
    const timer = setInterval(updateSeconds, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return <p>{new Date(seconds).toISOString().substr(11, 8)}</p>;
};

export default TimeDifferenceDisplay;
