import styleButtonOptions from './styles/TimeOptions.module.css'

export const TimeOptions = ({ fn, text, horas, minutos, segundos, isPause, totalTime, startingTimer }) => {
  return (
    <button
      className={styleButtonOptions.button}
      onClick={fn}
      disabled={horas <= 0 && minutos <= 0 && segundos <= 0 || totalTime > 0 || isPause || startingTimer !== true}
    >
      {text}
    </button>
  )
}