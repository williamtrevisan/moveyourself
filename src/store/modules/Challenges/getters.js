export const getters = {
  challenge: (state) => state.challenge = state.challenges[state.randomChallengeIndex],
  experienceToNextLevel: state => state.experienceToNextLevel = Math.pow((Number(state.level) + 1) * 4, 2),
  percentToNextLevel: state => state.percentToNextLevel = Math.round((Number(state.currentExperience) * 100)) / state.experienceToNextLevel,
  randomChallengeIndex: state => state.randomChallengeIndex = Math.floor(Math.random() * state.challenges.length),
}
