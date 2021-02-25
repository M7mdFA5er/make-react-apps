import React, { useRef, useState } from 'react';
import './App.css';


const padTime = (time) => {
  return time.toString().padStart(2, '0');
}

export default function App() {

  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState('Let the countdown begin!!!');
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleTimerStart = () => {
    if (intervalRef.current !== null) return;

    setTitle('Tik.Tok...');
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft >= 1) return timeLeft - 1;
        //reset Time
        handleTimerReset();
        return 0;
      });
    }, 1000);
  }

  const handleTimerStop = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Stop!!');
    setIsRunning(false);
  }

  const handleTimerReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle(`Let's Begin Again ...`);
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - (minutes * 60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={handleTimerStart}>Start</button>}
        {isRunning && <button onClick={handleTimerStop}>Stop</button>}
        <button onClick={handleTimerReset}>Reset</button>
      </div>
    </div>
  );
}
