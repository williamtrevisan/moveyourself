import challenges from '../../../../challenges.json';

export const mutations = {
  startNewChallenge(state) {
    state.challenges = challenges;
    state.randomChallengeIndex = Math.floor(Math.random() * state.challenges.length),
    state.challenge = state.challenges[state.randomChallengeIndex],

    state.activeChallenge = state.challenge;
  },
  resetChallenge(state) {
    state.activeChallenge = null;
  },
  completeChallenge(state) {
    if(!state.activeChallenge) {
      return;
    }

    state.amount = state.activeChallenge.amount;
    state.finalExperience = state.currentExperience + state.amount;

    if (state.finalExperience >= state.experienceToNextLevel) {
      state.finalExperience -= state.experienceToNextLevel;
      state.level++;
      state.isLevelUpModalOpen = true;
    }
    state.currentExperience = state.finalExperience;
    state.challengesCompleted += 1;
  },
  closeLevelUpModal(state) {
    state.isLevelUpModalOpen = false;
  },
  startNotification(state) {
    new Audio('/notification.mp3').play();
    state.isNotificationOnScreen = true;
  },
  resetNotification(state) {
    state.isNotificationOnScreen = false;
  },
}