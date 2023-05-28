import styleButton from './styles/TimeButton.module.css'

export const TimeButton = ({ text, time, setTime, admittedTime }) => {
  return (
    <div className={styleButton["timer-time"]}>
      <p>{text}</p>
      <div className={styleButton["timer-time-buttons"]}>
        <button
          className={styleButton["timer-time-buttons__btn"]}
          onClick={() => setTime(Math.floor(time) - 1)}
          disabled={Math.floor(time) <= 0}
        >
          <span className="m-auto">-</span>
        </button>
        <input
          type="number"
          value={Math.floor(time)}
          max={parseInt(admittedTime)}
          min="0"
          onChange={(e) => setTime(e.target.value)}
          className={styleButton["timer-time__input"]}
          disabled={true}
        />
        <button
          className={styleButton["timer-time-buttons__btn"]}
          onClick={() => setTime(Math.floor(time) + 1)}
          disabled={Math.floor(time) === parseInt(admittedTime)}
        >
          <span className="m-auto">+</span>
        </button>
      </div>
    </div>
  )
}