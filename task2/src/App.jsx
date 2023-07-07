import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

const App = () => {
  const [workTime, setWorkTime] = useState(1500); //! 25 minutes in second
  const [breakTime, setBreakTime] = useState(300); //! 5 minutes in second
  const [cycleCount, setCycleCount] = useState(1); //! Total number of cycle
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [progress, setProgress] = useState(100);
  const [userCycleCount, setUserCycleCount] = useState(0);

  useEffect(() => {
    setCycleCount(userCycleCount);
  }, [userCycleCount]);
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (isWorkTime) {
          if (workTime > 0) {
            setWorkTime((prevTime) => prevTime - 1);
            setProgress((prevProgress) => prevProgress - 100 / 1500); //! Getting the progress for work time
          } else {
            setIsWorkTime(false);
            setBreakTime(300); //! Setting break time
            setProgress(100);
          }
        } else {
          if (breakTime > 0) {
            setBreakTime((prevTime) => prevTime - 1);
            setProgress((prevProgress) => prevProgress - 100 / 300); //! Setting the progress for break time
          } else {
            setIsWorkTime(true);
            if (cycleCount === 1) {
              setCycleCount(0); //! Changing the cycle count
              setIsRunning(false);
            } else {
              setCycleCount((prevCount) => prevCount - 1);
              setWorkTime(1500); //! Setting work time
            }
            setProgress(100);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isWorkTime, workTime, breakTime, cycleCount]);

  const handleStart = () => {
    if (cycleCount > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCycleCount(userCycleCount);
    setWorkTime(1500);
    setBreakTime(300);
    setProgress(100);

    if (userCycleCount === 0) {
      setUserCycleCount(0);
      setCycleCount(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleCycleCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setUserCycleCount(isNaN(value) ? 0 : value);
  };

  return (
    <Clock
      cycleCount={cycleCount}
      isWorkTime={isWorkTime}
      workTime={workTime}
      isRunning={isRunning}
      breakTime={breakTime}
      handleStart={handleStart}
      handlePause={handlePause}
      handleReset={handleReset}
      progress={progress}
      formatTime={formatTime}
      userCycleCount={userCycleCount}
      handleCycleCountChange={handleCycleCountChange}
    />
  );
};

export default App;
