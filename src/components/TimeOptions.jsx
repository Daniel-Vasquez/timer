import styleButtonOptions from './styles/TimeOptions.module.css'

export const TimeOptions = ({ fn, text, horas, minutos, segundos }) => {
  return (
    <button
      className={styleButtonOptions.button}
      onClick={fn}
      disabled={horas <= 0 && minutos <= 0 && segundos <= 0}
    >
      {text}
    </button>
  )
}