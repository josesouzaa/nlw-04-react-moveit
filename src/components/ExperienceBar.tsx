import { useChallengesContext } from '../contexts/ChallengesContext'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengesContext()

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <>
      <header className="flex items-center">
        <span>0 xp</span>
        <div className="flex-1 h-1 rounded bg-customGrayLine my-0 mx-6 relative">
          <div
            className="h-1 rounded bg-customGreen"
            style={{ width: `${percentToNextLevel}%` }}
          />
          <span
            className="absolute top-1"
            style={{
              left: `${percentToNextLevel}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    </>
  )
}
