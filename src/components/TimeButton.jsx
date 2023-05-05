import styleButton from './styles/TimeButton.module.css'

export const TimeButton = ({ text, time, setTime }) => {
  return (
    <div className={styleButton["timer-time"]}>
      <p>{text}</p>
      <div className={styleButton["timer-time-buttons"]}>
        <button
          className={styleButton["timer-time-buttons__btn"]}
          onClick={() => setTime(time - 1)}
          disabled={time <= 0}
        >
          <span className="m-auto">-</span>
        </button>
        <input
          type="number"
          value={time}
          max='23'
          min="0"
          placeholder="Horas"
          onChange={(e) => setTime(e.target.value)}
          className={styleButton["timer-time__input"]}
        />
        <button
          className={styleButton["timer-time-buttons__btn"]}
          onClick={() => setTime(time + 1)}
          disabled={time === 23}
        >
          <span className="m-auto">+</span>
        </button>
      </div>
    </div>
  )
}