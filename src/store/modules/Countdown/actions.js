export const actions = {
  startCountdown: ({ commit }) => commit('startCountdown'),
  resetCountdown: ({ commit }) => commit('resetCountdown'),
  updateTime: ({ state, commit, rootState }) => {
    if(state.isActive && state.time > 0) {
      state.countdownTimeout = setTimeout(() => {
        commit('updateTime');
      }, 1000) 
    } else if (state.isActive && state.time === 0) {
      commit('finishTime');
      commit('challenges/startNewChallenge', null, {root: true});
      
      if (rootState.isNotification !== true) {
        setTimeout(() => {
          commit('challenges/startNotification', null, {root: true});
        }, 200)
      }

      setTimeout(() => {
        commit('challenges/resetNotification', null, {root: true});
      }, 3000)
    }
  },
}