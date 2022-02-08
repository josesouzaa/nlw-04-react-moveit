import { useChallengesContext } from '../contexts/ChallengesContext'

export function Profile() {
  const { level } = useChallengesContext()

  return (
    <div className="flex items-center">
      <img
        className="w-20 h-20 rounded-full"
        src="https://github.com/josesouzaa.png"
        alt="José de Souza"
      />

      <div className="ml-6">
        <strong className="text-2xl font-semibold text-customTitle">
          José de Souza
        </strong>

        <p className="text-base mt-2 flex items-start">
          <img className="mr-2" src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
