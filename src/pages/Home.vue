<template>
  <div class="container">
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
        <NotificationToast 
          :class="{ isNotificationOnScreen: isNotificationOnScreen }"
        />
      </div>
      <div>
        <ChallengeBox />
        <LevelUpModal 
          v-if="isLevelUpModalOpen"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ChallengeBox from './../components/ChallengeBox.vue';
import CompletedChallenges from './../components/CompletedChallenges.vue';
import Cookies from 'js-cookie';
import Countdown from './../components/Countdown.vue';
import ExperienceBar from './../components/ExperienceBar.vue';
import LevelUpModal from './../components/LevelUpModal.vue';
import NotificationToast from './../components/NotificationToast.vue';
import Profile from './../components/Profile.vue';

export default {
  computed: {
    ...mapState('challenges', [
      'level',
      'currentExperience',
      'challengesCompleted',
      'isLevelUpModalOpen',
      'isNotificationOnScreen',
    ])
  },
  components: {
    ChallengeBox,
    CompletedChallenges,
    Countdown,
    ExperienceBar,
    LevelUpModal,
    NotificationToast,
    Profile,
  },
  watch: {
    level() {
      Cookies.set('level', String(this.level));
    },
    currentExperience() {
      Cookies.set('currentExperience', String(this.currentExperience));
    },
    challengesCompleted() {
      Cookies.set('challengesCompleted', String(this.challengesCompleted));
    },
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    max-width: 992px;
    padding: 2.5rem 2rem;
  }

  .container section {
    align-content: center;
    display: grid;
    flex: 1;
    gap: 6.25rem;
    grid-template-columns: repeat(2, 1fr);
  }
</style>