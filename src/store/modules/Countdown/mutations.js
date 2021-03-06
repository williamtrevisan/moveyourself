export const mutations = {
  startCountdown(state) {
    state.isActive = true;
  },
  resetCountdown(state) {
    clearTimeout(state.countdownTimeout);
    state.isActive = false;
    state.hasFinished = false;
    state.time = 25 * 60;
    state.minutes = Math.floor(state.time / 60);
    state.seconds = (state.time % 60);
  },
  updateTime(state) {
    state.time = state.time - 1;
    state.minutes = Math.floor(state.time / 60);
    state.seconds = (state.time % 60);
  },
  finishTime(state) {
    state.hasFinished = true;
    state.isActive = false;
  },
}