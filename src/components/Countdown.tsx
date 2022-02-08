import { useCountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useCountdownContext()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className="flex items-center font-mono font-semibold text-customTitle">
        <div
          className="flex-1 flex items-center justify-evenly bg-customWhite rounded text-9xl text-center"
          style={{ boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)' }}
        >
          <span className="flex-1 border-r-2 border-gray-200">
            {minuteLeft}
          </span>
          <span className="flex-1 border-l-2 border-gray-200">
            {minuteRight}
          </span>
        </div>

        <span className="text-8xl my-0 mx-2">:</span>

        <div
          className="flex-1 flex items-center justify-evenly bg-customWhite rounded text-9xl text-center"
          style={{ boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)' }}
        >
          <span className="flex-1 border-r-2 border-gray-200">
            {secondLeft}
          </span>
          <span className="flex-1 border-l-2 border-gray-200">
            {secondRight}
          </span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className="w-full h-20 mt-8 flex items-center justify-center border-0 rounded bg-customWhite text-customText text-xl font-semibold cursor-not-allowed"
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="w-full h-20 mt-8 flex items-center justify-center border-0 rounded bg-customWhite text-customTitle text-xl font-semibold hover:bg-customRed hover:text-customWhite transition"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className="w-full h-20 mt-8 flex items-center justify-center border-0 rounded bg-customBlue text-customWhite text-xl font-semibold hover:bg-customBlueDark transition"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
