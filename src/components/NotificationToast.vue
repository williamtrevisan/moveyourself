<template>
    <div 
      class="notificationToast"
      v-if="activeChallenge"
    >
      <div class="notificationToastContent">
        <img class="notificationToastImage" v-bind:src="`icons/${activeChallenge.type}.svg`" />
        <p class="notificationToastMessage">
          Valendo {{ activeChallenge.amount }}xp!
        </p>
      </div>
      <div class="notificationToastOrnament">
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
      ...mapState('challenges', [
        'activeChallenge',
      ])
  },
}
</script>

<style>
  .notificationToast {
    bottom: 5rem;
    height: 10rem;
    pointer-events: none;
    position: fixed;
    right: 0;
    width: 30rem;
  }

  .notificationToast > * {
    transition: transform 375ms cubic-bezier(0.64, 0, 0.78, 0);
  }

  .notificationToast.isNotificationOnScreen > * {
    transform: initial;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .notificationToastContent {
    align-items: center;
    background-color: var(--white);
    display: flex;
    height: 100%;
    padding: 3rem;
    position: relative;
    transform: translateX(calc(100% + 0.5rem));
    width: 100%;
  }

  .isNotificationOnScreen .notificationToastContent {
    transform: none;
    transition-delay: 300ms;
  }

  .notificationToastImage {
    height: 100px;
    margin-right: 3rem;
    width: 100px;
  }

  .notificationToastMessage {
    color: var(--title);
    font-size: 1.25rem;
  }

  .notificationToastOrnament {
    background-color: var(--green);
    height: 100%;
    position: absolute;
    top: 0;
    transform: translateX(100%);
    transition-delay: 150ms;
    width: 100%;
    z-index: -1;
  }

  .isNotificationOnScreen .notificationToastOrnament {
    transform: translateX(-0.5rem);
    transition-delay: 0;
  }
</style>