import Challenges from './modules/Challenges';
import Countdown from './modules/Countdown';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    challenges: Challenges,
    countdown: Countdown,
  }
})
