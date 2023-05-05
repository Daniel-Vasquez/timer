import { useState } from "react";
import { TimeButton } from "./components/TimeButton";
import { TimeOptions } from "./components/TimeOptions";
import styleTimer from './Timer.module.css'



export function Timer() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [tiempoTotal, setTiempoTotal] = useState(0);
  const [intervaloId, setIntervaloId] = useState(null);

  const iniciarTemporizador = () => {
    const tiempoEnSegundos =
      Math.floor(horas) * 3600 +
      Math.floor(minutos) * 60 +
      Math.floor(segundos);

    setTiempoTotal(tiempoEnSegundos);

    const id = setInterval(() => {
      setTiempoTotal((tiempoTotal) =>
        tiempoTotal === 0 ? 0 : tiempoTotal - 1
      );
    }, 1000);

    setIntervaloId(id);
  };

  const detenerTemporizador = () => {
    clearInterval(intervaloId);
  };

  const reiniciarTemporizador = () => {
    detenerTemporizador();
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setTiempoTotal(0);
  };

  const segundosMostrar = tiempoTotal % 60;
  const minutosMostrar = Math.floor(tiempoTotal / 60) % 60;
  const horasMostrar = Math.floor(tiempoTotal / 3600);

  const timeList = [
    {
      nameFn: iniciarTemporizador,
      text: 'Iniciar'
    },
    {
      nameFn: detenerTemporizador,
      text: 'Detener'
    },
    {
      nameFn: reiniciarTemporizador,
      text: 'Reiniciar'
    },
  ]

  return (
    <div className={styleTimer.timer}>
      <h2 className={styleTimer["timer-title"]}>
        TEMPORIZADOR
      </h2>
      <div>
        <TimeButton
          text='Horas:'
          time={horas}
          setTime={setHoras}
        />

        <TimeButton
          text='Minutos:'
          time={minutos}
          setTime={setMinutos}
        />

        <TimeButton
          text='Segundos:'
          time={segundos}
          setTime={setSegundos}
        />
      </div>

      <div className={styleTimer["timer-buttons"]}>
        {/* {timeList.map(({ nameFn, text }, index) => {
          return (
            <TimeOptions
              key={index}
              fn={nameFn}
              text={text}
              horas={horas}
              minutos={minutos}
              segundos={segundos}
            />
          )
        })} */}

        <TimeOptions
          fn={iniciarTemporizador}
          text='Iniciar'
          horas={horas}
          minutos={minutos}
          segundos={segundos}
        />
        <TimeOptions
          fn={detenerTemporizador}
          text='Detener'
          horas={horas}
          minutos={minutos}
          segundos={segundos}
        />
        <TimeOptions
          fn={reiniciarTemporizador}
          text='Reiniciar'
          horas={horas}
          minutos={minutos}
          segundos={segundos}
        />
      </div>

      <div>
        <h1 className={styleTimer["timer-info"]}>
          {horasMostrar < 10 ? `0${horasMostrar}` : horasMostrar}:
          {minutosMostrar < 10 ? `0${minutosMostrar}` : minutosMostrar}:
          {segundosMostrar < 10 ? `0${segundosMostrar}` : segundosMostrar}
        </h1>
      </div>
    </div>
  );
}
