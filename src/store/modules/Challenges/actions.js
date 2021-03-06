export const actions = {
  closeLevelUpModal: ({ commit }) => commit('closeLevelUpModal'),
  handleChallengeSucceeded: ({ commit }) => {
    commit('completeChallenge');
    commit('resetChallenge');
    commit('countdown/resetCountdown', null, {root: true});
  },
  handleChallengeFailed: ({ commit }) => {
    commit('resetChallenge');
    commit('countdown/resetCountdown', null, {root: true});
  },
  resetChallenge: ({ commit }) => commit('resetChallenge'),
}