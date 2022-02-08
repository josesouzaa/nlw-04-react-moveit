import { useChallengesContext } from '../contexts/ChallengesContext'

export function CompletedChallenges() {
  const { challengesCompleted } = useChallengesContext()

  return (
    <div className="flex items-center justify-between my-14 mx-0 pb-4 border-b border-gray-400 font-medium">
      <span className="text-xl">Desafios completos</span>
      <span className="text-2xl">{challengesCompleted}</span>
    </div>
  )
}
