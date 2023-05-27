import { useState, useEffect } from "react";
import { TimeButton } from "./components/TimeButton";
import { TimeOptions } from "./components/TimeOptions";
import styleTimer from './Timer.module.css'

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [intervaloId, setIntervaloId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (totalTime === 0) {
      clearInterval(intervaloId);
    }
  }, [totalTime]);

  const startTimer = (timeUsers) => {
    const timeInSeconds =
      Math.floor(hours) * 3600 +
      Math.floor(minutes) * 60 +
      Math.floor(seconds);
    
    if (isPaused) {
      setTotalTime(timeUsers);
    } else {
      setTotalTime(timeInSeconds);
    }

    const id = setInterval(() => {
      setTotalTime((tiempoTotal) =>
        tiempoTotal === 0 ? 0 : tiempoTotal - 1
      );
      
    }, 1000);
    
    setIsPaused(false)
    setIntervaloId(id);
  };

  const stopTimer = () => {
    clearInterval(intervaloId);
    setIsPaused(true)
  };

  const restartTimer = () => {
    stopTimer();
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalTime(0);
    setIsPaused(false)
  };

  const resumeTimer = () => {
    startTimer(totalTime)
    setIsPaused(false)
  }

  const secondsToShow = totalTime % 60;
  const minutesToShow = Math.floor(totalTime / 60) % 60;
  const hourstoShow = Math.floor(totalTime / 3600);

  return (
    <div className={styleTimer.timer}>
      <h2 className={styleTimer["timer-title"]}>
        TEMPORIZADOR
      </h2>
      <div>
        <TimeButton
          text='Horas:'
          time={hours}
          setTime={setHours}
        />

        <TimeButton
          text='Minutos:'
          time={minutes}
          setTime={setMinutes}
        />

        <TimeButton
          text='Segundos:'
          time={seconds}
          setTime={setSeconds}
        />
      </div>

      <div className={styleTimer["timer-buttons"]}>
        
        <TimeOptions
          fn={startTimer}
          text='Iniciar'
          horas={hours}
          minutos={minutes}
          segundos={seconds}
          isPause={isPaused}
          totalTime={totalTime}
        />
        <TimeOptions
          fn={!isPaused ? stopTimer : () => resumeTimer(totalTime)}
          text={!isPaused ? 'Detener' : 'Reanudar'}
          horas={hours}
          minutos={minutes}
          segundos={seconds}
        />
        <TimeOptions
          fn={restartTimer}
          text='Reiniciar'
          horas={hours}
          minutos={minutes}
          segundos={seconds}
          isPause={isPaused}
        />
      </div>

      <div>
        <h1 className={styleTimer["timer-info"]}>
          {hourstoShow < 10 ? `0${hourstoShow}` : hourstoShow}:
          {minutesToShow < 10 ? `0${minutesToShow}` : minutesToShow}:
          {secondsToShow < 10 ? `0${secondsToShow}` : secondsToShow}
        </h1>
      </div>
    </div>
  );
}
