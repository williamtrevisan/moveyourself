<template>
  <div>
    <div class="countdownContainer">
      <div style="display: none">
        <span>{{ time }}</span>
        <span>{{ minutes }}</span>
        <span>{{ seconds }}</span>
      </div>
      <div>
        <span>{{ minuteLeft }}</span>
        <span>{{ minuteRight }}</span>
      </div>
      <span>:</span>
      <div>
        <span>{{ secondLeft }}</span>
        <span>{{ secondRight }}</span>
      </div>
    </div>
    <button 
      class="countdownButton countdownButtonActive" 
      type="button" 
      v-if="isActive"
      v-on:click="resetCountdown"
    >
      Abandonar ciclo
    </button>
    <button 
      class="countdownButton" 
      disabled
      v-else-if="hasFinished"
    >
      Ciclo encerrado
    </button>
    <button 
      class="countdownButton" 
      type="button" 
      v-else
      v-on:click="startCountdown"
    >
      Iniciar ciclo
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters('countdown', [
      'minuteLeft',
      'minuteRight',
      'minutes',
      'secondLeft',
      'secondRight',
      'seconds',
    ]),
    ...mapState('countdown', [
      'time',
      'isActive',
      'hasFinished',
    ])
  },
  methods: {
    ...mapActions('countdown', [
      'updateTime',
      'startCountdown',
      'resetCountdown',
    ]),
  },
  watch: {
    time: {
      handler: 'updateTime',
      immediate: true,
    },
    isActive: {
      handler: 'updateTime',
      immediate: true,
    },
  }
}
</script>

<style>
  .countdownContainer {
    align-items: center;
    color: var(--title);
    display: flex;
    font-family: Rajdhani;
    font-weight: 600;
  }

  .countdownContainer > div {
    align-items: center;
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    display: flex;
    flex: 1;
    font-size: 8.5rem;
    justify-content: space-evenly;
    text-align: center;
  }

  .countdownContainer > div span {
    flex: 1;
  }

  .countdownContainer > div span:first-child {
    border-right: 1px solid #F0F1F3;
  }

  .countdownContainer > div span:last-child {
    border-left: 1px solid #F0F1F3;
  }

  .countdownContainer > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  .countdownButton {
    align-items: center;
    background: var(--blue);
    border-radius: 5px;
    border: 0;
    color: var(--white);
    display: flex;
    font-size: 1.25rem;
    font-weight: 600;
    height: 5rem;
    justify-content: center;
    margin-top: 2rem;
    transition: background-color 0.2s;
    width: 100%;
  }

  .countdownButton:not(:disabled):hover {
    background: var(--blue-dark);
  }

  .countdownButtonActive {
    background: var(--white);
    color: var(--title);
  }

  .countdownButtonActive:not(:disabled):hover {
    background: var(--red);
    color: var(--white)
  }

  .countdownButton:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
</style>