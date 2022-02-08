import { useChallengesContext } from '../contexts/ChallengesContext'
import { useCountdownContext } from '../contexts/CountdownContext'

/* eslint-disable @next/next/no-img-element */
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useChallengesContext()
  const { resetCountdown } = useCountdownContext()

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div
      className="h-full bg-customWhite rounded py-6 px-8 flex flex-col items-center justify-center
      text-center"
      style={{ boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)' }}
    >
      {activeChallenge ? (
        <div className="h-full flex flex-col">
          <header className="text-customBlue font-semibold text-xl px-8 pb-6 border-b-2 border-customGrayLine">
            Ganhe {activeChallenge.amount} xp
          </header>

          <main className="flex-1 flex flex-col items-center justify-center">
            <img src={`icons/${activeChallenge.type}.svg`} alt="Se exercite" />
            <strong className="font-semibold text-3xl mt-6 mb-4">
              Novo desafio
            </strong>
            <p className="leading-6">{activeChallenge.description}</p>
          </main>

          <footer className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleChallengeFailed}
              className="h-12 flex items-center justify-center rounded text-customWhite font-semibold text-base bg-customRed hover:brightness-90 transition"
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeSucceeded}
              className="h-12 flex items-center justify-center rounded text-customWhite font-semibold text-base bg-customGreen hover:brightness-90 transition"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <strong className="text-2xl font-medium leading-6">
            Finalize um ciclo para receber um desfio
          </strong>
          <p className="flex flex-col items-center leading-6 w-9/12 mt-12">
            <img className="mb-4" src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  )
}
