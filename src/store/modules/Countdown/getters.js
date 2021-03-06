export const getters = {
  minuteLeft: state => state.MinuteLeft = String(state.minutes).padStart(2, '0').split('').splice(0, 1)[0],
  minuteRight: state => state.MinuteRight = String(state.minutes).padStart(2, '0').split('').splice(1)[0],
  minutes: state => state.minutes = Math.floor(state.time / 60),
  secondLeft: state => state.SecondLeft = String(state.seconds).padStart(2, '0').split('').splice(0, 1)[0],
  secondRight: state =>  state.SecondRight = String(state.seconds).padStart(2, '0').split('').splice(1)[0],
  seconds: state => state.seconds = state.time % 60,
}