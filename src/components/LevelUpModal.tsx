import { MouseEvent } from 'react'
import { useChallengesContext } from '../contexts/ChallengesContext'

/* eslint-disable @next/next/no-img-element */
export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallengesContext()

  function handleClickOverlay(e: MouseEvent) {
    if (e.target === e.currentTarget) closeLevelUpModal()
  }

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      style={{ background: 'rgba(245, 243, 245, 0.8)' }}
      onClick={handleClickOverlay}
    >
      <div
        className="bg-customWhite w-full max-w-sm py-8 px-12 rounded text-center relative"
        style={{ boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)' }}
      >
        <header
          className="text-9xl font-semibold text-customBlue bg-contain"
          style={{ background: "url('/icons/levelup.svg') no-repeat center" }}
        >
          {level}
        </header>

        <strong className="text-4xl text-customText">Parabéns</strong>

        <p className="text-xl text-customText mt-1">
          Você alcancou um novo level.
        </p>

        <button
          type="button"
          className="absolute right-2 top-2 bg-transparent"
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}
